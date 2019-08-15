;
(function(win) {
	// 这是一个私有属性，不需要被实例访问
    var transform = getTransform();
    function Drag(selector) {
        // 放在构造函数中的属性，都是属于每一个实例单独拥有
        this.elem = typeof selector == 'Object' ? selector : document.getElementById(selector);
        this.startX = 0;
        this.startY = 0;
        this.sourceX = 0;
        this.sourceY = 0;

        this.init();
    }
    // 原型
    Drag.prototype = {
    	constructor: Drag,

    	init: function () {
    		// 初始化是该做什么事
    		this.setDrag()
    	},
		// 用于获取元素的属性
		getStyle: function (property) {
			return document.defaultView.getComputedStyle? document.defaultView.getComputedStyle(this.elem, null)[property] : this.elem.currentStyle[property];			
		}
		// 用来获取元素的位置信息
		getPosition: function () {
			var pos = { x: 0, y: 0 };
			if (transform) {
				var transformValue = this.getStyle(transform)
				if(transformValue == 'none') {
                    this.elem.style[transform] = 'translate(0, 0)';
                } else {
                    var temp = transformValue.match(/-?\d+/g);
                    pos = {
                        x: parseInt(temp[4].trim()),
                        y: parseInt(temp[5].trim())
                    }
                }
			} else {
				if(this.getStyle('position') == 'static') {
                    this.elem.style.position = 'relative';
                } else {
                    pos = {
                        x: parseInt(this.getStyle('left') ? this.getStyle('left') : 0),
                        y: parseInt(this.getStyle('top') ? this.getStyle('top') : 0)
                    }
                }
			}
			return pos;
		},
		// 用来设置元素位置
		setPosition: function (pos) {
			if(transform) {
                this.elem.style[transform] = 'translate('+ pos.x +'px, '+ pos.y +'px)';
            } else {
                this.elem.style.left = pos.x + 'px';
                this.elem.style.top = pos.y + 'px';
            }
		}
		// 用来绑定事件
		setDrag: function () {
			var self = this;
            this.elem.addEventListener('mousedown', start, false);
            function start(event) {
                self.startX = event.pageX;
                self.startY = event.pageY;

                var pos = self.getPosition();

                self.sourceX = pos.x;
                self.sourceY = pos.y;

                document.addEventListener('mousemove', move, false);
                document.addEventListener('mouseup', end, false);
            }

            function move(event) {
                var currentX = event.pageX;
                var currentY = event.pageY;

                var distanceX = currentX - self.startX;
                var distanceY = currentY - self.startY;

                self.setPostion({
                    x: (self.sourceX + distanceX).toFixed(),
                    y: (self.sourceY + distanceY).toFixed()
                })
            }

            function end(event) {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', end);
                // do other things
            }
		}
    }
    // 私有方法，仅仅用来获取transform的兼容写法
    function getTransform() {
        var transform = '',
            divStyle = document.createElement('div').style,
            transformArr = ['transform', 'webkitTransform', 'MozTransform', 'msTransform', 'OTransform'],

            i = 0,
            len = transformArr.length;

        for(; i < len; i++)  {
            if(transformArr[i] in divStyle) {
                return transform = transformArr[i];
            }
        }

        return transform;
    }
    // 一种对外暴露的方式
    win.Drag = Drag;
})(window)



// 通过扩展方法将拖拽扩展为jQuery的一个实例方法
(function ($) {
  $.fn.extend({
    becomeDrag: function () {
      new Drag(this[0]);
      return this;   // 注意：为了保证jQuery所有的方法都能够链式访问，每一个方法的最后都需要返回this，即返回jQuery实例
    }
  })
})(jQuery);

// 使用：声明2个拖拽实例
new Drag('target');
new Drag('target2');


/*
    那么我们面临的挑战就在于，如何合理的处理属性与方法的位置。

    当然，每一个对象的情况都不一样，不能一概而论，我们需要清晰的知道这三种位置的特性才能做出最适合的决定。

    构造函数中： 属性与方法为当前实例单独拥有，只能被当前实例访问，并且每声明一个实例，其中的方法都会被重新创建一次。
    原型中： 属性与方法为所有实例共同拥有，可以被所有实例访问，新声明实例不会重复创建方法。
    模块作用域中：属性和方法不能被任何实例访问，但是能被内部方法访问，新声明的实例，不会重复创建相同的方法。
    对于方法的判断比较简单。

    因为在构造函数中的方法总会在声明一个新的实例时被重复创建，因此我们声明的方法都尽量避免出现在构造函数中。

    而如果你的方法中需要用到构造函数中的变量，或者想要公开，那就需要放在原型中。

    如果方法需要私有不被外界访问，那么就放置在模块作用域中。




    静态方法与工具方法
        而在实现jQuery扩展方法的想法中，一部分方法需要扩展到jQuery构造函数中，一部分方法需要扩展到原型中，当我们通读jQuery源码，还发现有一些方法放在了模块作用域中，至于为什么会有这样的区别，建议大家回过头去读读前一篇文章。
        而放在构造函数中的方法，因为我们在使用时，不需要声明一个实例对象就可以直接使用，因此这样的方法常常被叫做工具方法，或者所谓的静态方法。工具方法在使用时因为不用创建新的实例，因此相对而言效率会高很多，但是并不节省内存。
        而工具方法的特性也和工具一词非常贴近，他们与实例的自身属性毫无关联，仅仅只是实现一些通用的功能，我们可以通过$.each与$('div').each这2个方法来体会工具方法与实例方法的不同之处。
*/
(function () {
			function Side() {
				// iframe.attr('src', '01.html');
				// console.log(iframe.src)
				var _this = this;
				this.destory = "";
				this.open = function (url, data, callback) {
					// console.log(iframe.src)
					if (_this.iframe) {
						_this.iframe.remove()
					}
					_this.iframe = $('<iframe id="iframe" src frameborder="0" width="400" height ="200"></iframe>')
					_this.iframe.attr('src', url);
					$('body').append(_this.iframe)
					_this.iframe.on('load', function () {
						// console.log(_this.iframe[0].contentWindow.getData)
						if (_this.iframe[0].contentWindow.setData) {
							// console.log(111)
							_this.iframe[0].contentWindow.setData(data)
						}
						_this.iframe[0].contentWindow.username = 'zs';
						_this.iframe[0].contentWindow.getData = function () {
							// console.log(111)
							return data;
						}
					})
					_this.destory = function (param) {
						if (callback) {
							callback(param)
						}
					}

				}
				this.close = function (data) {
					_this.iframe.remove();
					_this.destory(data)
				}
			}
			$.newSide = null;
			$.side = function () {
				$.newSide = new Side()
			}
			$.side.open = function (url, data, callback) {
				$.newSide.open(url, data, callback)
			}
			$.side.close = function (data) {
				$.newSide.close(data)
			}
		})()
// 导入 http 内置模块
const http = require('http');
// 这个核心模块能够帮我们解析url地址从而拿到pathname query
const urlModule = require('url');

// 创建一个http服务器
const server = http.createServer();

server.on('request', function (req, res) {
	// const url = req.url;
	console.log(urlModule.parse(req.url, true))
	// 使用解构赋值定义url和query
	const { pathname: url, query } = urlModule.parse(req.url, true);
	if (url === '/getscript') {
		// 拼接一个合法的js脚本，这里拼接的是一个方法的调用
		// var scriptStr = 'show()';

		var data = {
			name: 'asd',
			age: 18,
			gender: 'girl'
		}

		var scriptStr = `${query.callback}(${JSON.stringify(data)})`;
		// res.end发送给客户端，客户端把这个字符串当成js代码去解析执行
		res.end(scriptStr);
	}else {
		res.end('404');
	}
});

server.listen(3000, function () {
	console.log('localhost:3000');
})
const http = require('http');

function onRequest(req, res) {
	console.log('req received');

	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.write('hello node');
	res.end();
}

function start() {
	http.createServer(onRequest).listen(8000);
	console.log('server has started');
}

exports.start = start;

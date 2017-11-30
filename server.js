const http = require('http');
const url = require('url');

function onRequest(req, res) {

	// add pathname parse
	const pathname = url.parse(req.url).pathname;
	
	console.log('req ' + pathname + ' received');
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

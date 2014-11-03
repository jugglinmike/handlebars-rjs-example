'use strict';

var http = require('http');
var fs = require('fs');
var path = require('path');

function makePath(domain, url) {
	if (url[url.length - 1] === '/') {
		url += 'index.html';
	}

	return path.resolve(__dirname + '/' + domain + url);
}

http.createServer(function(req, res) {
	var filePath = path.join(__dirname, 'www', path.normalize(req.url));

	if (req.url[req.url.length - 1] === '/') {
		filePath = path.join(filePath, 'index.html');
	}

	fs.readFile(filePath, { encoding: 'utf-8' }, function(err, contents) {
		if (err) {
			res.end('Error: ' + err);
			return;
		}

		if (process.env.NODE_ENV === 'production') {
			contents = contents.replace(
				/bower_components[^'"]+/, 'optimized.js'
			);
		}

		res.end(contents);
	});
}).listen('8003');

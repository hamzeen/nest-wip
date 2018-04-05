const http = require('http');
const url  = require('url');
const fs   = require('fs');

var hostname = 'localhost';
var port = process.env.port || 3000;

var server = http.createServer(function (request, response) {
    console.log(request.method + ':' + request.url);
    var matched = false;

    if (request.url == '/api/posts.json') {
        matched = true;
        console.log('expected here!!');
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/json');
        fs.readFile('./' + request.url, function(err, data) {
            response.end(data);
        });
    } if (request.url == '/index.html' || request.url == '/' || request.url === '') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        fs.readFile('./index.html', function(err, data) {
            response.end(data);
        });
    }


    if (!matched && request.url == '/404/index.html' || request.url == '/404/' || request.url == '/404') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        fs.readFile('./404/index.html', function(err, data) {
            response.end(data);
        });
    } else if (!matched && request.url.indexOf('/post/') > -1) {
        console.log('here!!');
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        fs.readFile('./post/index.html', function(err, data) {
            response.end(data);
        });
    } else {
        console.log("else::" + request.url);
        var path = './'+ request.url;
        response.statusCode = 200;
        // response.setHeader('Content-Type', 'text/css');
        fs.readFile(path, function(err, data) {
            response.end(data);
        });
    }
});

/**
 * this would print the following on your console "Server running at http://127.0.0.1:3000/"
 * to confirm that our simple web server is running.
 */
server.listen(port, function(){
    console.log("Nest started on: http://localhost:", port);
});

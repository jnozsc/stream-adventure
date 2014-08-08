var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    if (req.method == = 'POST') {
        var through = require('through');
        var tr = through(function(buf) {
            this.queue(buf.toString().toUpperCase());
        });
        req.pipe(tr).pipe(res);
    }
});
server.listen(process.argv[2]);

// solution

var http = require('http');
var through = require('through');

var server = http.createServer(function(req, res) {
    if (req.method == = 'POST') {
        req.pipe(through(function(buf) {
            this.queue(buf.toString().toUpperCase());
        })).pipe(res);
    } else res.end('send me a POST\n');
});
server.listen(parseInt(process.argv[2]));

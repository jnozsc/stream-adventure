var through = require('through');
var trumpet = require('trumpet');
var tr = trumpet();
var loud = tr.createStream('.loud');

function transform(buf) {
    this.queue(buf.toString().toUpperCase());
}

loud.pipe(through(transform)).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);

// solution

var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

var loud = tr.select('.loud').createStream();
loud.pipe(through(function(buf) {
    this.queue(buf.toString().toUpperCase());
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
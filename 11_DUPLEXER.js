var spawn = require('child_process').spawn;

module.exports = function(cmd, args) {
    // spawn the process and return a single stream
    var child = spawn(cmd, args);
    // joining together the stdin and stdout here
    var duplex = require('duplexer');
    return duplex(child.stdin, child.stdout);
};

// solution
var spawn = require('child_process').spawn;
var duplexer = require('duplexer');

module.exports = function(cmd, args) {
    var ps = spawn(cmd, args);
    return duplexer(ps.stdin, ps.stdout);
};

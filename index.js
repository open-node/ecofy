var through = require('through')
  , eco = require("eco");

module.exports = function(file) {
  if (!/\.eco|\.ecoffee/.test(file)) return through();

  var buffer = "";

  return through(function(chunk) {
    buffer += chunk.toString();
  }, function() {
    var templateFn  = eco.compile(buffer)
      , compiled = "module.exports = " + templateFn.toString() + ";\n";
    this.queue(compiled);
    this.queue(null);
  });

};


var util = require('util');
var EventEmitter = require('events').EventEmitter;

var calc = function(){
  var self = this;

  this.on('stop', function(){
    console.log('calc에 stop event가 전달됨');
  });
}

util.inherits(calc, EventEmitter); //상속시켜줌. calc를 EnevtEmitter에 상속.
calc.prototype.add = function(a, b){
  return a+b;
}

module.exports = calc;
module.exports.title = 'calc';

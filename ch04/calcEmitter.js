var calc = require('./calc');

var calc1 = new calc();

calc1.emit('stop');

console.log(calc.title + '에 stop 이벤트 전달함');

console.log('10 + 10 = %d', calc1.add(10,10));

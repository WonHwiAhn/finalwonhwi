/*var calc = require('./calc');
console.log('after seperate of module - result to call of calc.add function', calc.add(10,10));

var calc1 = {};
calc1.add=function(a, b){
  return a+b;
}

console.log('result is %d', calc1.add(10,10));*/

var user =[{name:'hi', age:20},{name:'jaja',age:30}];

user.push({name:'haha', age:15});

console.log('사용자 수: %d', user.length);
console.log('첫 번째 사용자 이름: %s', user[0].name);

var person = [{
  age:20,
  name:'haha',
  /*add:function(a,b){
    return a+b;
  }*/
}]

var test = function(a,b){
  return a-b;
};

person.push(test);
person.push({age:20, name:'jaja'})

console.log('더하기: %d, %s',person.name);

console.log('test: %d', person[1](10,4));

console.log('test1111: %s', person[2](10,4));

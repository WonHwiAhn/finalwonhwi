function person(name, age){
  this.name = name;
  this.age = age;
}

person.prototype.walk = function(speed){
  console.log('현재 사용자는 %d 속도로 걷고 있습니다.', speed);
  this.walk = speed;
}

var p = new person('haha', 25);
var p1 = new person('haha', 25);

console.log(p.name+'사람의 걷기 호출');
p.walk(10);

console.log(p.walk);

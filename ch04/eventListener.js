process.on('exit',function(){
  console.log('exit이벤트 발생');
})

setTimeout(function(){
  console.log('2초 뒤에 exit 이벤트 발생할 예정');
}, 2000);

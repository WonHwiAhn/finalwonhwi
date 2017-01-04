process.on('tick',function(count){
  console.log('tick발생 %d', count);
});

setTimeout(function(){
  console.log('test emit');

  process.emit('tick', 2);
},2000)

if(process.argv.length>2) {
  var sum = 0;
  for(var i=2; i<process.argv.length;i++) {
    sum+= +process.argv[i];
  }
  console.log(sum);
}

/**
 var result = 0
 for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])
 console.log(result)
 **/

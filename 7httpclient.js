var http = require("http");
var url = process.argv[2];

if(url) {
  http.get(url, function(stream){
    stream.on("data", function(data){
      console.log(data.toString());
    });
  });
}

/*
  var http = require('http')
  
  http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
  })
*/

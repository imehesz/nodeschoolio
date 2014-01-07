var http = require("http");
var bl = require("bl");
var url = process.argv[2];

if(url) {
  http.get(url, function(stream){
    stream.pipe(bl(function(err,data){
      var strData = data.toString();
      console.log(strData.length);
      console.log(strData);
    }));
  });
}


/*
-----------------------------------------------------------------

  var http = require('http')
  var bl = require('bl')
  
  http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(data)
      data = data.toString()
      console.log(data.length)
      console.log(data)
    }))  
  })
*/

var http = require("http");
var bl = require("bl");
var urls = [
            { url: process.argv[2], content: "" },
            { url: process.argv[3], content: "" },
            { url: process.argv[4], content: "" },
          ];

var urlsHaveContent = function() {
  if (urls[0].content === "") return false;
  if (urls[1].content === "") return false;
  if (urls[2].content === "") return false;
  
  return true;
}

var printUrlsContent = function() {
  urls.forEach(function(url,i) {
    console.log(url.content);
  });
}

if (urls.length == 3) {
  urls.forEach(function(url,i) {
    http.get(url.url, function(stream){
      stream.pipe(bl(function(err,data){
        var strData = data.toString();
        url.content = strData;
        if (urlsHaveContent() ) {
          printUrlsContent();
        }
      }));
    });
  });
}

/*
-----------------------------------------------------------------

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(data)
    
          results[index] = data.toString()
          count++
    
          if (count == 3) // yay! we are the last one!
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)
      
*/
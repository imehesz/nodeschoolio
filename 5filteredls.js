var fs = require("fs");

var path = process.argv[2];
var ext = process.argv[3];

if( path && ext ) {
  fs.readdir(path, function(err,data){
    if( data.length > 0 ) {
      data.forEach(function(file){
        var lastChars = file.substr(file.length-ext.length-1,file.length);
        if( lastChars == "." + ext ) {
          console.log(file);
        }
      });
    }
  });
}

/*
var fs = require('fs')
var regex = new RegExp('\\.' + process.argv[3] + '$')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (regex.test(file))
      console.log(file)
  })
})
*/

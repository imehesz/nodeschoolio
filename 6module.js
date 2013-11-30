var fs = require("fs");

module.exports = function(path,ext,callback){
  var retval = [];

  fs.readdir(path, function(err,data){
    if ( err ) {
      return callback(err);
    }

    data.forEach(function(fileName){
      var lastChars = fileName.substr(fileName.length-ext.length-1,fileName.length);
      if( lastChars == "." + ext ) {
        retval.push(fileName);
      }
    });

    callback(null,retval);
  });
}

/* -------------------
var fs = require('fs')

module.exports = function (dir, filterStr, callback) {
  var regex = new RegExp('\\.' + filterStr + '$')

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return regex.test(file)
    })

        callback(null, list)
  })
}
-------------------*/

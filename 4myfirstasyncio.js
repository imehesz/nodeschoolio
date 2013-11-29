var fs = require("fs");
var fPath = process.argv[2];

if(fPath) {
  var buff = fs.readFile(fPath, "utf8", function(err,data){
    if(!err) {
      console.log(data.split("\n").length-1);
    }
  });
}

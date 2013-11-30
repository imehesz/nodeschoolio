var filterls = require("./6module.js");
filterls(process.argv[2],process.argv[3],function(err,data){
  if( err ) {
    return console.log(err);
  }

  if(data.length>0) {
    data.forEach(function(fileName){
      console.log(fileName);
    });
  }
});

/* ----------------
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
  return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})
-------------------*/

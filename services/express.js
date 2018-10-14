//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
    var boxColor = true;
   res.send(boxColor);
})
 
var server = app.listen(5003, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})

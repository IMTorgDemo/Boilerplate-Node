console.log("Setting up Authorization")

//require("babel-register")
var path = require("path")
var express = require("express")
global.appRoot = path.resolve(__dirname)
var app = express();

require("./config/mongoose")("mongodb://172.17.0.2:27017/users")
require("./config/express")(app)
require("./config/passport")()
require("./config/routes/routes.js")(app)

var port = 3456;
app.listen(port, function() {
    console.log(`Server listenting on port: ${port}`)
    app.emit("systemStarted");
})
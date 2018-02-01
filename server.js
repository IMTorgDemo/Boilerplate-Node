// Global
require("babel-register")
global._ = require('underscore')
global.path = require("path")
global.async = require('async')
global.config = require('./config/env/' + process.env.NODE_ENV)

/* load environment variables from .env file
var dotenv = require('dotenv');
dotenv.load();*/


console.log("Setting up Authorization")

var express = require("express")
global.appRoot = global.path.resolve(__dirname)
var app = express();
var dbconn = `mongodb://${global.config.database.location}:${global.config.database.port}/${global.config.database.db}`

require("./config/mongoose")(dbconn)
require("./config/express")(app)
require("./config/passport")()
require("./config/routes/routes.js")(app)

var port = 3456;
app.listen(port, function() {
    console.log(`Server listenting on port: ${port}`)
    app.emit("systemStarted");
})
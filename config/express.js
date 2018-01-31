/* Global
global._ = require('underscore')
global.async = require('async')
global.config = require('./config/env/' + process.env.NODE_ENV)

// load environment variables from .env file
var dotenv = require('dotenv');
dotenv.load();*/

// Local
var express = require("express")
var expressSession = require("express-session")
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var flash = require("connect-flash")
var passport = require("passport")
var exphbs = require('express-handlebars');
var path = require("path")

var hbs = exphbs.create({
    defaultLayout: 'main'
        //helpers: require('./config/handlebars-helpers')
});


module.exports = function(app) {
    app.set('views', path.join(__dirname, "..", "views"))
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');

    var public = path.join(__dirname, '..', 'public')
    console.log(`Static files served from: ${public}`)
    app.use(express.static(public));

    app.use(logger('dev'))
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({ extended: "true" }))
    app.use(bodyParser.json())
    app.use(expressSession({ secret: "myDemoKey", resave: true, saveUnintialized: true }))
    app.use(flash())
    app.use(passport.initialize())
    app.use(passport.session())

}
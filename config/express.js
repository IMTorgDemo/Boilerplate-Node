var express = require("express")
var expressSession = require("express-session")
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var flash = require("connect-flash")
var passport = require("passport")


module.exports = function(app) {
    app.set('views', __dirname + "../../views")
    app.set('view engine', 'handlebars')

    app.use(logger('dev'))
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({ extended: "true" }))
    app.use(bodyParser.json())
    app.use(expressSession({ secret: "myDemoKey", resave: true, saveUnintialized: true }))
    app.use(flash())
    app.use(passport.initialize())
    app.use(passport.session())
}
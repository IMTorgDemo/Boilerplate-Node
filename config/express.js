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

    var publicDir = path.join(__dirname, '..', 'public')
    console.log(`Static files served from: ${publicDir}`)
        //app.use(express.static(publicDir));
    app.use('/public', express.static('public')) //this line replaces the one above it because route prefix '/users/ breaks the earlier code

    app.use(logger('dev'))
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({ extended: "true" }))
    app.use(bodyParser.json())
    app.use(expressSession({ secret: "myDemoKey", resave: true, saveUnintialized: true }))
    app.use(flash())

    app.use(passport.initialize())
    app.use(passport.session())

}
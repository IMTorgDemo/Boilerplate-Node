var passport = require("passport")
var express = require("express")


// middleware to check authentication of url
var role_admin = function(req, res, next) {
    var roles = req.user.roles
    if (roles.indexOf('admin') >= 0) {
        console.log("user authorized as admin")
        return next()
    }
    console.log("user not authorized as admin")
    res.redirect("/users/secret")
}

var checkAuthentication = function(req, res, next) {
    if (req.isAuthenticated())
        return next()

    res.redirect("/login")
}



module.exports = function(app) {

    var secureRouter = express.Router()

    //all routes only rendered if a user is authenticated using checkAuth middleware
    secureRouter.use(checkAuthentication)

    secureRouter.get("/secret", checkAuthentication, function(req, res) {
        var message = req.user.firstName
        res.render("secret", { messages: message })
    })

    //only rendered if user is authenticated and authorized with role: admin
    secureRouter.get('/admin', role_admin, function(req, res) {
        var message = req.user.lastName
        res.render('admin', { messages: message })
    })

    app.use('/users', secureRouter)

}
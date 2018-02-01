var passport = require("passport")
var express = require("express")


// middleware to check authentication of url
var checkAuthentication = function(req, res, next) {
    if (req.isAuthenticated())
        return next()

    res.redirect("/login")
}

module.exports = function(app) {

    var router = express.Router()

    router.get("/", function(req, res) {
        res.render("home")
    })

    router.get("/login", function(req, res) {
        var message = req.flash("error")[0] //possible errors from authentication
        console.log(message)
        if (message) {
            res.render("login", { messages: message })
        } else {
            res.render("login")
        }
    })

    router.get("/logout", function(req, res) {
        req.logout()
        res.redirect("/login")
    })

    router.get("/home", checkAuthentication, function(req, res) {
        res.render("home")
    })

    router.post("/login", passport.authenticate('login', {
        successRedirect: "/users/admin",
        failureRedirect: "/login",
        failureFlash: true
    }))

    app.use("/", router)

}
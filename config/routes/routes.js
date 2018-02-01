var passport = require("passport")
var express = require("express")
var User = require("../userModel")
var bcrypt = require("bcryptjs")


// middleware to check authentication of url
var checkAuthentication = function(req, res, next) {
    if (req.isAuthenticated())
        return next()

    res.redirect("/login")
}

var encryptPassword = function(plaintextPass) {
    var saltRounds = 10
    return bcrypt.hashSync(plaintextPass, saltRounds);
}





module.exports = function(app) {

    var router = express.Router()

    router.get("/", function(req, res) {
        res.render("home")
    })


    router.get("/signup", function(req, res) {
        var message = req.flash("error")[0] //possible errors from signup process
        console.log(message)
        if (message) {
            res.render("signup", { messages: message })
        } else {
            res.render("signup")
        }
    })

    router.post("/signup", function(req, res) {
        var password = encryptPassword(req.body.password)
        var data = {
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            userName: req.body.username,
            password: password,
            roles: req.body.role
        }
        User.findOne({ userName: req.body.username }, function(err, chkuser) {
            if (err) {
                console.log(err)
            }
            if (chkuser) {
                res.render("signup", { messages: "email already exists" })
            }
            if (chkuser == null | chkuser == undefined) {
                console.log(data)
                User.create(data, function(err, user) {
                    if (err) {
                        return next(err)
                    } else {
                        res.redirect("/login")
                    }
                })
            }
        })
    })

    router.get("/login", function(req, res) {
        var message = req.flash("error")[0] //possible errors from authentication
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
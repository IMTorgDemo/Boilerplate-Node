var passport = require("passport")
var LocalStrategy = require("passport-local").Strategy
var User = require("./userModel")
var bcrypt = require("bcryptjs")

var checkValidPassport = function(user, password) {
    return bcrypt.compareSync(password, user.password)
}

module.exports = function() {

    passport.use('login', new LocalStrategy(
        function(username, password, done) {
            User.findOne({ userName: username }, function(err, user) {
                if (err) return done(err)

                if (!user) {
                    console.log("user not found")
                    return done(null, false, { message: "User not found" })
                }

                if (!checkValidPassword(user, password)) {
                    console.log("password invalid")
                    return done(null, false, { message: "User password incorrect" })
                }

                console.log("authentication passed")
                return done(null, user)
            })
        }

    ))

    passport.serializeUser(function(user, done) {
        done(null, user._id)

    })

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user)
        })
    })
}
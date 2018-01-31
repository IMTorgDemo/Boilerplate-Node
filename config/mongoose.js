var mongoose = require("mongoose");

module.exports = function(connectionstring) {

    // Test with json
    //connectionstring = "../database/users.json"
    //var db = require(connectionstring)

    mongoose.connect(connectionstring)
    mongoose.Promise = global.Promise
    var db = mongoose.connection

    db.on("error", function(err) { console.log(err) })
    db.once("open", function() { console.log("connected to db") })
    if (db) {
        console.log("connected to db")
    }

}
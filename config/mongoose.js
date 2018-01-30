//var mongoose = require("mongoose");

module.exports = function(connectionstring) {

    //mongoose.connect(connectionstring)

    connectionstring = "../database/users.json"
    var db = require(connectionstring)
        //db.on("error", function(err){console.log(err)})
        //db.once("open", function(){console.log("connected to db")})
    if (db) { console.log("connected to db") }




}
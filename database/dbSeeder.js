'use strict';
// Retrieve
var MongoClient = require('mongodb').MongoClient;
var config = require('../config/env/development')
var data = require("./users.json")


const insertDoc = function(db, callback) {
    var collection = db.collection('users')
    collection.insertMany(data, function(err, result) {
        console.log(`Data is seeded`)
        callback(result)
    })
}




function mongoConnect(connectionstring) {

    // Connect to the db
    MongoClient.connect(connectionstring, function(err, client) {
        if (err) {
            return console.log(err)
        } else {
            console.log(`We are connected to: ${connectionstring}`)
            var db = client.db('AccountsDb')
            insertDoc(db, function() {
                client.close()
            })
        }
    });
}


var dbconn = `mongodb://${config.database.location}:${config.database.port}` // var dbconn = `mongodb://172.17.0.2:27017/users`
mongoConnect(dbconn)
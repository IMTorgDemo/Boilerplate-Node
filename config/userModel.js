var mongoose = require("mongoose")

/*
var userSchema = new Schema({.. }, { strict: false });
var User = mongoose.model('User', userSchema);
var user = new User({ iAmNotInTheSchema: true });
user.save() // iAmNotInTheSchema is now saved to the db!!
*/

var Schema = mongoose.Schema
var userSchema = new Schema({
    firstName: 'string',
    lastName: 'string',
    userName: 'string',
    password: 'string',
    roles: ['string']
})

module.exports = mongoose.model("User", userSchema)
// user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
    username: {type: String, required:true},
    password: {type: String},
    email: {type: String},
    city: {type: String}
});

User.plugin(passportLocalMongoose);


module.exports = mongoose.model('users', User);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/practice');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String
    , age: Number
    , favoriteCountries: {
        type: [String]
        , required: true
    , }
    , languagesLearning: {
        type: [String]
        , required: true
    }
    , languagesCanSpeak: {
        type: [String]
        , required: true
    , }
    , gender: {
        type: String
        , required: true
        , enum: ['male', 'female']
    }
})


var User = mongoose.model('User', userSchema);

var userOfSite = new User({
    name: 'Daphne'
    , age: 22
    , favoriteCountries: ["Spain", "Netherlands"]
    , languagesLearning: ["Spanish", "Dutch"]
    , languagesCanSpeak: ['English']
    , gender: 'female'
})
userOfSite.save(function (err, new_user) {
    console.log(new_user);
})

User.find({
    age: 22
}, function (err, user) {
    console.log(user)
})
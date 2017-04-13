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
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var voteRoute = require('./routers/vote-router');
var path = require('path')

app.use(bodyParser.json());
app.use('/rockthevote', voteRoute);
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/rockthevote', function(err){
    console.log('Connected to DB');
});


app.listen(8000, function(){
    console.log("server is listening at 8000");
})
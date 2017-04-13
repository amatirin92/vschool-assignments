var express = require('express');
var voteRoute = express.Router();
var Vote = require('../models/vote-schema');

voteRoute

.get('/', function(req, res){
    Vote.find(function(err, votes){
        res.send(votes);
    })
})

.post('/', function(req, res){
    newVotePost = new Vote(req.body);  newVotePost.save(function(err,savedPost){
        if (err) throw err;
        res.send(savedPost);
    });
})

.put('/:id', function(req,res){
    Vote.findByIdAndUpdate(req.params.id, req.body, function(err,editedPost){
        if (err) throw err;
        res.send(editedPost);
    })
})

.delete('/:id', function(req,res){
    Vote.findByIdAndRemove(req.params.id, function(err, deleted){
        console.log('It was deleted');
        res.send(deleted);
    })
    
})

module.exports = voteRoute;
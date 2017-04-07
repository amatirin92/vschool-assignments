var express = require('express');
var bodyParser = require('body-parser');
var id = require('uuid');
var app = express();
var port = 3000;


app.use(bodyParser.json());

var bounties = [
//    {
//      "first name": "king",
//      "last name": "avery",
//      "living": false,
//      "bounty amount": 40,
//      "type": "sith"
//    },
//
//    {
//      "first name": "jones",
//      "last name": "mailey",
//      "living": true,
//      "bounty amount": 21,
//      "type": "jedi"
//    }
];

app.get('/bounty', function(req,res){
    res.send(bounties);
    console.log(req.query);
})

app.post('/bounty', function(req,res){
    var newBounty = req.body;
    newBounty.id = id.v4();
    bounties.push(newBounty);
    res.send(`Your bounty of ${newBounty} has been added`)
})

app.delete('/bounty/:id', function(req,res){
    var bountyName = req.params.id;
    for(var i = 0; i < bounties.length; i++){
        if(bountyName === bounties[i].id){
            res.send(bounties.splice(i, 1))
        }   
    }
})

app.put('/bounty/:id', function(req,res){
    var editBounty = req.body;
    for(var i = 0; i < bounties.length; i++){
        if(editBounty.id === bounties[i].id){
            for(var key in editBounty){
                if(bounties[i][key] != editBounty[key]){
                    bounties[i][key] = editBounty[key]
                }
            } 
            res.send(bounties[i])
        }
     }
})


app.listen(port, function() {
    console.log('Server is listening on port ' + port);
});


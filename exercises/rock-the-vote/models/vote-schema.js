var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost/rockthevote');

var voteSchema = new Schema({
    title: String,
    description: String,
    upvotes : {
        type: Number,
        default: 0
    },
    downvotes : {
        type: Number,
        default: 0
    },
    totalVotes: {
        type:Number,
        default: 0
    },
    userComments: {
        type: [String]
    }
})

var Vote = mongoose.model('VoteModel', voteSchema);

module.exports = Vote;


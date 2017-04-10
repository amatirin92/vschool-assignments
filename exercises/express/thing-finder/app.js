var express = require('express');
var app = express();
var fruit = [
    {
        type: "banana"
        , color: "yellow"
    }
    , {
        type: "apple"
        , color: "red"
    }
    , {
        type: "mango"
        , color: "green"
    }
    , {
        type: "persimmon"
        , color: "red"
    }
]
app.get('/fruit', function (req, res) {
    console.log(req.query)
    foundItems = [];
    for (var i = 0; i < fruit.length; i++) {
        var haveFoundExactMatch = true;
        for (var key in fruit[i]) {
            if (req.query[key] != fruit[i][key]) {
                haveFoundExactMatch = false;
            }
            if (haveFoundExactMatch) {
                foundItems.push(fruit[i]);
            }
        }
    }
        
res.send(foundItems);
});

app.listen(8000, function () {
    console.log('Server is listening on port 8000')
})
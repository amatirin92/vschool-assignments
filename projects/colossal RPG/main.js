var readlineSync = require("readline-sync");

function RPG() {
    var name = readlineSync.question("Hopefully, you're ready to roll and roll, sunshine. What's your name? ");
    var action = readlineSync.keyIn("Okay " + name +  ", hit that W and start walking! ", {limit: '$<W>'});
}

console.log(RPG());
//
////My enemies and their HitPoints
//var enemies = [{
//            "name": "Wild Donkey"
//            , "hitPoints": 80
//        }
//        , {
//            "name": "Magical Unicorn"
//            , "hitPoints": 50
//        }
//        , {
//            "name": "Shelby, The Wild Beaver"
//            , "hitPoints": 20
//        }]
//
//    //"Okay + name + , hit that W and start walking!"
////
//=
//
//
//    //everytime w is pressed, a random algorithm will be run to determine if an enemy shows(if w is pressed, run this equation (1/3 to 1/4th chance))
        //get random number to determine if enemy shows between (1/3 max 1/4 min): 

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//    //will you run or be attacked?
//    //if attacked (a random attack power between a min and a max)
//    //if running ( choose a random number between 1 and 2, 50% chance of escape)
//    //
//    // So w
//    //
//console.log(RPG());
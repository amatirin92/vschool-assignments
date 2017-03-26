var readlineSync = require("readline-sync")
//Your status
var yourInventory = [];
var name;
var yourStatus = [name, 70, yourInventory];
var gameIsRunning = true;

//my array of enemies with their hitpoints
var enemies = [{
        "name": "The Wild Donkey"
        , "hitPoints": 10
  }
  , {
        "name": "The Magical Unicorn"
        , "hitPoints": 50
  }
 , {
        "name": "Shelby, The Wild Beaver"
        , "hitPoints": 30
   }]
//how to randomly choose an enemy
function whichEnemy(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return enemies[Math.floor(Math.random() * (2) + 1)];
}

var name = readlineSync.question("Hopefully, you're ready to roll and roll, sunshine. What's your name? ");

//my function to walk through the forest
function walk() {
    var pressAction = readlineSync.keyIn("Okay " + name + ", hit that W and start walking! ", {
        limit: 'wq'
    });
    if (pressAction === "w") {
        //each time W is pressed, there is a 1/4 chance of an attack
        if (Math.random() < .25) {
            getAttacked();
            gameIsRunning = true;
        }
        else {
            readlineSync.keyIn("You're safe for now...press w", {
                limit: '$<W>'
            });
        }
}
    else if (pressAction === "q") {
        gameIsRunning = false;
        return;
    }
}

while (gameIsRunning) {
    walk();
}

//get attacked function
function getAttacked() {
    var chosenEnemy = whichEnemy(1, 4);
    var randomAttackPower = Math.random();
    var chosenEnemyDamage = (chosenEnemy.hitPoints * randomAttackPower);
    var yourDamage = (randomAttackPower * yourStatus[1]);
    reply = ['Keep walking!', "Let's battle!"];
    
    readlineSync.keyInSelect(reply, "Zoinks, you've been attacked! Looks like " + chosenEnemy.name + " is coming for you! What to do?!");

//damage my health so that the while loop returns false
    if(reply[1]){
        if(chosenEnemyDamage > yourDamage) {
            if(Math.random() > .50) {
            gameIsRunning = false;
            yourStatus[1] = yourStatus[1] - yourStatus[1];
            console.log("Wow, looks like you got your ass whooped so bad you died! Bummer!"); 
            } 
            else {
                gameisRunning = true;
                yourStatus[1] = yourStatus[1] - chosenEnemyDamage;
                console.log("You took some damage! Now you're at " + yourStatus[1]);
            }
    }
        else if(yourDamage > chosenEnemyDamage){
        gameIsRunning = false;
        var chosenEnemyPower = chosenEnemy.hitPoints - yourDamage;
            
                if(chosenEnemyPower < 0) {
                    if (Math.random > .50 ){
                    yourInventory.push("spear") 
                    }
                    else {
                        yourInventory.push("sword");
                    }
                    
                    console.log("Good job! You killed the enemy! I'm scared of you!");
                    var findInv = readlineSync.keyIn("Press P to see your Inventory", {
                        limit: '$<P>'
                        });
                    if (findInv === "p"){
                        console.log(yourInventory);
                    }
                    
                }
                
                else {
                    console.log("Good job! You damaged the enemy, not enough to kill them, though!")
                }
        }
    }
}


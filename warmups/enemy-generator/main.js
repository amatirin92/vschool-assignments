//Function to determine the type of Enemy
var type;
var defense;

function Enemy(type, hitPoints, defense) {
    this.type = type;
    this.hitPoints = hitPoints;
    this.defense = defense;
}

function chooseType() {
    var randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
    if (randomNumber === 1) {
        return "Ancient Dragon"
    }
    else if (randomNumber === 2) {
        return "Prowler"
    }
    else {
        return "Mighty Grunt"
    }
}
//Function to determine the points

var pointsRangeTwo = Math.floor(Math.random() * (79 - 50) + 50);
var pointsRangeThree = Math.floor(Math.random() * (49 - 20) + 20);

function chooseHitPoints(type) {
    if (type === "Ancient Dragon") {
       var hitPoints = Math.floor(Math.random() * (100 - 80) + 80);
       return hitPoints;
    }
    else if (type === "Prowler") {
       var hitPoints = Math.floor(Math.random() * (79 - 50) + 50);
        return hitPoints;
    }
    else {
       var hitPoints = Math.floor(Math.random() * (49 - 20) + 20);
        return hitPoints;
    }
}

function chooseEnemyDefense(hitPoints) {
    return hitPoints * 3;
}

function GenerateEnemy(num){
    for (var i = 0; i <= num; i++) { 
    var type = chooseType();
    var hitPoints = chooseHitPoints(type);
    var defense = chooseEnemyDefense(hitPoints);
    console.log(" " + type + " " + hitPoints + " " + defense);
}

}


console.log(GenerateEnemy(100));
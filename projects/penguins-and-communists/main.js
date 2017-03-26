function Groupmaker(name) {
    this.name = name;
    this.startingPopulation = 1000000;
}
var firstGroup = new Groupmaker("Penguins");
var secondGroup = new Groupmaker("Communists");
if (Math.random() > 0.50) {
    var attackers = secondGroup;
    var party = firstGroup;
}
else {
    var attackers = firstGroup;
    var party = secondGroup;
}
//if attack is successful
function onHit(party) {
    party.startingPopulation = Math.round(party.startingPopulation - (Math.random() * 100));
    console.log("Whoa! The " + party.name + " have suffered a devastating loss! Now only " + party.startingPopulation + " souls remain...");
}
//if attack is unsuccessful
function onMiss(attackers, party) {
    console.log("The " + attackers.name + " had a nuke that missed the " + party.name + " and instead landed in the ocean");
}
while ((party.startingPopulation > 0) && (attackers.startingPopulation > 0)) {
    sendNuke(party, onHit, onMiss);
}

function sendNuke(party, onHit, onMiss) {
    //figure out if the attack is successful or not?
    //Math.random() > .50 = SUCCESS
    //Math.random() < .50 = FAILURE
    if (Math.random() > 0.50) {
        onMiss(attackers, party);
    }
    else {
        onHit(party);
    }
}
console.log(sendNuke(party, onHit, onMiss));

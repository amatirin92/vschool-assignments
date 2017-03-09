var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
var newArray = [];

function forLoop() {
for (var i = 0; i < people.length; i++) {
  newArray.push(people[i] + ":");
  for (var j = 0; j < alphabet.length; j++) {
    newArray.push(alphabet[j].toUpperCase());
  }
  console.log(newArray);
    
} 

}
forLoop();

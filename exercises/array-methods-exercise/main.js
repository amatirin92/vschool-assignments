var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables = vegetables.splice(0,3);

//console.log(vegetables);

fruit.splice(0,1);

//console.log(fruit);

var orangeIndex= fruit.indexOf("orange")

//console.log(orangeIndex);

fruit.push(orangeIndex);

console.log(fruit);

console.log(vegetables.length);

vegetables.push(3);

console.log(vegetables);

var food = fruit.concat(vegetables);

console.log(food);

food.splice(4,2);

console.log(food);

food.reverse();

console.log(food);

food = food.toString();

console.log(food);

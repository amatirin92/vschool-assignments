var readline = require("readline-sync")
function add(num1,num2){
    return num1 + num2
}
function multiply(num1,num2){
    return num1 * num2
}
function divide(num1,num2){
    return num1 / num2
}
function subtract(num1,num2){
    return num1 - num2
}
//
//var num1 = readline.question("Please enter your first number ");
//var num2 = readline.question("Please enter your second number ");


function javaCalc(){
var num1 = readline.question("Please enter your first number ");
var num2 = readline.question("Please enter your second number ");
    var answers = ['add', 'mul', 'sub', 'div'];
var whichOp = readline.keyInSelect(answers, "Please enter the operation to perform ");
    
if (whichOp == 0) {
    console.log("The result is " + (parseFloat(num1) + parseFloat(num2)))
    ;
}
else if (whichOp == 1){
    console.log("The result is " + (parseInt(num1) * parseInt(num2)));
}
else if (whichOp == 2) {
    console.log("The result is " + (parseInt(num1) - parseInt(num2)));
}

else if (whichOp == 3) {
    console.log("The result is " + (parseInt(num1) / parseInt(num2)));
}


}

console.log(javaCalc());

//readline.question replaces prompt
//readline.select for add, sub, mul, div

var readline = require('readline-sync');
var add = require('./add');
var sub = require('./subtract').sub;
var Multiply = require('./multiply');
var multObj = new Multiply();
var div = require('./divide');
var exp = require('./exponent')
var num1 = readline.question('What is your first number?');
var num2 = readline.question('What is your second number?');
readline.setDefaultOptions({
    limit: ['+', '-', '*', '/', '^']
})
var operation = readline.question('What math operation do you want to perform?');
if (operation === '+') {
    add(num1, num2);
}
else if (operation === '-') {
    sub(num1, num2);
}
else if (operation === '*') {
    multObj.mult(num1, num2)
}
else if (operation === '/') {
    div(num1, num2)
}
else if (operation === '^') {
    exp(num1, num2)
}
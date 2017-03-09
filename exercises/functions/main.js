function sumBoth(num1, num2) {
    return num1 + num2
}

sumBoth(2, 4);

// Exercise 2//

var greater = 0;
var greatest = 0;

function whichOneOfThree(num1,num2,num3) {
    if(num1 > num2){
        greater = num1;
    }
    else {
        greater = num2;
    }
    if(greater > num3){
        greatest = greater;
    }
    else {
        greatest = num3;
    }
    return = greatest;
}
whichOneOfThree(1,7,30);

//Exercise 3//

function evenOrOdd(num) {
    if (num % 2 === 0){
        return "even"
    }
    else {
        return "odd"
    }
    
}
//exercise 4//

var string = "don't bother me";

function howLongIsTheString(string) {
    if (string.length <= 20) {
        return string + string
    }
    else {
        var cutStringAt = (string.length/2)
        return string.slice(0, cutStringAt)
    }
}

howLongIsTheString();

//Optional challenges//




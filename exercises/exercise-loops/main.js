//function stringPrint(string) {
    for (var i = 0; i < string.length; i++) {
    var newString =  string.split("")
    return newString
    }
}
//stringPrint("Everyday I'm hustlin")

//Write a program that accepts a string as input. Write a loop to print out each letter of that string individually.

//Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.

//function findLetters(ourString,character) {
    for (var i = 0; i < ourString.length; i++) {
        if (ourString[i] === character) {
          return i;  
        };
    }
    return "There was no " + character + " found";
}

//rite a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found.

function findtheNumber(array) {
    for (var i = 0; i < array.length; i++) {
     if (array[i] === 42) {
        return "42 was found!";
     }
 else {
 console.log("42 was NOT found");
}
} 
}
var array = [23,42,5];

findtheNumber(array);



//Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten.//

var array = [2,6,8,5,3];
var smallest = array[0]

function smallestOfTen(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        } 
    } return smallest;
}
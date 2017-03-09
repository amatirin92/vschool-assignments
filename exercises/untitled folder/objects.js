//Objects

var obj = {
    firstProp: "hello",
    secondProp: "hello again",
    thirdProp: 3
}

console.log(obj.thirdProp);

var studentsArr = ['Eric', 'Jimmy', 'Terry'];

var eric {
    name: "eric",
    homeTown: "Phoenix or SoJo",
    favoriteBook: "Harry Potter"
}

var titus {whatever};

var studentsArr = [
    {name: "eric", homeTown: "Phoenix or SoJo"},
    titus
];

//Pass by reference

var person = {name: 'Frodo', age: 33};  
var new_person = person;

new_person.name = 'Sam';

console.log(person.name);  
console.log(new_person.name);


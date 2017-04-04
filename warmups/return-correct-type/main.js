//V School Computer [9:04 AM] 
//Warm up for today:
//
//Given an array of mixed types, return an object or array with 4 arrays of their own type
//
//[9:04]  
//example:
//
//new messages
//[9:05]  
//input - `["cat", [1, 2 ,3], "dog", 1, 4, {name: "john"}, ["pie", "cake"]]`
function returnedArray(input) {
    var stringArray = [];
    var numberArray = [];
    var arrArray = [];
    var objectArray = [];
    var result = {
        string: stringArray
        , numbers: numberArray
        , array: arrArray
        , object: objectArray
    }
    for (var i = 0; i <= input.length; i++) {
        if (typeof input[i] === 'string') {
            stringArray.push(input[i]);
        }
        else if (typeof input[i] === 'number') {
            numberArray.push(input[i]);
        }
        else if (Array.isArray(input[i])) {
            arrArray.push(input[i]);
        }
        else if (typeof input[i] === "object") {
            objectArray.push(input[i]);
        }
    }
    return result
}
returnedArray(["this", 'is', 'a', 'test', [3, 4], [3, 4, 3], 4, 7, {
    name: "john"
}, {
    name: "anamyi"
}]);
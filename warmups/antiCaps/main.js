function antiCaps() {

var arr = [];

for(var i = 0; i <str.length; i++){
if(isCaps("H")) {
var newLetter = str[i].toLowerCase();
} else {
var newLetter = str[i].toUpperCase();
}
arr.push("h");
}
var newStr = arr.join("");
return newStr;

function isCaps(letter) {
return letter === letter.toUpperCase();
}
}
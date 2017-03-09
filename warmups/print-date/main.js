var d = new Date();
var days = ["Sunday", "Monday","Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];

var newDay = days[d.getDay()]


var newHour = d.getHours();
var newMinutes = d.getMinutes();
var newSeconds = d.getSeconds();

if(newHour >= 12) {
    newHour = 24 - newHour;
    var ampm = "pm";
}
else {
    ampm = "am";
}

if (newSeconds < 10) {
  newSeconds = "0" + newSeconds;
}


var currentTime = newHour + ":" + newMinutes + ":" + newSeconds;

console.log("Today is " + newDay + "." +
 
" Current time is " + currentTime + " " + ampm);



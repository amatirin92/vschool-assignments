function monkeyTrouble (aSmile, bSmile) {
    if (aSmile === true && bSmile === false) {
        return false;
    }
    else if (aSmile === false && bSmile === true){
      return false;
    }
    else {
      return true
    }
}
        
    console.log(monkeyTrouble(true,true));
        console.log(monkeyTrouble(false, false));
            console.log(monkeyTrouble(true,false));
            console.log(monkeyTrouble(false,true))
            

        
function myFunction() {
  var d = new Date();
  var n = d.getHours();
  var m = d.getMinutes();
  var time = n + ":" + m;
  
  if (n < 12) {
    alert("Good Morning!");
  }
  else if ((n > 12) && (n < 17)) {
    alert("Good afternoon!" );
  }
  else {
    alert("Good evening!");
  }
}

console.log(myFunction());

        
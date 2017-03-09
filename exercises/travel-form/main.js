document.getElementById("button").addEventListener("click", function(){
document.getElementById("form1");
var firstname = form1.fname.value;
var lastname = form1.lname.value;
var age = form1.age.value;
var gender=form1.gender.value;
var place = document.getElementById("List").value;
var diet = [];
    
    for (var i = 0; i < form1.foods.length; i++) {
        if(form1.foods[i].checked) {
        diet.push(form1.foods[i].value)
        }
    }
    
    
var formOutput = `Their name is ${firstname} ${lastname} and they are a ${gender}. The age is ${age} and they want to go to ${place}. Their dietary restrictions are ${diet}`

alert(formOutput);
}); 

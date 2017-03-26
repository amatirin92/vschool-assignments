//track and capture how often a click action is performed on an element.
$(document).ready(function(){
    var getCount = localStorage.getItem('count');
    var count = getCount;
    $("#button").click(function(){
       $("#output").html(function () {
           count ++
           localStorage.setItem('count',count)
           return count
       }); 
    });
});


//display that information to the user

//use sessionStorage so that the number of clicks persist through page refreshes

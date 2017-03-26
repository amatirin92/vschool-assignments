var emptyArray = [];
$("#get-data").click(function() {
    
        var output = document.getElementById('output');
    $.get("http://api.vschool.io:6543/pokemon.json", function(personData) {
            for(var i = 0; i < 800; i++) {
                
                 output.innerHTML += "Pokemon #" + (i+1) + " is " + personData.objects[0].pokemon[i].name + " </br> ";
                
            }
        
            }
        );
     });




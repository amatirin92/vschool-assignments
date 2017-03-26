$(document).ready(function () {
    $("#btn").click(function () {
        //capture value
        var name = $("#name").val();
        var game = $("#game").val();
        var date = $("#date").val();
        var score = $("#score").val();
        if (name === "" || game == "") {
            return alert("You must enter real values");
        }
        if ($('#cbox1').is(':checked')) {
            var quotes = {
                quoteOne: "Eat it, bitches"
                , quoteTwo: "Too legit to quit"
                , quoteThree: "Don't get mad, get glad"
                , quoteFour: "L33t Status"
                , quoteFive: "OVER9000FGT"
            }
            var randomProperty = function (obj) {
                var keys = Object.keys(obj)
                return obj[keys[keys.length * Math.random() << 0]];
            }
            $(".test").append(`
                <tr>    
                        <td> ${name} </td> 
                        <td> ${game} </td> 
                        <td> ${date} </td> 
                        <td> ${score}</td>
                        <td> ${randomProperty(quotes)} </td>
                </tr>`);
        }
        else {
            $(".test").append(`
                <tr>
                    <td> ${name} </td> 
                    <td> ${game} </td> 
                    <td> ${date} </td> 
                    <td> ${score}</td>
                    <td>` + "Uh, no dice" + `</td>
                </tr>`);
        };
        $('form').submit(function (evt) {
            evt.preventDefault(); //prevents the default refresh action
        });
    });
});
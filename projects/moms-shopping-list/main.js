$(document).ready(function(){ 
    
    $("#submit").click(function() {
        var newItem = $("#newItem").val();
        var deleteButton = $(".delete");
        $("ul").append(`<li class="item"> <button type="button" class="delete">X</button> ${newItem} </li>`);

    $(".delete").click(function(){
        $(this).parent().remove();
    })
});
});
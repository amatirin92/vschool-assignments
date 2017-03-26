//When we get the data back, then this function will run. this is a callback function.
//the data will come back and be called response, although it can be called anything (parameter, reply, etc)
//a console.log outside of the function will return an error because the function(response) runs asynchronously. The data hasn't come back yet. so it must be ran within the function!
//GET
var todos = [];

$.get("http://api.vschool.io/aya/todo/", function (response) {
    var todos = response;
    //add responses to the todos id as a paragraph
    for (var i = 0; i < todos.length; i++) {
        $("#todos").append(`<li>
                    
                           <h1>${todos[i].title}</h1>
                           <p>${todos[i].description}</p> 

                           <li>`);
    }
//    deleteEvent();
});
//my submit button will do this// POST
$("#submit").click(function () {
    var newTodo = {};
    newTodo.title = $("#title").val();
    newTodo.description = $("#description").val();
    newTodo.price = $("#price").val();
    

    $.post("http://api.vschool.io/aya/todo/", newTodo, function(response) {
        $("#todos").append(`<li>
                            <div data-item-id>${newTodo, _id}, function(newtoDo)</div>
                           <h1>${newTodo.title}</h1>
                           <p>${newTodo.description}</p> 
                           <button type="button" class="delete">X</button>
                           <li>
`);
        todos.push(newTodo);
        
    })
    deleteEvent();
        });
 

//Delete(Destroy)

    function deleteEvent() {
        $(".delete").click(function () {
            var _id = $(this).parent().attr("data-item-id");
            
            var deleteObject = {
                type: "delete",
                url: "http://api.vschool.io/aya/todo" + _id,
                success: function(response){
                    console.log("It worked!")
                }
            };
            
            //Remove the object from the database
            $.ajax(deleteObject);
                
            //Remove the HTML 
            $(this).parent().remove();
        })};
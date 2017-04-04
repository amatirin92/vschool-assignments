angular.module('myApp').service('httpService', function ($http) {
    this.get = function () {
            return $http.get('http://api.vschool.io/aya/todo/')
        }
        //this will send a request to post my new todo
    this.postTodo = function (newTodo) {
            return $http.post('http://api.vschool.io/aya/todo/', newTodo)
        }
        //        //this will delete the todo based on id of the object that was clicked.
    this.deleteTodo = function(id){
            return $http.delete('http://api.vschool.io/aya/todo/' + id);
        }
        //        //this will allow edits
    this.editTodo = function (todo) {
        return $http.put('http://api.vschool.io/aya/todo/' + todo._id, todo)
    };
})
angular.module('myApp', []).controller('mainController', ["$scope", "$http", function ($scope, $http) {
    $http.get('http://api.vschool.io/aya/todo/').then(function (response) {
        $scope.todoList = response.data;
    });
    //this will send a request to post my new todo
    $scope.postTodo = function (postData) {
            $http.post('http://api.vschool.io/aya/todo/', postData).then(function (response) {
                $scope.todoList.push(response.data);
            });
        }
        //this will delete the todo based on id of the object that was clicked.
    $scope.deleteTodo = function (todo, index) {
        $http.delete('http://api.vschool.io/aya/todo/' + todo._id).then(function (response) {
            $scope.todoList.splice(index, 1);
        });
    }
    //this will allow edits
//    $scope.editTodo = function(todo){
//        ('http://api.vschool.io/aya/todo/' + todo._id).
//    }
    }]);
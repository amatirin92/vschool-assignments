angular.module('myApp', []).controller('mainController', ["$scope", "httpService", function ($scope, httpService) {
    $scope.todoList = [];
    httpService.get().then(function (response) {
            $scope.todoList = response.data;
        })
        //this will send a request to post my new todo
    $scope.postTodo = function (newTodo) {
            httpService.postTodo(newTodo).then(function (newTodo) {
                $scope.todoList.push(newTodo.data)
            })
        }
        //  this will delete the todo based on id of the object that was clicked.
    $scope.deleteTodo = function (index) {
            var id = $scope.todoList[index]._id;
            httpService.deleteTodo(id).then(function (data) {
                $scope.todoList.splice(index, 1);
            })
        }
        //this will allow edits
    $scope.editTodo = function (todo, i) {
            httpService.editTodo(todo).then(function (todo) {
                $scope.todos[i] = todo.data;
            })
        }
    }])
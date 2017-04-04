var app = angular.module("myApp",[]);

app.controller('mainController', ['$scope', function($scope){
    
    $scope.items = [];
    
    $scope.newObject = function(newItem){
       $scope.items.push(newItem);
    }
    
    
}]);
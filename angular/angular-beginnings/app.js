var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function($scope){
    
    $scope.person = {
        firstName: "Ayanda",
        lastName: "Matiringe"
    }
    
    $scope.getName = function(){
       return $scope.person.firstName + ' ' + $scope.person.lastName;
    }
    
}]);
var app = angular.module('myApp')

.controller('homeController', ['$scope', function($scope){
    $scope.test = "Welcome back!";
}])
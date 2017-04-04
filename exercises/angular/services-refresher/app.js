var app = angular.module('myApp', [])

.controller('mainController', ['$scope', 'dataService', function($scope, dataService) {
    
    $scope.cartoonArray = dataService.cartoonObjects;
    
    $scope.add = function(newItem){
        $scope.cartoonArray = dataService.addCartoon(newItem);
        $scope.newItem = {};
    }
    
    
    $scope.test = 'I work!'
    
}])
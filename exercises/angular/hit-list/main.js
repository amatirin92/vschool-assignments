var app = angular.module('myApp', [])

.controller('mainController', ["$scope", "dataService", function ($scope, dataService) {

dataService.getList().then(function(hitList){
    
    $scope.hitList = hitList;
    
}) 

}]);

var app = angular.module('myApp', []).controller('mainController', function ($scope, dataService) {
    $scope.addPlace = function (placeName) {
        dataService.addPlace(placeName)
    }
    $scope.favoritePlace = dataService.favoritePlace;
    $scope.removePlace = function ($index) {
        dataService.removePlace($index)
    }
});
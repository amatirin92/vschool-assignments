angular.module('myApp', [])

.controller('mainController', ["$scope", "$http", function ($scope, $http) {

    $http.get('http://api.vschool.io:6543/hitlist.json')
        .then(function (response) {
            $scope.hitList = response.data;
        });
}]);

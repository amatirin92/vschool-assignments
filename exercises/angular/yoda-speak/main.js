var app = angular.module('myApp', []);
app.controller('mainController', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.getReply = function(reply) {
            dataService.translated(reply).then(function (response) {
                $scope.response = response
            })
        }

}]);
var app = angular.module('myApp', []);
app.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };

    $scope.getReply = function(reply){
        $http.get('https://yoda.p.mashape.com/yoda?sentence=' + reply, config).then(function (response) {
          $scope.response = response.data;
        });
    }
}]);
var app = angular.module('myApp',[]);

app.controller('mainCtrl', ['$scope', function($scope){
    
//    $scope.person = {
//        name: "",
//        lName: "",
//        email: "",
//        favFood: "",
//        birthPlace: "",
//        phone: "",
//        aboutYourself: ""
//    }
    
    $scope.logInfo = function(newPerson){
        $scope.person = newPerson;
    }
}]);
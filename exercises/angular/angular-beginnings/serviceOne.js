var app = angular.module('learningAngular');//go find this module and add this to it


app.controller('mainCtrl', function($scope, dataService) {  
    $scope.person = {
        firstName: "John",
        lastName: "Smith"
    };

    $scope.getFullName = function() {
        return $scope.person.firstName + ' ' + $scope.person.lastName;
    }

    dataService.personLoggedIn = $scope.person;
    
});

app.service('dataService', function() {  
    this.personLoggedIn = undefined;
});

//the controller is the only thing that can put something in the scope so that html can access it. 
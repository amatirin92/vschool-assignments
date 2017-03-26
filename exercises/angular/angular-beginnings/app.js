var app = angular.module('learningAngular', []);

app.controller('mainCtrl', function($scope, dataService) {  
    $scope.person = {
        firstName: "John",
        lastName: "Smith"
    };

    $scope.getFullName = function() {
        return $scope.person.firstName + ' ' + $scope.person.lastName;
    }

    $scope.title = "TEST"

    dataService.personLoggedIn = $scope.person;
});


    
    //controller is what essentially controls what gets sent to your html
    //services are like a function for angular. in a service i will do one thing. this creates an object. Scopes are objects, too. 
    //the service creates an object that its own name that you can access later.



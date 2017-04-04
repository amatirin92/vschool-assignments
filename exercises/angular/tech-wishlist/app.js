var app = angular.module('myApp', ['ngRoute'])

app.config(['$routeProvider', function ($routeProvider){
    
    $routeProvider
    .when('/home', {
        controller: 'homeController',
        templateUrl: 'index.html'
    })
    .when('/comp-tech', {
        controller: 'compTechController',
        templateUrl: '/comp-tech/comp-tech.html'
    })
    .when('/other-tech', {
        controller: 'otherTechController',
        templateUrl: 'other-tech/other-tech.html'
    })
    
  
}])
    
app.directive('myList', function(){
        return {
            templateUrl: 'template.html',
            restrict: 'E'
        };
    });
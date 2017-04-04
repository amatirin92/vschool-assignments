

var app = angular.module('routing-practice',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    
    .when('/#/about', {
        templateUrl: 'about/about.html',
        controller:'aboutController'
    })
    
}])
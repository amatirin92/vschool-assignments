var app = angular.module('myApp')

.service('dataService', function ($http) {
    
    this.getList = function(){
        var hitList = {};
        return $http.get('http://api.vschool.io:6543/hitlist.json').then(function(response) {
            
            var hitList = response.data;
            return hitList;
            
        }); 
    }
    
})

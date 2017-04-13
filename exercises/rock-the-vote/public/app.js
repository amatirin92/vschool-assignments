var app = angular.module('myApp', []);
app.controller('mainController', ['$scope', 'mainService', function ($scope, mainService) {
        mainService.get().then(function (response) {
            $scope.votes = response;
            $scope.downvotes = response[1]['downvotes'];
            $scope
        })
        
        
    
    $scope.post = function (newPost) {

        mainService.post(newPost).then(function(response){
            $scope.votes.push(newPost);
        });
    }
    
    $scope.delete = function (id) {
        mainService.delete(id).then(function (response) {
            $scope.votes.splice(id, 1);
        })
    }
    $scope.upvote = function (item) {
        item['upvotes']++;
        mainService.put(item).then(function (response) {
            
            
            
        })
    }
    
    $scope.downvote = function (item) {
        item['downvotes']--;
        mainService.put(item).then(function (response) {
           console.log(item);
            
        })
    }
        
        
    }]);
    
    
    
app.service('mainService', function ($http) {
    this.get = function () {
        return $http.get('/rockthevote').then(function (response) {
            return response.data;
        })
    }
    this.post = function (newPost) {
        return $http.post('/rockthevote', newPost).then(function (response) {
            return response.data;
        })
    }
    this.delete = function(id){
        return $http.delete('/rockthevote' + id).then(function(response){
            return response.data;
            console.log('Your item was successfully deleted')
        })
    }
    this.put = function(item){
        return $http.put('/rockthevote' + item.id, item).then(function(response){
            return response.data;
        })
    }
    
})
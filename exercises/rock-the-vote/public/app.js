var app = angular.module('myApp', []);
app.controller('mainController', ['$scope', 'mainService', function ($scope, mainService) {
    mainService.get().then(function (response) {
        $scope.votes = response;
    })
    
    $scope.post = function (newPost) {
        mainService.post(newPost).then(function (response) {
            $scope.votes.push(response.data);
          return response.data;
        });
    }
    
    
    $scope.delete = function (item, $index) {
        mainService.delete(item).then(function (response) {
            $scope.votes.splice($index, 1);
            return response.data;
        })
    }
    $scope.upvote = function (item) {
        item['upvotes']++;
        item['totalVotes'] = item['downvotes'] + item['upvotes'];
        mainService.put(item).then(function (response) {
            console.log(item)
            return response.data
        })
    }
    $scope.downvote = function (item) {
        item['downvotes']++;
        item['totalVotes'] = item['downvotes'] + item['upvotes'];
        mainService.put(item).then(function (response) {
            console.log(item);
        })
    }
    $scope.put = function (newitem, item){
        item['userComments'].push(newitem);
        mainService.put(item).then(function(response){
            console.log(response);
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
    this.delete = function (item) {
        return $http.delete('/rockthevote/' + item._id).then(function (response) {
            return response.data;
            console.log('Your item was successfully deleted')
        })
    }
    this.put = function (item) {
        return $http.put('/rockthevote/' + item._id, item).then(function (response) {
            return response.data;
        })
    }
})


$(document).ready(function() {
    $(".toggle").slideUp();
    $(".trigger").click(function () {
        $(this).next(".toggle").slideToggle("slow");
    })
});

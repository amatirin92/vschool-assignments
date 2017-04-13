var app = angular.module('myApp', []);
app.controller('mainController', ['$scope', 'httpService', function ($scope, httpService) {
    $scope.getBounties = function () {
        httpService.get().then(function (response) {
            $scope.bounties = response;
        })
    }
    $scope.getBounties();
    
    $scope.post = function (newBounty) {
        httpService.post(newBounty).then(function (response) {
            $scope.getBounties();
        })
    }
    $scope.delete = function (id) {
        httpService.delete(id).then(function (response) {
            $scope.getBounties()
        })
    }
    $scope.put = function (item) {
        httpService.put(item).then(function (response) {
            $scope.getBounties();
        })
    }
}])
app.service('httpService', function ($http) {
    this.get = function () {
        return $http.get('/bounty').then(function (response) {
            return response.data;
        })
    }
    this.post = function (newBounty) {
        return $http.post('/bounty/', newBounty).then(function (response) {
            return response.data;
        })
    }
    this.delete = function (id) {
        return $http.delete('/bounty/' + id).then(function (response) {
            console.log('Your item was successfully deleted');
             return response.data;
        })
    }
    this.put = function (item) {
        return $http.put('/bounty/' + item.id, item).then(function (response) {
            return response.data;
        })
    }
})
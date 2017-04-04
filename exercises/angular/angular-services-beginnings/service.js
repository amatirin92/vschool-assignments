var app = angular.module('myApp');
app.service('dataService', function () {
    this.favoritePlace = [];
    var self = this;
    this.addPlace = function (placeName) {
        self.favoritePlace.push(placeName);
        return self.favoritePlace;
    }
    this.removePlace = function (index) {
        return self.favoritePlace.splice(index, 1);
    }
});
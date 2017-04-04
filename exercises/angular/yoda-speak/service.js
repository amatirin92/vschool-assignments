var app = angular.module('myApp');

app.service('dataService', function ($http) {
       var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };

    this.translated = function(reply){
        return $http.get('https://yoda.p.mashape.com/yoda?sentence=' + reply, config).then(function (response) {
          response = response.data;
            return response;
        });
    }
 
})

var app = angular.module('myApp', ['ngRoute']);
 app.config(['$routeProvider', function ($routeProvider){
    
    $routeProvider
    .when('/home', {
        controller: 'homeController',
        templateUrl: 'pages/home.html'
    })
    .when('/weather', {
        controller: 'weatherController',
        templateUrl: 'pages/weather.html'
    })
    .when('/forecast', {
        controller: 'forecastController',
        templateUrl: 'pages/forecast.html'
    })
    .when('/thunder', {
        controller:'weatherController',
        templateUrl: 'pages/thunder.html'
    })
    .otherwise({
        redirectTo: '/home'
    })
}])

app.service('getInfoService', ['$http', function ($http) {
    this.getInfo = function (cityName) {
        var key = '716fed57a85c2acad48488ac3a36e435';
        return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=' + key + '&units=imperial').then(function (response) {
            return response.data
        })
    }
}])

app.controller('weatherController', ['$scope', 'getInfoService', function ($scope, getInfoService) {
    var weatherIcons = {
        "200": {
            "label": "thunderstorm with light rain"
            , "icon": "storm-showers"
        }
        , "201": {
            "label": "thunderstorm with rain"
            , "icon": "storm-showers"
        }
        , "202": {
            "label": "thunderstorm with heavy rain"
            , "icon": "storm-showers"
        }
        , "210": {
            "label": "light thunderstorm"
            , "icon": "storm-showers"
        }
        , "211": {
            "label": "thunderstorm"
            , "icon": "thunderstorm"
        }
        , "212": {
            "label": "heavy thunderstorm"
            , "icon": "thunderstorm"
        }
        , "221": {
            "label": "ragged thunderstorm"
            , "icon": "thunderstorm"
        }
        , "230": {
            "label": "thunderstorm with light drizzle"
            , "icon": "storm-showers"
        }
        , "231": {
            "label": "thunderstorm with drizzle"
            , "icon": "storm-showers"
        }
        , "232": {
            "label": "thunderstorm with heavy drizzle"
            , "icon": "storm-showers"
        }
        , "300": {
            "label": "light intensity drizzle"
            , "icon": "sprinkle"
        }
        , "301": {
            "label": "drizzle"
            , "icon": "sprinkle"
        }
        , "302": {
            "label": "heavy intensity drizzle"
            , "icon": "sprinkle"
        }
        , "310": {
            "label": "light intensity drizzle rain"
            , "icon": "sprinkle"
        }
        , "311": {
            "label": "drizzle rain"
            , "icon": "sprinkle"
        }
        , "312": {
            "label": "heavy intensity drizzle rain"
            , "icon": "sprinkle"
        }
        , "313": {
            "label": "shower rain and drizzle"
            , "icon": "sprinkle"
        }
        , "314": {
            "label": "heavy shower rain and drizzle"
            , "icon": "sprinkle"
        }
        , "321": {
            "label": "shower drizzle"
            , "icon": "sprinkle"
        }
        , "500": {
            "label": "light rain"
            , "icon": "rain"
        }
        , "501": {
            "label": "moderate rain"
            , "icon": "rain"
        }
        , "502": {
            "label": "heavy intensity rain"
            , "icon": "rain"
        }
        , "503": {
            "label": "very heavy rain"
            , "icon": "rain"
        }
        , "504": {
            "label": "extreme rain"
            , "icon": "rain"
        }
        , "511": {
            "label": "freezing rain"
            , "icon": "rain-mix"
        }
        , "520": {
            "label": "light intensity shower rain"
            , "icon": "showers"
        }
        , "521": {
            "label": "shower rain"
            , "icon": "showers"
        }
        , "522": {
            "label": "heavy intensity shower rain"
            , "icon": "showers"
        }
        , "531": {
            "label": "ragged shower rain"
            , "icon": "showers"
        }
        , "600": {
            "label": "light snow"
            , "icon": "snow"
        }
        , "601": {
            "label": "snow"
            , "icon": "snow"
        }
        , "602": {
            "label": "heavy snow"
            , "icon": "snow"
        }
        , "611": {
            "label": "sleet"
            , "icon": "sleet"
        }
        , "612": {
            "label": "shower sleet"
            , "icon": "sleet"
        }
        , "615": {
            "label": "light rain and snow"
            , "icon": "rain-mix"
        }
        , "616": {
            "label": "rain and snow"
            , "icon": "rain-mix"
        }
        , "620": {
            "label": "light shower snow"
            , "icon": "rain-mix"
        }
        , "621": {
            "label": "shower snow"
            , "icon": "rain-mix"
        }
        , "622": {
            "label": "heavy shower snow"
            , "icon": "rain-mix"
        }
        , "701": {
            "label": "mist"
            , "icon": "sprinkle"
        }
        , "711": {
            "label": "smoke"
            , "icon": "smoke"
        }
        , "721": {
            "label": "haze"
            , "icon": "day-haze"
        }
        , "731": {
            "label": "sand, dust whirls"
            , "icon": "cloudy-gusts"
        }
        , "741": {
            "label": "fog"
            , "icon": "fog"
        }
        , "751": {
            "label": "sand"
            , "icon": "cloudy-gusts"
        }
        , "761": {
            "label": "dust"
            , "icon": "dust"
        }
        , "762": {
            "label": "volcanic ash"
            , "icon": "smog"
        }
        , "771": {
            "label": "squalls"
            , "icon": "day-windy"
        }
        , "781": {
            "label": "tornado"
            , "icon": "tornado"
        }
        , "800": {
            "label": "clear sky"
            , "icon": "sunny"
        }
        , "801": {
            "label": "few clouds"
            , "icon": "cloudy"
        }
        , "802": {
            "label": "scattered clouds"
            , "icon": "cloudy"
        }
        , "803": {
            "label": "broken clouds"
            , "icon": "cloudy"
        }
        , "804": {
            "label": "overcast clouds"
            , "icon": "cloudy"
        }
        , "900": {
            "label": "tornado"
            , "icon": "tornado"
        }
        , "901": {
            "label": "tropical storm"
            , "icon": "hurricane"
        }
        , "902": {
            "label": "hurricane"
            , "icon": "hurricane"
        }
        , "903": {
            "label": "cold"
            , "icon": "snowflake-cold"
        }
        , "904": {
            "label": "hot"
            , "icon": "hot"
        }
        , "905": {
            "label": "windy"
            , "icon": "windy"
        }
        , "906": {
            "label": "hail"
            , "icon": "hail"
        }
        , "951": {
            "label": "calm"
            , "icon": "sunny"
        }
        , "952": {
            "label": "light breeze"
            , "icon": "cloudy-gusts"
        }
        , "953": {
            "label": "gentle breeze"
            , "icon": "cloudy-gusts"
        }
        , "954": {
            "label": "moderate breeze"
            , "icon": "cloudy-gusts"
        }
        , "955": {
            "label": "fresh breeze"
            , "icon": "cloudy-gusts"
        }
        , "956": {
            "label": "strong breeze"
            , "icon": "cloudy-gusts"
        }
        , "957": {
            "label": "high wind, near gale"
            , "icon": "cloudy-gusts"
        }
        , "958": {
            "label": "gale"
            , "icon": "cloudy-gusts"
        }
        , "959": {
            "label": "severe gale"
            , "icon": "cloudy-gusts"
        }
        , "960": {
            "label": "storm"
            , "icon": "thunderstorm"
        }
        , "961": {
            "label": "violent storm"
            , "icon": "thunderstorm"
        }
        , "962": {
            "label": "hurricane"
            , "icon": "cloudy-gusts"
        }
        , "1000": {
            "label": "sunrise",
            "icon": "sunrise"
        },
        "2000": {
            "label": "sunset",
            "icon": "sunset"
        }
    }
    $scope.submit = function (cityName) {
        getInfoService.getInfo(cityName).then(function (response) {
            $scope.currentTemp = Math.round(response.main.temp) + '°F';
            $scope.description = response.weather[0].description;
            
            var prefix = 'wi wi-';
            var code = response.weather[0].id;
            console.log(code);
            var icon = weatherIcons[code].icon;
            // If we are not in the ranges mentioned above, add a day/night prefix.
            if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                icon = 'day-' + icon;
            }
            // Finally tack on the prefix.
            icon = prefix + icon;
            $scope.weatherIcon = icon;
            
            if ((code <= 531 || code <= 200)) {
                $scope.isWet = true;
                $location.path('/weather')
            } else {
                $scope.isWet = false;
                $location.path('/weather')
            } 
            
            if ((code >= 600) || (code <= 622)) {
            $scope.isSnow = true;
                $location.path('/weather')
            } else {
                $scope.isSnow = false;
                $location.path('/weather')
            }
            
            if ((200 <= code) && (code <= 232)) {
                $location.path('/thunder')
            }
            else {
                $location.path('/weather')
            }
        ;
    });
 }}]);

app.service('getForecastService', ['$http', function ($http) {
    this.getInfo = function (cityName) {
        var key = '716fed57a85c2acad48488ac3a36e435';
        return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=' + key + '&units=imperial').then(function (response) {
            return response.data
        })
    }
}])



app.controller('forecastController', ['$scope', 'getForecastService', function ($scope, getForecastService) {
    
    var weatherIcons =  
        { 
        "1000": {
            "label": "sunrise",
            "icon": "sunrise"
        },
        "2000": {
            "label": "sunset",
            "icon": "sunset"
        }
    }
    $scope.submit = function (cityName) {
        getForecastService.getInfo(cityName).then(function (response) {
            $scope.sunsetTime = (response.sys.sunset * 1000);
            $scope.sunriseTime = (response.sys.sunrise * 1000);
            
            var prefix = 'wi wi-';
            var sunseticon = weatherIcons[2000].icon;
            var sunriseicon =
            weatherIcons[1000].icon;
            
           $scope.sunsetIcon = prefix + sunseticon;
            $scope.sunriseIcon = prefix + sunriseicon;
            
        });
    }
}]);


//app controller for thunder

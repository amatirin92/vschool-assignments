var app = angular.module("practice",[]);

// minified version, when you inject your dependencies into the controller
app.controller("mainController",["$scope", function($scope){
    $scope.test = "this is a test";
    
    $scope.submit = function(info){
        $scope.person = info;
    }
    
}]);
                                 
//non-minified version
 //app.controller("mainController", function($scope){})                       
                                 
                



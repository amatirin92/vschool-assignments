var app = angular.module('myApp', [])

.controller('mainController', ['$scope', 'redService', 'blueService', function($scope, redService, blueService){
    
$scope.red = redService.redScore;
$scope.blue = blueService.blueScore;

$scope.redChange = function(){
    
    $scope.red = redService.redAdd(); 
    $scope.blue = blueService.blueSub();
    $scope.blue = blueService.blueReset();
}

$scope.blueChange = function(){
    
    $scope.blue = blueService.blueAdd(); 
    $scope.red = redService.redSub();
    $scope.red = redService.redReset();
}


}])


//this blue button should increase blue's score by one and the red's score should decrease by one. blue +; red -;

var app = angular.module('myApp')


.service('blueService', function(){
    var self = this;
    this.blueScore = 100;
    
    this.blueAdd = function(){
        self.blueScore++;
        return self.blueScore;
        
    }
    
    this.blueSub = function(){
        self.blueScore--;
        return self.blueScore
    }
    
    this.blueReset = function(){
        if(self.blueScore === 0){
          return self.blueScore = 100
        }
    }

})
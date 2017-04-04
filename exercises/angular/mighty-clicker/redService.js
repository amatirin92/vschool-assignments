//this red button with increase by one and the blue score should decrease by one
//red +; blue -

var app = angular.module('myApp')

.service('redService', function(){
    //this red button should increase by one and the blue score should decrease by one
    
    
    var self = this;
    this.redScore = 100;
    
    this.redAdd = function(){
        self.redScore++;
        return self.redScore;
        
    }
    
    this.redSub = function(){
        self.redScore--;
        return self.redScore
    }
    
    this.redReset = function(){
        if(self.redScore === 0){
          return self.redScore = 100
        }
    }

})
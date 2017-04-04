var app = angular.module('myApp')

.service('dataService',function(){
    this.cartoonArray = [];
     var self = this
     
     
    this.addCartoon = function (newItem){ self.cartoonObjects.push(newItem)
    return self.cartoonObjects;
                                         
    }
    
    
    
    
});
//function findMatches (arr1, arr2){
//    var sortedArray = arr1.sort().concat(arr2.sort());
//    var newArray = sortedArray.filter(function (el, i, arr){
//                   return arr.indexOf(el) === i;
//                   });
//  return newArray;
//}
//
//findMatches([2,4,2,1,4,4], [8,7,8,2,2]);
//  

var arr1 = [1, 2, 5];
var arr2 = [1, 2, 8, 9, 10];


function findUniques(a, b){
    
    var bothArr = a.concat(b).sort(function(a,b){
        return a - b;
    });
    
    for (var i = 0; i < bothArr.length; i ++){
        if (bothArr[i] === bothArr[i+1]){
            bothArr.splice(bothArr[i], 2);
        }
    
        
        
    
    var uniqueArr = bothArr.filter(function(item, i, ar){
        return ar.indexOf(item) === i;
        
    });
    console.log(uniqueArr)
    
}

findUniques(arr1, arr2)    



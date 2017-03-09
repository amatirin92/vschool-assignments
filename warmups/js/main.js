var evens = [];
var odds = [];

var nums = [];

function oddsAndEvens (nums) {
    for (var i = 0; i < nums.length; i++)
    { if (nums[i] % 2 === 0) {
        evens.push(nums[i])
    }
     else {
         odds.push(nums[i])
     }
    }
} 
oddsAndEvens([3, 4, 5, 6, 7, 8]);
console.log(odds);
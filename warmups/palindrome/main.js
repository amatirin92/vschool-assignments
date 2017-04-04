//palindrome

//take a string
//remove capital letters, spaces, punctuation
// reverse string
// check string with the string from step 2
//if ===, return true, else false.

function isPalindrome(str){
    var newStr = str.replace(/[^a-z]/g).toLowerCase();
    var newArr = newStr.split('').reverse().join('');
    if (newArr === newStr){
      return true;
    }
    else { 
        return false;
    }
}

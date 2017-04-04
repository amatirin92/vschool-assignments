// Given a string, return a version without both the first and last char of the
// string. The string may be any length, including 0.

var withoutEnd2 = function(str) { 
    return str.slice(1,-1);
}
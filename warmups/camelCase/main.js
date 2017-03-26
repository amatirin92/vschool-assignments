var = "my-test"
function camelCase(str){
    //remove - _ 
    //convert to a space ""
    //capitalize each word followed by a space
    //remove spaces
    
    var newStr = ""
    
    for (var i = 0; i <str.length; i++){
        if(str[i] === "-"){
            newStr += str[i+1].toUpperCase();
            i++;
        }
        else{
            newStr += str[i]
        }
    
}
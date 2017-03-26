


function Definition(word, definition) 
    {
    this.word="";
    this.definition="";
    }
    
function lookItUp (word, definition){
    var dictionary = {};
    //allow user to enter new words//save those words
    var newWord = new Definition();
    newWord.word = word;
    newWord.definition = definition;
    
    //check previous objects for matches and case sensitivity
    
    //look up words to find definition.
    
}

lookItUp("shoe","something you wear");
    
    //var dictionary = {}]
    //function addWord (word, definition){
    //word = word.toLowerCase();
    //dictionary[word] = definition
}

function findWords (word){
    if(dictionary[word] === undefined){
        console.log("this word doesn't exist");
    }
    else {
        return dictionary[word];
    }
     
}
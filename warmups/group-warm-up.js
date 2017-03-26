//[ 'Titus', 'Ayanda', 'Lucy', 'Mana' ], ---- Given (and using) the following code, write a program that creates a two dimensional array that looks like this. [[0, 0 , 0], [0, 0 , 0], [0, 0 , 0]]
function createGrid(x, y){
    var mainArray = [];
for (var i = 0; i < x; i++){
 var newArray = [];
for (var j = 0;  j < y; j++) {
  newArray.push(0);
}

} mainArray.push(newArray)
}


createGrid(3,4);
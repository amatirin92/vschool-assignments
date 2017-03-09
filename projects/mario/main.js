var baddiesPrice = [5, 7, 11];
var baddiesCaught = [12, 8, 5];
var baddiesBill = [];
for (var i = 0; i < baddiesPrice.length; i++) {
    baddiesBill.push((baddiesPrice[i] * baddiesCaught[i]));
}
console.log(baddiesBill);

document.getElementById(value1).innerHTML = baddiesBill[0] ;


//write a function that takes an integer and formats it to look like a currency amount ($XXX,XXX.XX)

//take an integer
//

function toCurrency (int){
   return (int/100).toLocaleString('en-US', {style: 'currency', currency: 'USD'})

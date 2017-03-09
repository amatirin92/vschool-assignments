function doMath() {
    var add1 = document.getElementById("add1").value;
    var add2 = document.getElementById("add2").value;
    var newNum = parseInt(add1);
    var newNum2 = parseInt(add2);
    var addSum = "Answer: " + (newNum + newNum2);
    document.getElementById("add").innerHTML = addSum;
}

function doSub() {
    var sub1 = document.getElementById("sub1").value;
    var sub2 = document.getElementById("sub2").value;
    var newSubNum = parseInt(sub1);
    var newSubNum2 = parseInt(sub2);
    var subSum = "Answer: " + (newSubNum - newSubNum2);
    document.getElementById("sub").innerHTML = subSum;
}

function doMult() {
    var mult1 = document.getElementById("mult1").value;
    var mult2 = document.getElementById("mult2").value;
    var newMultNum = parseInt(mult1);
    var newMultNum2 = parseInt(mult2);
    var multSum = "Answer: " + (newMultNum * newMultNum2);
    document.getElementById("mult").innerHTML = multSum;
}
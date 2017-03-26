//given a b c, return their sum.
//however if 13 - 19, return 0


function fixTeen(n){
    if (n >= 13 && n <= 19){
        n = 0;
    }
}

function noTeenSum(a, b, c) {
    a = fixTeen(a);
    b = fixTeen(b);
    c = fixTeen (c);
    console.log(a+b+c);
    return a+b+c;
}
}

function printOddEvenNum(num){

    if(num%2==0){
        console.log("This is an odd number");
    }else{
        console.log("This is an even number");
    }
}

function IsOdd(num){
    // if(num%2==0){
    //     return true;
    // }else{
    //     return false;
    // }
    return num%2==0 ? false : true
}

printOddEvenNum(10);
printOddEvenNum(11);
console.log(IsOdd(11));
console.log(IsOdd(10));
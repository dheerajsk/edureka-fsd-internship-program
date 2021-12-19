
function printOddTill100(){

    var i=1; // STep 1: Assignment
    while(i<=100){ // 2. Evaluation
        if(i%2!=0){
            console.log(i);
        }
        i++; // INcreament/decreament
    }
}
printOddTill100();

function printEvenTill100(){

    for(let i=1; i<=100; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
printEvenTill100();
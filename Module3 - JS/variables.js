

function MyPrint(){
    let name="Dheeraj";
    if(1==1){
        var isNum = true;  // Function scope
        let isString =false; // Block scope
        console.log(name);
    }

    console.log("var bool "+isNum);
    console.log(name);
    console.log("let bool "+isString);
}

MyPrint();

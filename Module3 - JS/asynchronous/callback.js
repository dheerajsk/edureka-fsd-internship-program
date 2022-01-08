
var result = 0;

function add(a, b, cb){
    setTimeout(()=>{
        if(a<0){
            cb("Invalid value");
        }
        result = a+b; 
        cb();
    }, 2000);
}

const print = (error)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
}

add(2,3, print);
// print();

// Callback functions (functions passing as parameters) - 
// to run dependent tasks in async functions
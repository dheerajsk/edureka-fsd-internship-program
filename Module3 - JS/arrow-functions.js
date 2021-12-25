// Functions are most important part of JS.

// What is a function.
// 1. General function snytax
const funcAdd = function add(a, b){
    return a+b;
}

console.log(typeof funcAdd);
console.log(funcAdd(2, 3));

// 2. Arrow Functions
// 2.1 It doesn't require function keyword.
// 2.2 It doesnt require function name
// 2.3 It uses arrow to define body
// 2.4 return keyword is option if parenthesis not required

const funcAddUsingArrow = (a, b) =>  
{ 
    console.log("Adding...");
    return a+b;
}
// const funcAddUsingArrow = (a, b)=> a+b;
console.log(typeof funcAddUsingArrow);
console.log(funcAddUsingArrow(2, 3));
// Rest & Spread Operator (ES6)
// "..."


function add2(a,b){
    return a+b;
}

// Rest - Combines multiple values into an array
function add(...numbers){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        sum = numbers[i]+sum;
    }
    numbers.forEach(element => {
        sum=sum+element;
    });
    return sum;
}

function addArray(...numbers){
    let sum=0
    numbers.forEach(element => {
        sum=sum+element;
    });`cc cc`
    return sum;
}
// console.log(addArray(1,2, 3));
// console.log(add(1,2, 3));
// console.log(add(1,2, 3, 4));
// console.log(add(1,2, 3, 4, 5));
// console.log(add(1,2));

// Spread (...) extracts array into individual values

function arrayConcat(){
    const cars = ["Audi", "Maruti", "Tata"];
    const cars2 = ["MG", "KIA", "Tesla", "Ferrari"];
    // const allCars = ["Audi", "Maruti", "Tata", "MG", "KIA", "Tesla", "Ferrari"]
    // const allCars = cars.concat(cars2);
    console.log(...cars);
    console.log(cars);
    const allCars = [...cars, ...cars2];
    console.log(allCars);
}

arrayConcat();
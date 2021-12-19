
// Array initialization
var cars = ["BMW", "Honda", "Tata", "Mahindra", "Audi"];

console.log(cars);

//1. Add a new item in array
cars.push("Hyundai");
console.log(cars);

//2. Add new element using index
cars.splice(1, 0, "Fearrari");
console.log(cars);

//3. Removes element from array
cars.pop();
console.log(cars);

// 4. Remove element using index position 
cars.splice(4, 1);
console.log(cars);

// 5. Merge array
const moreCars= ["Tesla", "MG Hector"];
cars = cars.concat(moreCars);
console.log(cars);

// 6. Removes multiple items from array and craetes new array
const newCars = cars.splice(5, 2);
console.log(newCars);
console.log(cars);
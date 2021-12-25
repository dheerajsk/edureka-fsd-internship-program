
// This is not an array
var cars = "Tesla, Audi, BMW, Suzuki";
console.log(cars[0]);

// Substring
const result = cars.substr(7, 4); // (fromIndex, Length)
console.log(result);

// Length of string(including space)
console.log(cars.length);

// Replace string
const modifiedString = cars.replace("Audi", "Tata");
console.log(modifiedString);

// Upper and lowercase
console.log(cars.toLowerCase());
console.log(cars.toUpperCase());

// Split and Join
const carsArray = cars.split(',');
console.log(carsArray[0]);
const stringFromArray = carsArray.join('|');
console.log(stringFromArray);

// Concat
const anotherCars = ", KIA, MG, Honda";
const concatedCars = cars.concat(anotherCars);
console.log(concatedCars);
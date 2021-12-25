
var obj = {
    name: "Jon Doe",
    age: 56,
    location: "Unknown",
    phone: 7777777777,
    dept: "Finance"
};

// Name: , age, location: , phone: 

console.log("Name: "+obj.name+",  age: "+obj.age);

// Template string

console.log(`Name = ${obj.name}, Age = ${obj.age}, Dept = ${obj.dept}, Location = ${obj.location}`)

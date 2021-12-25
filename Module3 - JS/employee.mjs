
class Employee{

    // constructor is called on obj creation
    constructor(_name, _id){
        this.name = _name;
        this.id = _id;
    }

    print(){
        // this keyword reprsents current obj(who has called function);
        console.log(this);
        console.log(this.name+" "+this.id);
    }

    print2 = ()=>{
        console.log(this);
        console.log(this.name+" "+this.id);
    }
}

var emp = new Employee("Jon", 1);
emp.print();
emp.print2();
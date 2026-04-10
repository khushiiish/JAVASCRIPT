let car={
    make:"Toyota",
    model:"Camry",
    year:2020,
    start:function (params){
        return `${this.make} car got started in ${this.year}`;


    }
};
console.log(car.start());
function Person(name,age){
    this.name=name;
    this.age=age;

}
let john=new Person("john",20);
console.log(john.name);
function Animal(type){
    this.type=type;
}
Animal.prototype.speak=function(){
    return `${this.type}makes a sound`
}
Array.prototype.hitesh=function(){
    return `Custom method ${this}`;
    
};
let myArray=[1,2,3];
console.log(myArray.hitesh());
//inheritance
class Vehicle{
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.model} is starting`;
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} is driving`;
    }

}
let myCar=new Car("Toyota","Camry");
console.log(myCar.drive());
console.log(myCar.start());
let vehOne= new Vehicle("Toyota","Camry");
console.log(vehOne.make);
//Encapsulation
class BankAccount{
    #balance=0;
    deposit(amount){
        this.#balance+=amount;
        return
    }
    getBalance(){
        return ` $ ${this.#balance}`;
    }
}
let account =new BankAccount();
account.deposit(1000);
console.log(account.getBalance());
//abstraction
class CoffeMachine{
     start(){
        //call DB
        //filter value
        return `Starting the machine...`;

     }
     brewCoffee(){
        //complex calculation
        return `Brewing coffee`;

     }
     pressStartButton(){
        let msgone=this.start()
       let msgtwo= this.brewCoffee()
       return `${msgone} ${msgtwo}`; 
     }
}
let myMachine=new CoffeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());
//polymorphism
class Bird{
    fly(){
        return `Flying....`
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguins cn't fly`;

    }
}
let bird=new Bird()
let penguin=new Penguin()
console.log(bird.fly());
console.log(penguin.fly());
//static method
class Calculator{
    static add(a,b){
        return a+b;
    }
    }
let miniCal=new Calculator();
console.log(Calculator.add(10,20));
 

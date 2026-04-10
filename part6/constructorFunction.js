function Person(name,age){
    this.name=name;
    this.age=age;

}
function Car(make,model){
    this.make=make
    this.model=model
}
let myCar=new Car("Toyota","Camyr");
console.log(myCar);
let myNewCar=new Car("Tata","Safari");
console.log(myNewCar);
function Tea(type){
    this.type=type
    this.describe=function(){
        return `this is a cup of ${this.type}`
    }
}



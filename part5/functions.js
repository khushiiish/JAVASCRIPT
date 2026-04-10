//1.function make tea
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
     
}
let teaOrder=makeTea("lemin tea");
//2.one function inside another function
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;

    }
   return  confirmOrder()
}
let ordeConfirmation=orderTea("chai")
//3.Arrow function
const calculate=(price,quantity)=>price*quantity;
let totalCost=calculate(499*100)
//4.function inside function
function makeTea(typeOfTea){
    return `maketea:${typeOfTea}`;
}
function processTeaOrder(teaFunction){
    return teaFunction("earl grey");
}
let order=processTeaOrder(makeTea);
//5.
function createTeaMaker(){
    return function(teaType){
        return`Making ${teaType}${name}`;
    };
}
let teaMaker=createTeaMaker();
let result =teaMaker("green tea");
 

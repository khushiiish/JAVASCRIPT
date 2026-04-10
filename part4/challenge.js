//1.break when chai occhurs
let teas=["green tea","black tea",,"chai","white tea"];
let selected=[];
for(let i=0;i<teas.length;i++){
    if(teas[i]=='chai'){
        break;
    }
    selected.push(teas[i]);

}
//2.skip paris and place rest in new array
let cities=["London","Paris","NewYork","Berlin"];
let visited=[];
for(let i=0;i<cities.length;i++){
    if(cities[i]=="Paris"){
        continue;
    }
    visited.push(cities[i]);
}
//3.for of loop use stop when number is 4 and before 4 store it in small number
let numbers=[1,2,3,4,5];
let small=[];
for(const num of numbers){
    if(num==4){
        break;
    }
    small.push(num);
}
//4.skip herbal and store rest as preffered
let tea=["green tea","black tea","herbal tea","white tea"];

let preferred=[];
for(const chai of tea){
    if(tea=="herbal tea"){
        continue;
    }
    console.log(chai)
    preferred.push(tea);
}
//5.for in loop through an object containing city population
let citiesPopulation={
    "london":20,
    "newyork":84,
    "Berlin":30,
};
let cityPopulation ={};
for(const city in citiesPopulation){
    console.log(citiesPopulation[city]);
    
}
     
    
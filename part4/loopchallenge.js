/*
while loop calculate sum 
*/ 
let sum=0;
let i=0;
while(i<=5){
    sum=sum+i;
    i++;
    
}
console.log(sum);
/*
countdown
*/ 
let countdown=[]
let j=5;
while(j>0){
    countdown.push(j);
    j--;
}
console.log(countdown);

/*
3.do while loop
*/
let teaCollection=[];
let tea
do{
   tea= prompt(`enter your favourite tea(type "stop" to finish)`)
   if(tea!=="stop"){
    teaCollection.push(tea);
   }
}while(tea!=="stop");
/*
4. do while loop that adds numbers from 1 to 3
*/
let total=0;
let k=1;
do{
    total+=k;
    k++;

}
while(k<=3);
/*
5.
*/
let multiply=[]
let numbers=[2,4,6]
for(let i=0;i<numbers.length;i++){
   takeNumber= numbers[i]*=2;
   multiply.push(takeNumber);
}
console.log(multiply);
/*
6.
*/
let cities=["abc","def","ghi" ]
let cityList=[];
for(let c=0;c<cities.length;c++){
    const myCity=cities[c].toUpperCase();
    cityList.push(myCity);

}

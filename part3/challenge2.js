/*
1.declare an array named `teaflavours` that contains the strings `"green tea"`,`"black tea"`,and `"oolong tea"`.
access the first element of the array and store it in a variable named `firstTea`.
*/
let teaFlavours=["green tea","black tea","oolong tea"];
let firstTea=teaFlavours[0];



/*
2.Declare an array named `cities` conatining `"London"`,`"Tokyo"`,`"Paris"` and'"NewYork".ACCESS the third element in the array and store it in a variable named `favouriteCity`.
*/ 
let cities=["London","Tokyo","Paris","NewYork"];
let favouriteCity=cities[2];



/*3. array name`teaTypes` containing `"`herbal tea"`,`"white tea"`,and `"masala chai"`.change the second element of the array to `"jasmine tea"`.
*/
let teaTypes=["herbal tea","white tea","masala chai"];
teaTypes[1]="jasmine tea";




/*
4.declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`.
Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited=["Mumbai","Sydney"];
citiesVisited.push("Berlin");



/*
5.`teaOrders` with `"chai"`,`"iced tea"`,`"matcha"` and `"earl grey"`
remove the last element of the array using the `pop` method and store it in a  variable named `lastOrder`.
*/
let teaOrders=["chai","iced tea","matcha","earl grey"];
let lastOrder=teaOrders.pop();



/*
6.`popularTeas` containg `"green tea"`,`"oolong tea"`,`"black tea".create soft copy of this array named `softCopyTeas`(any change in one impact the other)
*/
let popularTeas=["green tea","oolong tea","black tea"];
let softCopyTeas=popularTeas
console.log(softCopyTeas);
console.log(popularTeas);





/*7.create hard copy this type(no imoact of oine into others)*/
let  topCities=["Berlin","Paris","London "   ]
let hardCopyCities=[...topCities];
topCities.pop();
console.log(hardCopyCities);
 /* merge 2 array into 1 array*/
 let Cities=["Paris","Rome"];
 let asian=["Tokyo","Bang"]
 let world=Cities.concat(asian);
 console.log(world);
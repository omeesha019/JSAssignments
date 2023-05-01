// Write a program that takes an array of integers and returns a new array containing only the prime numbers from the original array.

let arr = [0,1,23,45,34,1,3,5,7,9,11,13,17,343,-23];
let arrNP=[];

let init = [2,3,5];

for(let val of arr){
    if(init.includes(val)){
        arrNP.push(val);
    }
    if(val>1){
        if(!((val%2===0) || (val%3===0) || (val%5===0))){
            arrNP.push(val);
        }
    }
}

console.log(arrNP);
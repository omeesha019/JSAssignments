//Write a program that takes an array of integers and returns the average of all the numbers in the array.


const arr = [1,23,4,12,-7,0,323];
let sum = 0;

// for(let i of arr){
//     sum+=i;
// }
const average = arr.reduce(function(a,b){return a+b})/arr.length;

// array.reduce(callbackfn(total, curValue, curIndex, array), initialValue)
// const average = arr.reduce((a, b) => a + b, 0) / arr.length;


console.log(average);
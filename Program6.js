//Write a program that takes an array of integers and returns a new array containing only the even numbers from the original array.

const arrOfInts = [1,82,3,5,23,54,78,0,81,4,23,54,76,12];
let sum=0;
let largest=0;

let evenArr=new Array();


if(arrOfInts.length>1){
    for(let i of arrOfInts){
        sum+=i;
        if(i===0 || (i%2)==0){
            evenArr.push(i);
        }
    }



    console.log("Even numbers in array : "+evenArr);
}else{
    console.log("Array is empty")
}  

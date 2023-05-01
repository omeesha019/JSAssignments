//Write a program that takes an array of integers and returns the median of the numbers in the array 
//(i.e., the middle number when the array is sorted).


const arr=[-23,1,43,0,-45,234,67,87,0];

console.log(arr.sort((a,b)=>a-b));

console.log(arr[Math.floor(arr.sort((a,b)=>a-b).length/2)]);
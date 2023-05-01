// Write a program that takes an array of integers and returns the kth smallest element in the array.

arr = [12,32,3,54,-09,4,23,0,-1,-1,8,6];
let k = 1;

if(arr.length>0 && k<arr.length){
    console.log(arr.sort((a,b)=> a-b));
    console.log(arr[k-1]);
}else{
    console.log("arr is empty or 'K' value is greater than array length");
}
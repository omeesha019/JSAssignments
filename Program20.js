// Write a program that takes an array of integers and returns a new array containing only the elements that appear more than once in the original array.



const arry = [1, 2, 1, 3,3,4,5,5, 4, 3, 51,1,1,1,];

const tofindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
const duplicateElements = tofindDuplicates(arry);
let reUniArr = new Set(duplicateElements);
console.log(Array.from(reUniArr));

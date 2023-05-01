//Write a program that takes an array of integers and returns a new array containing only the unique elements from the original array.

let arr = [101, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
 
function removeDuplicates(arr) {
    let unique = arr.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []); //[] initializing acc with and wmpty array value.
    return unique;
}
console.log(removeDuplicates(arr));

// let arr = [101, 2, -2, 4, 4, 7, 7, 71, 3, 6];
 
// function removeDuplicates(arr) {
//     let temp=new Set(arr);
//     return temp;
// }
 
// console.log(removeDuplicates(arr));
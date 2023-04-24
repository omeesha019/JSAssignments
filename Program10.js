//Write a program that takes two arrays of integers and returns a new array containing only the elements that appear in both arrays.



let first_array = [1, 3, 5, 7, 9];
let second_array = [2, 3, 4, 5, 6, 9];
 
let new_array = first_array.filter(
    (element) => second_array.includes(element));
 
console.log("Array obtained is :");
console.log(new_array);


	

/*OUTPUT: Array obtained is :
[ 3, 5, 9 ]
DECSRIPTION: filter() method as well as the includes() method of Arrays in JavaScript which will eventually filter elements based on their inclusion in both the arrays themselves. 
Later after filtering the elements from both arrays, display the array as output in the console.*/
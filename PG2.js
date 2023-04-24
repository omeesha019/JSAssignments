//Write a program that takes a string and returns the reverse of that string.

function reversingString(str) {
        
    // return a new array of strings
    const arrayStrings = str.split("");
           
    // reverse the new created array elements
    const reversingArray = arrayStrings.reverse();
         
    // join all elements of the array into a string
    const joinArray = reversingArray.join("");
            
    // return the reversed string
    return joinArray;
}
         
// taking input from the user
const string = prompt('Enter a string: ');
        
const result = reversingString(string);
console.log(result);


//OUTPUT: Enter a string: my first javascript program
//margorp tpircsavaj tsrif ym



//Explanation: the string is split into individual elements using the split() method. Then the string elements are reversed using the reverse() method. Finally, the reversed string elements are joined back together into a single string using the join() method.
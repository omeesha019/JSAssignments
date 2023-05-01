// Write a program that takes a string and returns a new string with each word reversed, but the order of the words should remain the same.

let str = "hello how are you";
const arrStr = str.split(' ');
console.log(str)
let revStr='';

for(let val of arrStr){
    revStr=revStr+' '+reverseStr(val);
}

function reverseStr(tempStr){
    rev = tempStr.split("").reverse();
    revStr = rev.join("");
    return revStr;
}

console.log(revStr.trim());

// function makeReverse(string) {
//     // Reversing the string
//     string = string.split("").reverse().join("");
//     console.log(string);
//     // Splitting the string by space
//     let rev = string.split(" ");
//     // Reversing the list of words
//     rev = rev.reverse();
//     console.log(rev);
//     // Joining the words to form a new string
//     let reversedString = rev.join(" ");
//     return reversedString;
//   }
//   // Driver code
//   let string = "hello world";
//   console.log(makeReverse(string));
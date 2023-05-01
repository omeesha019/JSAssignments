//Write a program that takes a string and returns a new string with all the vowels removed.


const str = 'hello world';

const noVowels = str.replace(/[aeiou]/gi, '');

console.log(noVowels);


	

/*OUTPUT: hll wrld
DECSRIPTION: To remove all vowels from a string in JavaScript, 
call the replace() method on the string with this regular expression: /[aeiou]/gi, 
i.e., str.replace(/[aeiou]/gi, ''). replace() will return a new string where 
all the vowels in the original string have been replaced with an empty string.

---->g tells to find all matches, not just the first.

---->i tells to be case insensitive.

---->hat goes inside the // is the pattern.

---->[] tells to match any character in a set.

---->aeiou are the characters in the set.

*/
//Write a program that takes a string and returns the number of vowels in that string.


function getVowels(string) {
       var Vowels = 'aAeEiIoOuU';
       var vowelsCount = 0;
       for(var i = 0; i < string.length ; i++) {
          if (Vowels.indexOf(string[i]) !== -1) {
             vowelsCount += 1;
         }
       }
    return vowelsCount;
    }
    console.log("The Number of vowels in -"+
    "My first Javascript program:" 
    + getVowels("My first Javascript program"));
	
	
//OUTPUT: The Number of vowels in -My first Javascript program:6

//EXPLANATION: create a user-defined function called “getvowels()” which reads a string and compare it with the list of vowels. It compares each character of a string with vowels. When the vowels are matched it will increase the value of the vowelsCount.
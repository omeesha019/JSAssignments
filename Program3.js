//Write a program that takes an array of integers and returns the sum of all the numbers in the array.

    // Creating array
    var arr = [4, 8, 7, 13, 12]
     
    // Creating variable to store the sum
    var sum = 0;
     
    // Running the for loop
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
     
    console.log("Sum is " + sum) // Prints: 44


//OUTPUT: Sum is 44

//Explanation: iterate over all the elements of the array using a Javascript for loop to find the sum.
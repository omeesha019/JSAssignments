//Write a program that takes an array of integers and returns a new array containing only the positive numbers from the original array.

let all = prompt("Give me an array of numbers seperated by ','");

let splitted = all.split`,`.map(x => +x);
function returner(splitted) {
    let positive = [];

    for (let i = 0; i < splitted.length; i++) {
        const el = splitted[i];
        if (el >= 0) {
            positive.push(el);
        }
    }

    return positive;
}

var positive = returner(splitted);
console.log(positive);



/*OUTPUT: Give me an array of numbers seperated by ','1,-2,3,-55
[ 1, 3 ]*/
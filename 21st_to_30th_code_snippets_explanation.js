
var x = 1;
function foo() {
  console.log(x);
  var x = 2;
}
foo();

// Since we are using var we do not get the actual error, we must use let or const to get meaningful error messages.
// We get output undefined as x (after making x a let) is declared after console.log statement, causing hoisting error. methods can be called before definition but not variables.


// =========================================

console.log(1 + 2 + '3'); // 123
console.log('1' + 2 + 3); // 123

// when + operator is used on strings and numbers javascript converts numbers to string. 

// =========================================

var x = 10;
function foo() {
  console.log(x);
}
function bar() {
  var x = 20;
  foo();
}
bar();

// Prints 10, because 'x' which is declared globally is called in foo().

// ===========================================
var x = [1, 2, 3];
x[10] = 10;
console.log(x);

// Print [ 1, 2, 3, <7 empty items>, 10 ], Since Array indexing starts from 0 when we say x[10] it is adding value at 11th position, and for remaining indexes it is adding empty spaces.


// ===========================================

console.log(1 + '2' + '2'); // when you apply + operator with a number and string javascript treats it as string whereas it is opposite with - operator
console.log(1 + + '2' + '2'); //+ or - operand in front of a string converts it to number. so here +'2' will become 2 hence the result will be 3.
console.log(1 + - '1' + '2'); //+ or - operand in front of a string converts it to number. so here -'1' will become -1 hence the result will be 0.
console.log(+'1' + '1' + '2'); // when a number encoded within '' javascript treats it as string and + operator tries to concatenate
console.log('A' - 'B' + '2'); // — operator can’t be applied to strings, so Javascript takes 'A' — 'B' to equal NaN and concatenates with String '2' resulting in NaN2
console.log('A' - 'B' + 2); // With above example we know 'A'-'B' is NaN, NaN + any number will get you NaN only

// ===========================================

var x = 1;
function foo() {
  x = 2;
  console.log(x); 
}
foo(); // Prints 2 - No parameters are passed and 'x=2' local initialization is happening and 2 is printed
console.log(x); // Prints 2 - Though we are passing x here which '1' from global var, while method is called x is re-initialized with 'x=2'(as x is not a const it can be re-initialized) hence 2 is printed

// ===========================================

console.log((function f(n) { return ((n > 1) ? n * f(n-1) : n) })(10)); // Using recursion it returns factorial of 10.

// for first iteration it return ((10 > 1) ? 10 * f(10-1) : 10) })
// f(10-1) - will be called recursively until (n>1) i.e., (1>1)

// ===========================================

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }

  // As we are using immediately invoked function expression for each iteration of 'i' with setTimeout inbuilt method we are giving and interval of 1000 millis or 1 second
  
// ===========================================

function foo() {
    return 
        { 
        message: 'Hello' 
    };
  }
console.log(foo()); 

// Print undefined as we have an empty space next to return which causes a syntax error and property name 'message' is not defined properly
// to make this work bring the curly braces next to return statement

function foo() {
    return        { 
        message: 'Hello' 
    };
  }
console.log(foo()); 

// ============================================

var x = 1;
var y = 2;
(function(x, y) {
  x = x + y; //3
  y = x - y; //3-2 = 1
  x = x - y; // 3-1 = 2
})(x, y); // x=1,y=2 these values are taken for IIFE further, for the second time
console.log(x, y); // Print x=1 and y=2 due to IIFE in effect after console.log(x, y); is called

// for second iteration.
x=2,y=1
x = x + y; //3
y = x - y; //3-1 = 2
x = x - y; // 3-2 = 1



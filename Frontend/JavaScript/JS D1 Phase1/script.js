var a  // declaration
a = 10; // intialization
console.log(a);

a = 40; // updation
console.log(a);

var b = 30;

console.log("Value of a is ",a, "and value of b is ",b);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


var c = "hello i am ashwin"
console.log(c);

///////////////////////////////// DataTypes  /////////////////////////

// # Premitive
//     - Number  -> (10,25.55, -10, 99999)
//     - String  -> ('h', 'ashwin', "Welcome to JS")
//     - Boolean  -> (true, false)
//     - undefined  -> (when we declare a variable but not intialized or not assign value it is known as undefined )
//     - null () -> (When we declare a varible and we want it empty intentionally then we decalre it as NULL)
//     - BigInt -> (When the range of number is above 2 to the power 53 then it is under BigInt)
//     - Symbol -> (It gives unique values)
// # Non-Premitive
//     - Array
//     - Object
//     - Function

// Example of Symbol

var s1= Symbol('hi')
var s2= Symbol('hi')
console.log(s1==s2);

// alert('This is message')
// var cnf =confirm("This is msg for you")
// console.log(cnf);

// var user = prompt("Enter your name");
// console.log(user);


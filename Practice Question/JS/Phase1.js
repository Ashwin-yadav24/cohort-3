// var name = "Ashwin Kumar yadav"
// var age= 20
// // console.log(name,age);
// // console.warn("Hello");
// console.table([5,4,3,2,1])


// var a = 10;
// var b = 20;

// console.log("Before swap:", a, b);

// var temp = a;
// a = b;
// b = temp;

// console.log("After swap:", a, b);

//

// const PI = 3.14;
// console.log(PI);

//
// var age
// console.log(age);
//
// var score=2
// score+=10
// console.log(score);
//

// var userName = "Ashwin";
// var age = 20;
// var isStudent = true;
// var emptyValue = null;
// var notDefined;

// console.log(userName);
// console.log(age);
// console.log(isStudent);
// console.log(emptyValue);
// console.log(notDefined);

// var n = 6299835260
// console.log(typeof(n));

//
// var emptyValue = null;
// console.log(typeof(emptyValue)); // object

// var bigNumber = 123456789012345678901234567890n;
// console.log(bigNumber);

// var stringNumber = "50";
// var convertedNumber = Number(stringNumber);

// console.log(convertedNumber);
// console.log(typeof convertedNumber);

// var numberValue = 100;
// var convertedString = String(numberValue);

// console.log(convertedString);
// console.log(typeof convertedString);

// var stringBoolean = "true";
// var convertedBoolean = Boolean(stringBoolean);

// console.log(convertedBoolean);
// console.log(typeof convertedBoolean);

// console.log('"5" + 2 =', "5" + 2); //52
// console.log('"5" - 2 =', "5" - 2); //3
// console.log("true + 1 =", true + 1); //2

// var value = "123abc";
// var convertedValue = Number(value);

// console.log(convertedValue);
// console.log(typeof convertedValue);

// var size = "500px";
// var convertedSize = parseInt(size);

// console.log(convertedSize);
// console.log(typeof convertedSize);

// var text = "hello world";
// var upperText = text.toUpperCase();

// console.log(upperText);

// var s= "I am Javascripts"
// var r=s.includes("Javascripts")
// console.log(r);

// var text = "Hello World";
// var word = text.slice(6);
// var w=text.substring(6)

// console.log(w);
// 

// var languages = "HTML,CSS,JS";
// var languageArray = languages.split(",");

// console.log(languageArray);
//

// var text = "   Hello World   ";
// var trimmedText = text.trim();

// console.log(trimmedText);

// var text = "Hello World";
// var firstCharacter = text[0];

// console.log(firstCharacter);
//

// var text = "Hello World";
// var firstCharacter = text[0];

// console.log(firstCharacter);

// var name = "Aman";
// var age = 20;

// console.log(`My name is ${name} and I am ${age} years old`);

// Mini biodata program using variables and template literals
// Numbers & Math//
// var a = 4.7;
// var r = Math.round(a);
// console.log(r);


// var a=81
// var r=Math.sqrt(81)
// console.log(r);

// var arr = [10, 20, 5, 99];
// var maxNumber = Math.max(...arr);

// console.log(maxNumber);

// var randomNo=Math.floor(Math.random() * 10) +1;
// console.log(randomNo);

// var a = "99.99";
// var b = parseInt(a);
// console.log(b);


// var n=25;
// var isInt=Number.isInteger(n);
// console.log(isInt);

// var year=2024
// var isLeapYear=(year % 4===0 && year %100 !=0) || year % 100===0;
// console.log(isLeapYear);

// var ch='a'
// if('aeiou'.includes(ch.toLowerCase())){
//     console.log('Vowel');
    
// }
// else{
//     console.log('consonants'); 
// }


// var num1 = 10;
// var num2 = 5;
// // var operator = prompt("Operator");
// var operator = "+"
// var result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     result = num1 / num2;
//     break;
//   default:
//     result = "Invalid operator";
// }

// console.log(result);

// var dayName="wedenesday"
// var dayNumber=3;

// switch(dayNumber){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid");
             
// }

// var user="Ashwin"
// var pass=123

// if(user==user && pass==pass){
//     console.log("Admin");
    
// }else{
//     console.log("Not allowed");
    
// }


//////////////////////////////// Truthy & Falsy ///////////////////////////////
// let str = [];

// if (str) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }

// var val="Hello"
// if(val){
//     console.log("Valid");
    
// }else{
//     console.log("Not valid");
    
// }

/////////////////////// Ternary Operator /////////////////////
// var b=20
// var res=(b%2===0)? "Even" : "Odd"
// console.log(res);


// var age=20
// var res=(age>18)? "Valid" :" No valid"
// console.log(res);

// var a =69
// var b = 79
// var res=(a>b)?a:b
// console.log(res);



/////////////////////////////////////////Mixed Practice Questions////////////////////


// var b=20
// var h=30
// var aot=1/2*(b*h)
// console.log(aot);

// var p=1000
// var r=5
// var t=2
// var si= (p*r*t)/100
// console.log(si);

// var units = 250;
// var bill = 0;

// if (units <= 100) {
//     bill = units * 5;
// } else if (units <= 200) {
//     bill = (100 * 5) + ((units - 100) * 7);
// } else if (units <= 300) {
//     bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
// } else {
//     bill = (100 * 5) + (100 * 7) + (100 * 10) + ((units - 300) * 12);
// }

// console.log(`Electricity bill for ${units} units is Rs. ${bill}`);

// var firstname="ashwin"
// var byear=2006
// var username=firstname+byear
// console.log(username);


// var a="Ashwin"
// if(a.startsWith('A')){
//     console.log("s Start with A");
    
// }else{
//     console.log('S do not start with A');
    
// }

// var sentence = "I am ashwin yadav"
// var count = sentence.replace(/\s/g,"").length
// console.log(count);


// var a =50
// if(a%10==0){
//     console.log('Multiple of 10');
    
// }else{
//     console.log("Not multiple of 10");
    
// }

// let price = 1000;
// let discount = 20; 

// let discountAmount = (price * discount) / 100;
// let finalPrice = price - discountAmount;

// console.log("Original Price:", price);
// console.log("Discount:", discount + "%");
// console.log("Final Price:", finalPrice);

// let inStock = true;

// if (inStock) {
//     console.log("Product is in stock.");
// } else {
//     console.log("Product is out of stock.");
// }

// /////////////////////////////Challenge Questions for Beginners/////////////////

// let otp=Math.floor(1000+Math.random()*9000)
// console.log(`Your OTP: ${otp}`);

// Math.random() generates a random decimal number between 0 and 1.
// Math.random() * 9000 generates a number between 0 and 8999.
// Adding 1000 shifts the range to 1000–9999.
// Math.floor() removes the decimal part.


// var c="cat"
// var cp=c[2]+c[1]+c[0]
// console.log(cp);


// var copy=""
// for(var i=c.length-1;i>=0;i--){
//     copy=copy+c[i]
// }
// console.log(copy);

// var name="ashwin kumar yadav"
// var upper=name.toUpperCase()
// console.log(upper);

// let str1 = "Ashwin";
// let str2 = "ashwin";

// if (str1.toLowerCase() === str2.toLowerCase()) {
//     console.log("Strings are equal");
// } else {
//     console.log("Strings are not equal");
// }

// let num = 85;

// if (num >= 10 && num <= 99) {
//     console.log("It is a 2-digit number.");
// } else if (num >= 100 && num <= 999) {
//     console.log("It is a 3-digit number.");
// } else {
//     console.log("It is neither a 2-digit nor a 3-digit number.");
// }


// let light = "red";

// switch (light) {
//     case "red":
//         console.log("Stop");
//         break;

//     case "yellow":
//         console.log("Get Ready");
//         break;

//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("Invalid Traffic Light");
// }

// let name = "Ashwin";

// let math = 85;
// let science = 78;
// let english = 92;

// let total = math + science + english;
// let percentage = total / 3;
// let grade;

// if (percentage >= 90) {
//     grade = "A+";
// } else if (percentage >= 80) {
//     grade = "A";
// } else if (percentage >= 70) {
//     grade = "B";
// } else if (percentage >= 60) {
//     grade = "C";
// } else if (percentage >= 40) {
//     grade = "D";
// } else {
//     grade = "Fail";
// }

// console.log("------ Marksheet ------");
// console.log("Name:", name);
// console.log("Math:", math);
// console.log("Science:", science);
// console.log("English:", english);
// console.log("Total Marks:", total);
// console.log("Percentage:", percentage.toFixed(2) + "%");
// console.log("Grade:", grade);\

let balance = 5000;
let withdraw = 2000;

if (withdraw <= balance) {
    balance = balance - withdraw;
    console.log("Withdrawal Successful!");
    console.log("Remaining Balance: ₹" + balance);
} else {
    console.log("Insufficient Balance!");
}
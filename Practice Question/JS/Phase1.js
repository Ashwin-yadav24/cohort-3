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

var user="Ashwin"
var pass=123

if(user==user && pass==pass){
    console.log("Admin");
    
}else{
    console.log("Not allowed");
    
}
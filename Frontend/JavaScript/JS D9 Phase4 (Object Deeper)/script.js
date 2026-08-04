// this -> 
// var obj ={
//     firstName:'Ashwin',
//     lastName:'Yadav',
//     age:20,
//     sayHi:function(){
//         console.log(this);
        
//     }
// }
// obj.sayHi()

// function abc(){
//     console.log(this);   
// }
// abc()



// 'Use Strict'
// a = 10
// console.log(window);

// 'use strict'
// function abc(){
//     console.log(this);
    
// }
// abc()
//////////////////////////////////////////////

// var obj={
//     firstName:'Ashwin',
//     lastName:'Yadav',
//     age:20,
//     getIntro:()=>{
//         // console.log(this.firstName+" " + this.lastName);
//         console.log(this);      
//     }
// }

// obj.getIntro() //-> it will git the whole object 
// console.log(obj);

// 'use strict'
// var obj={
//     firstName:'Ashwin',
//     lastName:'Yadav',
//     age:20,
//     getIntro:function(){
//         const sayMyName = ()=>{
//             console.log(this);
//         }
//         sayMyName()        
//     }
// }
// obj.getIntro()
// console.log(this);

////////////////////////////////////////////////////////////////

// var obj={
//     name:'Ashwin',
//     age:20,
//     comapany:{
//         name:'Sheriyans',
//         isGood:true,
//         greet:()=>{
//             console.log(this.name);
            
//         }
//     }
// }
// obj.comapany.greet()


/////////////////////////////// -> function sharing (i)call (ii)apply (iii)Bind
// var student1={
//     firstName:'Ashwin',
//     lastName:'Yadav',
//     getInto:function(){
//         console.log("I am " + this.firstName+" "+this.lastName);
//     }
// }
// var stud2={
//     firstName:'Bittu',
//     lastName:'Yadav'

// }
// student1.getInto.call(stud2)

////////////////////////////////////////////// or

// var student1={
//     firstName:'Ashwin',
//     lastName:'Yadav',
//     maths:60,
//     science:88,
//     english:92,
//     getInto:function(){
//         console.log(`${this.firstName} ${this.lastName}, you got ${(this.maths + this.science+this.english)/3}% marks`);
//     }
// }
// var stud2={
//     firstName:'Bittu',
//     lastName:'Yadav',
//     maths:90,
//     science:80,
//     english:72
// }
// var stud3={
//     firstName:'Ranjeet',
//     lastName:'Yadav',
//     maths:90,
//     science:78,
//     english:62
// }

// // var getInto = function(){
// //         console.log(`${this.firstName} ${this.lastName}, you got ${(this.maths + this.science+this.english)/3}% marks`);
// //     }
// // getInto.call(stud2)
// student1.getInto.call(stud2)

////////////////////////////////////////////////////////
// var student1={
//     firstName:'Ashwin',
//     lastName:'Yadav',
//     getIntro:function(city,state){
//         console.log(`${this.firstName} ${this.lastName}, ${city},(${state})`);
        
//     }
    
// }
// var stud2={
//     firstName:'Bittu',
//     lastName:'Yadav',  
// }
// var stud3={
//     firstName:'Khushi',
//     lastName:'Singh',  
// }
// var stud4={
//     firstName:'Ranjeet',
//     lastName:'Yadav',  
// }
// student1.getIntro.call(stud2,'jalandhar','punjab')
// student1.getIntro.apply(stud2,['jalandhar','punjab'])

// var out=student1.getIntro.bind(stud3,'jalandhar','punjab')()
// out()



////////////////////////////////////////////////// Prototype /////////////////////////////////////
// Prototype-> har object ke andr ek chupa hua link hota hai jo doosre object ko point rta hai 
// var arr = [10,20,30,40]

// var obj={
//     name:'Ashwin',
//     age:20
// }
// console.log(obj);

// function hero(){

// }

// // console.log(arr.__proto__);
// // console.log(hero.__proto__.__proto__);
// console.log(arr);
// console.log(Array.prototype);
// console.log(Array.prototype.__proto__== Object.prototype);
// console.log(Function.prototype.__proto__== Object.prototype);


// Prototype inheritance -> Example1
// var comapany={
//     name:'Sheriyans',
//     foundingYear:2022,
//     students:'Very Good',
//     saySlogan:function(){
//         console.log('We teach ,What matters');
        
//     }
// }
// var user={
//     name:'Ashwin',
//     age:20
// }
// console.log(user.__proto__==comapany.__proto__);

// user.__proto__= comapany
// console.log(user.foundingYear);
// user.saySlogan()

// Example2
var college={
    name:'IIT Bombay',
    Rating:'A+',
    students:5000,
    saySlogan:function(){
        console.log('We are best,we are IITIAN');
        
    },
    hasClubs:true
}
var branch={
    name:'CSE',
    Rating:'A++',
    students:500,
    subjects:['TOC','SD','CD']
}
var user={
    name:'Ashwin',
    age:20,
    marks:98
}
user.__proto__=branch
branch.__proto__=college

console.log(user.name);
console.log(user.Rating);
console.log(user.hasClubs);

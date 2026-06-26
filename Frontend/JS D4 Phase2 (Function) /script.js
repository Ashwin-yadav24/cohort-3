// 1. function

// -> accessable
// -> reuseable
// -> systematic

function greett(a){
    console.log('Good Evening...',a);
    
}

// greet(10)
// greet(50)

function add(a,b){
    console.log(a+b);
    
}
// add(10,20)

function greet(user,age){
    console.log('Good Morning',user);

    if(age>18){
        console.log('You are welcome in party ');
        
    }else{
        console.log('Not allowed');
        
    }
    
}

// greet('ashwin',20)
// greet('ashu',10)


/////////////////////////.  Types of function //////////////////////////

// function declaration
function a1(a){
    console.log('Helllo Guys1....',a);
    
}

// function expression or or sometime it's called  -> first class function
var b1 = function b1(a){
    console.log("Hello guys2",a);
    
}

// fat arrow function 
var c1 = (a)=>{
    console.log("Hello guys...",a);
    
}
// one liner function
var c2 = (a) => console.log('Hello guys....',a);


// a1('ashu')
// b1('ashwin')
// c1('bittu')
// c2('aa')

// IIFE -> Immidiately Invoked Function Expression

// (function(){
//     console.log('This is IIFE');

// })()

// or

// (()=>console.log('This is IIFE'))()

function a(){
    return 10
}

var b = function(){
    return 20
}
var c =()=>{
    return 30
}

var d = ()=>{return 40}

// console.log(a());
// console.log(b());
// console.log(c());
// console.log(d());

function abc(){
    return 20
}

var b = abc()
// console.log(b);

// Pure function

function sqrt(a){
    var b =10
    b++
    return a*a
}
// console.log(sqrt(5));


// Impure function

var a = 10
function abx(){
    a++
    return a
}
// console.log(abx());
// console.log(abx());

function greet(user = 'sir',age= 20){
    console.log('Welcom', user, "Your age is",age);
    
}
// greet(undefined,90)
// greet('harsh')

function hero(){
    console.log("This is hero function");
    
}
function main(a){
    console.log('THis is Main Function');
    a()
    
}
// main(hero)



function footpath(f){
    console.log("I am footpath and width is ",f);
}

function mainroad(wid,cb){
    console.log("This is main road,total length of road is ",wid);
    cb(wid/10)
}



// mainroad(80,footpath)

// function print(){
//     console.log("I am ashwin");
    
// }
// setInterval(print,1000)

// first class function

function main(cb){
    console.log("This is main")
    return cb
}

function side(){
    console.log("side is here"); 
}
// main(side())


function parentt(){
    console.log("I am Parent");

    function child(){
        console.log("I am child"); 
        return 40 
    }
    return child
}

// parentt()()

function dada(){
    console.log("I am DADAJI");
    
    function papa(){
        console.log("I am papa");
        
        function child(){
            console.log("I am child");
            
        }
        return child
    }
    return papa
}

dada()()()
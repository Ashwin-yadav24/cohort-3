
// var c1 = (a,b)=>{
//     console.log("Hello guys...",a);
//     return a+b;
// }
// console.log(c1(2,3));


// var d = ()=>{return 40}

// console.log(d());




// var arr=[10,20,30,40]
// let run = () =>{
//     console.log('helo');
    
// }
// var sum=0
// arr.forEach(function(elem,index){
//     sum=sum+elem
//     console.log(elem,index); 
// })
// console.log(sum)


// function cube(n) {
//     return n * n * n;
// }
// console.log('cube(3) =', cube(3));


// const cubeArrow = (n) => {
//     return n * n * n;
// }
// console.log('cubeArrow(3) =', cubeArrow(3));


// var arr = [10,20,30,40]

// var arr2= arr.map((x)=>{
//     return x+5;
// })
// console.log(arr2);




// var arr = [5,-9,2,-4,33,8]

// var arr2= arr.filter(function(elem){
//     // console.log(elem);
//     return elem%2==0
    
// })
// console.log(arr2);

// var arr = [10,20,30]
// var arrr=[40,50,60]

// var arr2 =[...arr,...arrr]

// // var arrr2=[...arrr]
// arr[0].push(99)
// console.log(arr2);


// var arr = [10, 20, 30];
// var arrr = [40, 50, 60];

// var arr2 = [...arr, ...arrr];

// arr2.unshift(99);

// console.log(arr2);


const sA = ["Aman","Isha","Rahul","Priya"]
const sB = ["Karan","Neha","Arjun","Simran"];

var aS=[...sA,...sB];

var res=aS.filter(function(elem){
    return elem.length>4;
})

console.log(res);
k
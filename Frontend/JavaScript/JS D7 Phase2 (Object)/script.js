// Object :-> is a referene datatype & it store in key value pair & notation {}
// var obj1 ={
//     user:'Ashwin',
//     age:20,
//     city:'Siwan'
// }
// var obj2={
//     user:'Khushi',
//     age:20,
//     city:'GKP'
// }
// console.log(obj2.city);


//////////////////////////////////// CRUD ////////////////////////////
// var user = {
//     name:'Ashwin',
//     age:20,
//     marks:90,
//     isSingle:false,
//     batch:'Cohort-3.0'
// }
// var phone={
//     model:'iPhone',
//     color:'red',
//     price:80000
// }

// user.city='Siwan' //create
// user.age=19 //update
// user.marks=80 //update
// console.log(user); //read

// delete user.marks
// delete user.age
// console.log(user);


// // for accessing key of object
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(Object.values(phone));
// console.log(Object.keys(phone));
// console.log(Object.entries(phone));



////////////////////////////////////// USER INPUT OBJ ////////////////////////////////

// var user=prompt('Enter user name')
// var age=Number(prompt('Age'))
// var city=prompt('City')

// var objj={user,age,city}
// console.log(objj);

/////////////////////////// object,array inside object,nested object ////////////////

// var user ={
//     name:"virat",
//     age:36,
//     team:'India',
//     isMarried:true,
//     skills:['Batting','Dancing','Fielding'],
//     spouse:{
//         name:'anushka',
//         proffession:'acting',
//         age:30
//     }

// }
// console.log(user.skills);
// console.log(user.spouse.name);

// var user={
//     nae:'Ashwin YAdav',
//     age:20,
//     isHandsome:true,
//     skills:['Html','css','js'],
//     college:{
//         name:'LPU Punjab',
//         totalStudent:300,
//         courses:['Web dev','Data Science','AI/ML']
//     }
// }
// console.log(user.skills);
// console.log(user.skills[2]);
// console.log(user.college.courses);
// console.log(user.college.name);
// console.log(user.college.courses[2]);

// console.log((user.college.totalStudent - user.age) +" "+ user.college.courses[2]);





///////////////////////////////// Function inside Object //////////////////////////
// var obj = {
//     name:'chhithhi',
//     ram:'20 mb',
//     age:1,
//     isWorking:false,
//     skills:['fight','walk','dance'],
//     creator:{
//         name:'vashi',
//         age:40,
//         isIntelligent:true
//     },
//     greet:function(a){
//         console.log("Hello I am Chhithi Robot.",a);

//     }
// }
// obj.greet('chhithi')
// console.log(obj.greet('chhithi')); // -> after printing it will print undefined in next beacause function is not returning any thing


// var maths ={
//     add:(a,b)=>{
//         return a+b
//     },
//     sqr:(a)=>{
//         return a*a
//     },
//     cube:(a)=>{
//         return a*a*a
//     },
//     mul:(a,b)=>{
//         return a*b
//     }
// }
// console.log(maths.add(20,30));
// console.log(maths.sqr(20));
// console.log(maths.cube(20));
// console.log(maths.mul(20,30));

// var myage = 40
// var obj = {
//     name: 'Ashwin',
//     age: myage > 25 ? myage : 33
// }
// console.log(obj);


///////////////////////////////// array ->Object, sequential,Push,pop
////////////////////////////////  object -> object, named

// var arr=[10,20,30]
// arr['name']=40
// console.log(arr);

// var user={
//     name:'ashwin',
//     city:'Siwan'
// }
// user.name='ashu' // or
// user['name']='bittu'
// console.log(user);

// var obj={
//     name:'abhas',
//     age:20
// }
// obj['city']='siwan'
// console.log(obj);
////////////////////////////////////////////////
// vehicle -> Object
// car -> array

// var groom ={
//     name:'Selmon',
//     age:60
// }
// var bride={
//     name:'kat',
//     age:42
// }
// groom.name ='Vicky'
// console.log(groom.name, 'weds' , bride.name);


/////////////////////////////////////////////////
// seal-> it can update the value of elements which is inside object but it can't add new element and delete the elements
// const user = {
//     name:'ashwin',
//     age:20,
//     city:'siwan'
// }
// Object.seal(user)

// user.name='bittu'
// user.no=543

// console.log(user);


////////////////////////////////////////////////
// freeze ->we can't to crud operation on freeze

// const user = {
//     name:'ashwin',
//     age:20,
//     city:'siwan'
// }
// Object.freeze(user)

// user.name='bittu'
// user.no=543

// console.log(user);

// const arr = [10,20,30]

// // Object.seal(arr)
// Object.freeze(arr)
// arr[2]=99
// delete arr[2]
// // arr.push(20)
// console.log(arr);

///////////////////////////////////////// distucturing ////////////////////////////////
// var arr = [11,22,33,44]
// // var a =arr[0]
// // var b =arr[1]
// // var c =arr[2]

// var [a,b,c,d]=arr
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

/////////////////////////// REST Operator ////////////////////////
// var arr=['aman','akash','prince','akshay','ashwin','ashu','deep']
// var [a,b,...c]=arr

// console.log(a);
// console.log(b);
// console.log(c);

// var obj = {
//     name:'Ashwin',
//     age:20,
//     batch:'COHORT-3.0'
// }
// var {name,age,batch}=obj //or
// var {name:n,age:a,batch:b}=obj
// // console.log(name);
// // console.log(age);
// // console.log(batch);

// console.log(n);
// console.log(a);
// console.log(b);

////////////////////////////////////////
// var objj={
//     name:'harsh',
//     age:22,
//     city:'bhopal'
// }
// var {name,...b}=obj
// console.log(name);
// console.log(b);

///////////////////////////////////////

// var arr =[10,20,30,40,50]

// var arr2=[...arr]
// console.log(arr2);
// arr2.push(20)
// console.log(arr2);
// console.log(arr);

/////////////////////////////////// Same Program with the help of object ///////////

// var obj={
//     name:'ashwin',
//     age:20,
//     city:'Siwan'
// }
// var obj2={...obj}
// console.log(obj2);
// obj2.name='ashu'
// console.log(obj2.name);
// console.log(obj.name);


////////////////////////////// 
// Shallow copy->
// var obj={
//     name:'ashwin',
//     age:20,
//     city:'Siwan',
//     college:{
//         name:'LPU',
//         student:20000,
//     }
// }
// var obj2={...obj}
// obj2.college.name='CU'
// console.log(obj2);
// console.log(obj);
////////////////////////////////////////
// var a =10
// var b = JSON.stringify(a)
// console.log(typeof(b));
///////////////////////////////////////
// DEEP COPY ->
var obj={
    name:'ashwin',
    age:20,
    city:'Siwan',
    college:{
        name:'LPU',
        student:20000,
    },
    skills:['html','css','js']
}
var str=JSON.stringify(obj)
console.log(typeof str);

var obj3=JSON.parse(str)
console.log(obj3);

obj3.college.name='cu'
console.log(obj3);
console.log(obj);
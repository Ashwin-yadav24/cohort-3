// var arr=[]
// var arr= new Array(5)
// console.log(arr);

var arr1 = [10,20,30,40]
console.log(typeof(arr1));

var arr2 =['ashwin','khushi','ashu','bittu']
arr2[0]='jamun'
console.log(arr2);

var arr3 = [10,20.5,'ashwin',true]
console.log(arr3);

var arr = [10,20,30,44,33,23,45,67,89,23]
console.log(arr[arr.length-1]);

// Push -> add elements in last 
var ary=[10,20,30,40,50,60,70] // on this we are doing all the method
ary.push(99)
ary.push('ashwin')
console.log(ary);

// Pop -> it will remove the element from last
ary.pop()
ary.pop()
ary.pop()
console.log(ary);

// Unshift -> It will add elemnt at starting position
ary.unshift(1)
console.log(ary);

// Shift -> It will remove elemnt from the start of the array
ary.shift()
console.log(ary);

// Splice

// ary.splice(startindex,deletecount)
// ary.splice(startindex,deletecount,newelement)
ary.splice(0,3) // for removing the element
console.log(ary);

ary.splice(1,0,99) // for adding the element
console.log(ary);

ary.splice(2,0,69,69)
console.log(ary);


// reverse -> it will change the original array
ary.reverse()
console.log(ary);

var are=[10,20.5,'lol',[1,2,3]]
console.log(are);


var arr = [
    [10,20,30,40],
    [11,22,33,44],
    [99,88,77,66]
]
console.log(arr[2][2]+arr[0][1]+arr.length);

// Sort
var sr=[9,3,8,2,1]
sr.sort()
console.log(sr);

var arre=[45,10,9,43,83,98,76]
arre.sort((a,b)=>a-b)
console.log(arre);


// using loop in array

var a = [10,20,30,40]

for(let i= 0; i<a.length;i++){
    console.log(a[i]);
    
}
console.log("------");

for(value of a){
    console.log(value);  
}

var aryyy = []

for(let a=0;a<100;a++){
    // aryyy.push(a+1)
    if(a%2==0){
        aryyy.push(a)
    }
}
console.log(aryyy);

// Slice ->

var b=[10,20,30,40,50]
var cp = b.slice(1,3)
console.log(b);
console.log(cp);

//Concat

var x=[10,20,30,40,50]
var y=[60,70,80,90,100]

var z= x.concat(y)
console.log(z);

//Includes -> to check whether the element is present or not it gives true or fale values
var xy= x.includes(20)
console.log(xy);

var yx=x.indexOf(40)
console.log(yx);

var str= "ashwin yadav"
var ch= str.split('')
console.log(ch)

var bk =['ashwin','bittu','ashu']
var ak=bk.join('-')
console.log(ak);

//ForEach

// var arr=[10,20,30,40]
// let run = () =>{
//     console.log('helo');
    
// }
// arr.forEach(run)
// /////////////////////////////////////
// var sum=0
// arr.forEach(function(elem,index){
//     sum=sum+elem
//     console.log(elem,index); 
// })
// console.log(sum);


// var ary = ['ajay','bittu','choottu','dabbu']
// var sum=0
// ary.forEach(function(e,i){
//     sum=sum+e.length
//     console.log(e,i); 
//     console.log(sum);
// })





///////////////////////// MAP ///////////////////
var arr = [10,20,30,40]

// function double(x){
//     return x*2
// }
// arr.map(double)


var arr2= arr.map((x)=>{
    return x*x*x
})
console.log(arr2);



var user=['ashwin','ashu','khushi','jamun']
var nuser=user.map(function(elem){
    return elem.substring(1,4)
})
console.log(nuser);

var arr =[11,22,33,44]
var arr2=arr.map(function(elem){
    if(elem%2==0){
        return elem
    }else{
        return elem+1
    }
})
console.log(arr2);

//////////////////////// FIlter //////////////////
// select,length same ho skti hai agr condition match krega toh
// var arr = [5,9,2,4,33,8]

// var arr2= arr.filter(function(elem){
//     console.log(elem);
//     return elem>0
    
// })
// console.log(arr2);
//
// var marks = [56,22,90,51,88,93,15]

// var fmarks= marks.filter(function(elem){
//     return elem>33
// })
// console.log(fmarks);


// var ary =['aman','basundi','chintu','dev']
// ary.forEach(function(elem){
//     console.log(elem);
// })

// var outp=ary.map((elem)=>{
//     return elem.toUpperCase(elem)
// })
// console.log(outp);
// var brr =ary.filter((elem)=>{
//     return elem.includes('a')
// })
// console.log(brr);


/////////////////////////. REDUCE /////////////////
// var arr = [10,20,30,40]
// var max = arr.reduce(function(acc,val){
//     // return acc+val;
//     if(val>acc){
//         return val
//     }
//     return acc
// })
// console.log(max);

// var arr = [10,20,30,40]

// var brr = arr.reduce(function(acc,val){
//     return acc+val
    
// },0)
// console.log(brr);


// var arr = [32,98,67,350,20,12]

// var brr = arr.reduce(function(acc,val){
//     if(val>acc){
//         return val
//     }
//     return acc
// },0)
// console.log(brr);

//////////////////////////// FIND /////////////////////////

// var arr = ['raja','deepak','aman','virt']

// var brr = arr.find(function(elem){
//     return elem=='virat'
// })
// console.log(brr);

// var ans = arr.find(function(a){
//     return a.includes('a')
// })
// console.log(ans);

// var ans = arr.some(function(a){
//     return a.includes('a')
// })
// console.log(ans);

// var ans = arr.every(function(a){
//     return a.includes('a')
// })
// console.log(ans)

////////////////////////////////// Array destucturing ///////////////////////

// var arr = [10,20,30,40]
// var[a,b]=arr
// console.log(a);
// console.log(b);


// var arr = [10,20,30]
// var arr2= arr
// arr2.push(99)
// console.log(arr2);
// arr2[0]=1
// console.log(arr);
// console.log(arr2);
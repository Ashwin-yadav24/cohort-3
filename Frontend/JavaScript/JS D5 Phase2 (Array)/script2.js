var arr = [10,20,30]
var arr2= arr
arr2.push(99)
console.log(arr2);
arr2[0]=1
console.log(arr);
console.log(arr2);

// another method and it's original method but it's too lengthy
var arr = [10,20,30]

var arr2 =[arr[0],arr[1],arr[2]]

arr.push(40)
console.log(arr);
console.log(arr2);

// Spread operator
var arr = [10,20,30]

var arr2 =[...arr]
arr2.push(99)
console.log(arr2);
console.log(arr);


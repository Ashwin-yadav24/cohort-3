// order foof from zomato
// order done -> Order confirmed (your food is preparing)
// mai wait karunga order ke prepare hoke mujhe tak aane ka

//1. order aa ggya
    // -> make a payment

// 2.Order nahi aaya 
    // -> complain karo


// function orderFood(){
//     let myOrder = new Promise(function(resolve,reject){
//         console.log('Your order is on the way');
        
//         let orderStatus = true

//         setTimeout(function(){
//             if(orderStatus){
//                 console.log('Delivery Partner has came 🎉');
//                 resolve()
//             }else{
//                 console.log('Order Failed❌');
//                 reject()
//             }
//         },3000)
//     })
//     myOrder.then(function(){
//         console.log('Now make a payment');
//         let paymentStatus=true
//         return new Promise(function(res,rej){
//             setTimeout(function(){
//                 if(paymentStatus){
//                     console.log('Payment Done');
                    
//                     res()
//                 }else{
//                     console.log('Payment cancelled');
                    
//                     rej()
//                 }
//             },2000)
//     })
// })
    
//     .catch(function(){
//         console.log('Delivery failed');
//         console.log('Complain Kro 😡');
        
//     })
//     .finally(function(){
//         console.log('Process End');
        
//     })
    
// }

// orderFood()

/////////////////////////////// or
// let myOrder = new Promise(function (resolve, reject) {
//     console.log("Order is coming...");

//     let response = fetch("https://fakestoreapi.com/products/");

//     let orderStatus = true;

//     setTimeout(function () {
//         if (orderStatus) {
//             console.log("Delivery Done ✅");
//             resolve(response); // pass fetch response
//         } else {
//             reject();
//         }
//     }, 3000);
// });

// myOrder
//     .then(function (response) {
//         console.log("Making payment...💸");

//         let paymentStatus = true;

//         return new Promise(function (res, rej) {
//             setTimeout(function () {
//                 if (paymentStatus) {
//                     console.log("Payment Done ✅");
//                     res(response);
//                 } else {
//                     console.log("Payment Cancelled ❌");
//                     rej();
//                 }
//             }, 2000);
//         });
//     })
//     .then(function (response) {
//         return response
//             .then(function (data) {
//                 console.log("Data aa gya ✅");
//                 return data.json();
//             })
//             .then(function (mydata) {
//                 console.log(mydata);
//                 return mydata;
//             })
//             .catch(function () {
//                 console.error("Data nhi aaya ❌");
//             });
//     })
//     .then(function () {
//         console.log("I am eating food...");

//         let foodStatus = false;

//         return new Promise(function (res, rej) {
//             setTimeout(function () {
//                 if (foodStatus) {
//                     console.log("Pet Bhar Gya");
//                     res();
//                 } else {
//                     console.log("Pet Nahi bhara");
//                     rej();
//                 }
//             }, 3000);
//         });
//     })
//     .catch(function () {
//         console.log("Order Cancelled ❌");
//     })
//     .finally(function () {
//         console.log("Process End");
//     });




let respone=fetch('https://fakestoreapi.com/products')
respone.then(function(data){
    console.log('Data aa gya ');
    return data.json()
})
.then(function(mydata){
    console.log(mydata);
    
})
.catch(function(){
    console.log('Data nhi aaya');
    
})

async function dataLao(){
    
    let respone= await fetch('https://fakestoreapi.com/products')
    let data=await respone.json()
    console.log(data);

    data.forEach(function(elem){
        console.log(elem);
        
    })
    
}
dataLao()

// var arr=[
//     {name:'Ashwin',age:20},
//     {name:'Jamun',age:20},
//     {name:'khushi',age:20}
// ]
// console.log(arr[1].age);
    while(!success) { 
        learn(); 
        build(); 
    }
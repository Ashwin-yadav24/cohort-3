// async function dataLaao(){
//     let response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await response
//     console.log(response);
//     console.log(data);
    
// }
// dataLaao()

// async function dataLaao(){
//     let response= await fetch('https://picsum.photos/v2/list')
//     let data = await response.json()
//     console.log(data);
// }
// dataLaao()

//////// Making a Promise /////////////

let p1 = new Promise(function(resolve,reject){

    // console.log('Promise pending hai');

    let result= true
    setTimeout(function(){
        if(result){
            // console.log('Value True');
            resolve()
        }else{
            // console.log("Value False");
            reject()
        }
    
    },3000)
    
})

p1.then(function(){
    // console.log('Promise is fullfilled');
})
.catch(function(){
    // console.log('Promise Is rejected');
    
})
.finally(function(){
    // console.log('Promise End');
})

// // const h1 = document.querySelector("h1")
// // const body = document.body;

// // // console.log(h1.outerHTML);

// // h1.textContent="hey mai update ho ga hu via dom"
// // // h1.innerHTML="hey mai update ho ga hu via dom"
// // // h1.innerText="hey mai update ho ga hu via dom"

// // h1.innerHTML="Hey <i> i am italic..</i>"

// // // console.log(body.innerHTML);
// // // console.log(body.innerText);

// // // body.style.backgroundColor="red"
// // h1.style.backgroundColor="red"
// // h1.style.fontSize="50px"
// // h1.style.fontStyle="italic"



// // class

// const h1=document.querySelector("#head1");
// const div = document.querySelector("#div");
// console.log(h1);


// h1.textContent="Hey i am changed "
// h1.style.color="red"


// // is my h1 has some class?
// // const isClass = h1.classList.contains('heading')

// // i have to change or replace my class
// // const nh=h1.classList.replace("heading","newHead");
// // console.log(nh);


// // toggle class 
// h1.classList.toggle("heading");

// div.classList.add("box")


///////////////////////////////////// Bulb //////////////////////////////

const bulb = document.querySelector(".bulb")
const btn = document.querySelector("button")


let flag=true;

// btn.addEventListener('click',()=>{
//     // console.log("I am triggerd");
//     if(flag){
//         bulb.style.backgroundColor="yellow";
//         btn.innerText="Off";
//         flag=false;
//     }else{
//         bulb.style.backgroundColor="transparent"
//         btn.innerText="On";
//         flag=true;
//     }
// })

// same program 

btn.addEventListener('click',()=>{
    // console.log("I am triggerd");
    if(bulb.classList.toggle("lightUp")){
        btn.textContent="off"
    }else{
        btn.textContent="On"
    }
})
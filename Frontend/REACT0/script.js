// let obj ={
//     name:'Ashwin',
//     age:20,
//     address:"Siwan",
//     company:"Google"
// }

// // object destructuring
// let fn=({name,company})=>{
//     console.log(name,company); 
// }
// fn(obj);



// let h1 = document.createElement("h1")
// h1.textContent="Hello"
// // document.body.append(h1)

// console.log(h1);


// // React Dom or Virtual Dom 
// let rh1= React.createElement(
//     "h1",
//     null,
//     React.createElement("span",{},"i am under h1")
// );

// // document.body.append(rh1)

// let realDomElem =document.querySelector("#root"); 
// let rootOfReact = ReactDOM.createRoot(realDomElem).render(rh1);

// // rootOfReact.render(rh1)



// import {a,sum} from "./main.js"
// // import{sum} from "./main.js"


// console.log(a);

// let res =sum(20,30);
// console.log(res);



let rde = document.querySelector("#root")


let div = React.createElement("div",{},React.createElement("h1",{},React.createElement("span",{},"I am Span")));


ReactDOM.createRoot(rde).render(div)
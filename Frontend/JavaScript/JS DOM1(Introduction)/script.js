// selection of an element
// only select first tag
// const h1 = document.querySelector('h1');

//for selecting all tag
// const h1=document.querySelectorAll('h1')

// const h1 = document.getElementsByTagName('h1')

// const h1= document.getElementById('heading');

// const h1 = document.getElementsByClassName('heads');


//hmesa use krenge q ki ye sbse acha kaam krta hai
const h1 = document.querySelector("#heading ")

const box=document.querySelector("#box");
// changing of html 
h1.textContent="polo";

// h1.innerHTML="polo";
// box.innerHTML="hey";

// console.log(document.body);
// text change----
//textContent
//innerText
//innerHtml -> pura structure ud jaega

// document.body.innerHTML="heloooooooo";
// document.body.innerText="heloooooooo";
// document.body.textContent="heloooooooo";


box.style.backgroundColor="yellow";
box.style.padding="40px";
box.style.display="flex";
box.style.alignItems="center"
box.style.gap="16px"

console.log(h1);
// attributes and properties
// ->setAttribute, getAttribute, removeAttribute, hasAttribute
// with data -* name



////////////////////////////////////////////////////////////////////////////////////////////
// const h3 = document.querySelector("#id1")
// h3.setAttribute("width","200px");

// h3.removeAttribute("class")
// console.log(h3.hasAttribute("class"))

// let res = h3.getAttribute("class")
// console.log(h3.getAttribute("width"));
// console.log(res);

// const userCard=document.querySelector("#user_card");

// console.log(userCard.getAttribute("data-user-id"));

// userCard.dataset.userId="678"
// console.log(userCard.getAttribute("data-user-id"));



//input.value(property, current state) vs input.getAttribute("value")

// const inp = document.querySelector('input')
// const btn = document.querySelector('button')

// console.log(inp.value);


// btn.addEventListener('click',()=>{
//     console.log(inp.value); //.value always give dynamic value
//     console.log(inp.getAttribute("value")); //getAttribute is static

// });
 



// creating inserting and removing elements from dom
// const main = document.querySelector('main');

// let footer=document.createElement('footer')
// console.log(footer);

// document.body.appendChild(footer);

// main.appendChild(footer)

// // insertion-->
// // appendChild -> old version
// // append -> new

// const span = document.createElement("span");
// span.innerHTML = "hey i am <i> dynamic </i>"
// main.append(footer,span);


// // main.removeChild(span);

// main.insertBefore()




/////////////////////////////////////////////////
// insertBefore
const main = document.querySelector('main');
// const box1 = document.querySelector('.box1')
// const box2 = document.querySelector('.box2')
// const box3 = document.querySelector('.box3')
const box1 = document.createElement('div')
const box2 = document.createElement('div')
const box3 = document.createElement('div')

box1.classList.add("box")
// main.append(box1)
box2.classList.add("box")
// main.append(box2)
box3.classList.add("box")
// main.append(box3)

box2.style.backgroundColor="yellow"
box3.style.backgroundColor="blue"


main.append(box1,box2)
// main.prepend(box3)

// main.before(box2)

box2.after(box1)

// box2.replaceWith(box3)
main.replaceChild(box3,box1)
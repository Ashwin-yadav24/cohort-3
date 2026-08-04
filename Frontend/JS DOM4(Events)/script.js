// const btn = document.querySelector("button")
// const div = document.querySelector("div")
// const main= document.querySelector("main")
// const body = document.body

// // window.addEventListener("keypress",(events)=>{
// //     console.log(events); 
// // })

// // btn.addEventListener("mouseover", (event) => {
// //     console.log(event);
// // });
// // btn.addEventListener("mouseleave", (event) => {
// //     console.log(event);
// // });

// ////////////////////// Event Propagation == Event traversal ////////////////


// btn.addEventListener("click", (event) => {
//     console.log("Button Triggered");
// },
// {capture:true}
// );

// div.addEventListener("click", (event) => {
//     console.log("Div Triggered");
// },
// {capture:true}
// );

// main.addEventListener("click", (event) => {
//     console.log("Main Triggered");
// },
// {capture:true}
// );

// body.addEventListener("click", (event) => {
//     console.log("Body Triggered");
// },
// {capture:true}
// );

// // Window
// // |
// // Doctype 
// // |
// // HTML 
// // |
// // Body
// // |
// // Main
// // |
// // div
// // |
// // button -> Target Event

// // Top to buttom --> Capture or Capturing Traversal by default it is disabed we have to enable it manually
// // Button to Top -> it happen when it hit target -->Event Bubbling




const form = document.querySelector("form");
const inp1 = document.querySelector("#name")
const inp2 = document.querySelector("#email")
const users = document.querySelector(".users")
const url = document.querySelector("#url")

let userData=[
    {
        name:"Raja Babu",
        email:"rajababu@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJHR9tmZcoH_DpVZnMrs2h6Pu-RH9AVG-b1qKVWMynux0Zn-ZfkSLvbE&s=10",
        dob:"20-08-2006"

    },
    {
        name:"Muni devi",
        email:"munidevi@gmail.com",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJHR9tmZcoH_DpVZnMrs2h6Pu-RH9AVG-b1qKVWMynux0Zn-ZfkSLvbE&s=10",
        dob:"20-08-2006"
    },
    {
        name:"Kuchu Puchu",
        email:"kuchupuchu@gmail.com",
        image:"https://plus.unsplash.com/premium_photo-1738590561029-33c9c5d64af2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFpbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D",
        dob:"20-08-2006"
    },
]

const ui =()=>{
    users.innerHTML=""
   userData.forEach((elem,index)=>{
    users.innerHTML+=`<div class="user_card">
        <div class="img-box">
            <img src="${elem.image }">
        </div>

        <div class="text">
            <p><strong>Name:</strong> ${elem.name}</p><br>
            <p><strong>Email:</strong> ${elem.email}</p>

        </div>
        <div class="actions">
            <button id="edit">Edit</button>
            <button onclick="deleteCard()" id="dlt">Delete</button>
        </div>
    </div>`

})
    
}
ui()

form.addEventListener("submit",(events)=>{
    events.preventDefault() // it will stop the from page reloading again again
   
    

    let name = inp1.value;
    let email = inp2.value;
    let image  = url.value;
    if(name.trim() === "" && email.trim()==="") return;

    userData.push({
        name,
        email,
        image
    });

    ui()
    console.log(userData);
    

    form.reset();
})

let deleteCard=(index)=>{
    userData.splice(index,1);
    ui();
}
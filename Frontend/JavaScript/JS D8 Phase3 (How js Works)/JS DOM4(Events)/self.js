const form =document.querySelector("form");
const inp1 =document.querySelector("#name");
const inp2 =document.querySelector("#email");
const users =document.querySelector(".users");
const url = document.querySelector("#url");

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
    users.innerHTML="";
    userData.forEach((elem,index)=>{
        users.innerHTML+=`
           <div class="user_card">
            <div class="img-box">
                <img src="${elem.image}" alt="">
            </div>
            <div class="text">
                <p><strong>Name:</strong>${elem.name}</p>
                <p><strong>Email:</strong>${elem.email}</p>
            </div>
            <div class="actions">
                <button id="edit">Edit</button>
                <button onclick="deleteUser()" id="dlt">Delete</button>
            </div>
        `
    })
}
ui();

form.addEventListener("submit",(events)=>{
    events.preventDefault();


    let name=inp1.value;
    let email=inp2.value;
    let image=url.value;

    userData.push({
        name,
        email,
        image
    });
    ui();
    console.log(userData);
    form.reset();
    
})


let deleteUser=(index)=>{
    userData.splice(index,1)
    ui();
}
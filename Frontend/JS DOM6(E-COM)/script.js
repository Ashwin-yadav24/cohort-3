const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close");

const productDiv = document.querySelector(".products");
const form = document.querySelector("form");

// Load data from localStorage
let productsArr = JSON.parse(localStorage.getItem("products")) || [];
let updateIdx = null;

// ---------------- UI ----------------

function ui() {
    productDiv.innerHTML = "";

    productsArr.forEach((e, index) => {
        productDiv.innerHTML += `
        <div class="product-card">
            <div class="img">
                <img src="${e.Image}" alt="${e.productName}">
            </div>

            <div class="text">
                <h3>${e.productName}</h3>
                <p>${e.Description}</p>
                <p>₹${e.Price}</p>
            </div>

            <div class="btns">
                <button onclick="updateProduct(${index})" id="update">
                    Update
                </button>

                <button onclick="deleteProduct(${index})" id="delete">
                    Delete
                </button>
            </div>
        </div>
        `;
    });
}

ui();

// ---------------- Create Button ----------------

createBtn.addEventListener("click", () => {
    formDiv.style.display = "flex";
});

// ---------------- Close Button ----------------

closeBtn.addEventListener("click", () => {
    formDiv.style.display = "none";
    form.reset();
    updateIdx = null;
});

// ---------------- Submit ----------------

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const productName = form[0].value;
    const Description = form[1].value;
    const Price = form[2].value;
    const Image = form[3].value;

    if (
        productName.trim() === "" ||
        Description.trim() === "" ||
        Price.trim() === "" ||
        Image.trim() === ""
    ) {
        alert("Please fill all the details");
        return;
    }

    const obj = {
        productName,
        Description,
        Price,
        Image,
    };

    if (updateIdx !== null) {
        productsArr[updateIdx] = obj;
        updateIdx = null;
    } else {
        productsArr.push(obj);
    }

    localStorage.setItem("products", JSON.stringify(productsArr));

    ui();

    form.reset();
    formDiv.style.display = "none";
});

// ---------------- Update ----------------

function updateProduct(index) {
    const product = productsArr[index];

    formDiv.style.display = "flex";

    form[0].value = product.productName;
    form[1].value = product.Description;
    form[2].value = product.Price;
    form[3].value = product.Image;

    updateIdx = index;
}

// ---------------- Delete ----------------

function deleteProduct(index) {
    productsArr.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(productsArr));

    ui();
}



// localStorage.setItem('name','nitin gadkari')
// let lsd = localStorage.getItem('name')
// console.log(lsd);


// let data=[
//     {
//         name:"Ashwin",
//         age:20,
//         home:"Siwan"
//     },
//     {
//         name:"Bittu",
//         age:20,
//         home:"Siwan"
//     },
//     {
//         name:"Khushi",
//         age:20,
//         home:"Siwan"
//     }
// ]


// localStorage.setItem("fam-people",JSON.stringify(data))
// const lsd = localStorage.getItem("fam-people");
// let value = JSON.parse(lsd)
// console.log(value);


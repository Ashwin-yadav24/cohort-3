const inp = document.querySelector('input');
const btn = document.querySelector('#add');
const todoBox = document.querySelector('.todo-list');

btn.addEventListener('click', () => {
    const value = inp.value;

    if (value.trim() === "") return;

    todoBox.innerHTML += `
        <div class="li">
            <h3>${value}</h3>
            <div>
                <button class="btn edit">Edit</button>
                <button class="btn dlt">Delete</button>
            </div>
        </div>
    `;

    inp.value = "";

    // Delete
    const deleteBtns = document.querySelectorAll(".dlt");

    deleteBtns.forEach((btn) => {
        btn.onclick = function () {
            this.closest(".li").remove();
        };
    });

    // Edit
    const editBtns = document.querySelectorAll(".edit");

    editBtns.forEach((btn) => {
        btn.onclick = function () {
            const task = this.closest(".li").querySelector("h3");

            const newTask = prompt("Edit Task", task.innerText);

            if (newTask !== null && newTask.trim() !== "") {
                task.innerText = newTask;
            }
        };
    });
});
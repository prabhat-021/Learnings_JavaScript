// function addItem(item) {
//     const listItem = document.createElement("li");
//     listItem.classList.add("list-item");

//        // Add the item text
//        listItem.innerHTML = `${item} <button class="edit-btn">Edit</button> <button class="remove-btn">Remove</button>`;

//     //    const editItem=listItem.querySelector(".edit-btn");{

//     //    }

//     return listItem;
// }

// const text = document.getElementById("todo-item");
// const ul = document.querySelector("ul")
// const btn = document.getElementById("btn").addEventListener("click", () => {
//     const text1 = text.value.trim();
//     if (text1) ul.appendChild(addItem(text1));
//     text.value = "";
// });

// // Add event listener to the remove button
// const listItem=document.getElementsByClassName("liet-item");
// console.log(listItem);
// // const removeButton = listItem.querySelector(".remove-btn");
// // removeButton.addEventListener("click", () => {
// //     listItem.remove(); // Remove the list item when the button is clicked
// // });

// // return listItem;




// Get references to the elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Add a new task
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    // console.log(taskText);
    if (taskText) {
        const taskItem = createTaskItem(taskText);
        todoList.appendChild(taskItem);
        taskInput.value = ''; // Clear the input field
    }
});

// Create a new task list item
function createTaskItem(text) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${text}</span>
        <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    // Mark task as completed
    li.addEventListener('click', (e) => {
        if (e.target.classList.contains('task-text')) {
            li.classList.toggle('completed');
        }
    });

    // Edit task
    const editBtn = li.querySelector('.edit');
    editBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering 'completed' toggle
        const newTaskText = prompt('Edit your task:', li.querySelector('.task-text').textContent);
        if (newTaskText) {
            li.querySelector('.task-text').textContent = newTaskText;
        }
    });

    // Delete task
    const deleteBtn = li.querySelector('.delete');
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering 'completed' toggle
        li.remove();
    });

    return li;
}


// function handleClick() {
//     let count = 0;
//     return function () {
//         console.log("Button Clicked", ++count);
//     };
// }

// const clickHandler = handleClick();

// function addEventListeners() {
//     document.getElementById("clickme").addEventListener("click", clickHandler);
// }

// function removeEventListeners() {
//     document.getElementById("clickme").removeEventListener("click", clickHandler);
// }

// addEventListeners();

// setTimeout(removeEventListeners,5000);

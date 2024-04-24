/*
const mainTitle = document.getElementById("mainTitle");
console.log(mainTitle);
const titles = document.getElementsByClassName("title");
console.log(titles);
const items = document.getElementsByTagName("li");
console.log(items);
const result = document.querySelectorAll(".title");
console.log(result);
*/
/*const taskList = document.querySelector(".tasks");
//console.log(taskList.parentElement.parentElement);
//console.log(taskList.closest(".container"));
const task2 = taskList.children[1];
console.log(task2);
const task1 = task2.previousElementSibling;
const task3 = task2.nextElementSibling;
console.log(task3);*/
/*const taskList = document.querySelector(".tasks");
const task4 = document.createElement("li");
task4.innerText = "Task 4";
task4.classList.add("task");
taskList.append(task4);
task4.classList.remove("task");
task4.setAttribute("id", "task4");
task4.removeAttribute("id");
console.log(task4);
*/
/*const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", (event) => {
event.preventDefault(); console.log(event);
console.log('mesaj');
});
document.addEventListener("keydown", onkeydown);
function onkeydown(event) { if (event.keyCode === 27) {
console.log('s-a apasat tasta ESC');
} else {
console.log('s-a apasat o alta tasta');
}
}
*/

const taskForm = document.querySelector("#taskForm");
taskForm.addEventListener("submit", onTaskFormSubmit);
function onTaskFormSubmit(event) {
    event.preventDefault();
    const taskList = document.querySelector(".tasks");
    const taskInput = taskForm.querySelector('input');
    if (!taskInput.value) {
        alert("Completeaza denumirea");
        return;
    }
const newItem = document.createElement("li");
newItem.innerText = taskInput.value;
    newItem.classList.add("task");
    newItem.addEventListener("click", () => {
        newItem.remove();
    })
    taskList.append(newItem);
    taskInput.value = "";
}
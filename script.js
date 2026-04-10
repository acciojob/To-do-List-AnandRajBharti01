let inp = document.querySelector("#newTodoInput");
let btn = document.querySelector("#addTodoBtn");
let ol = document.querySelector("#todoList");

btn.addEventListener("click", addElement);

function addElement(e) {
    let inputValue = inp.value;

    if (inputValue.trim() === "") return;

    let li = document.createElement("li");
    li.innerText = inputValue;
    ol.append(li);  // ✅ must have () here

    inp.value = "";
}
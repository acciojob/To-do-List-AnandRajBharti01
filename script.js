let inp = document.querySelector("#newTodoInput");
let btn = document.querySelector("#addTodoBtn");
let ol = document.querySelector("#todoList");

btn.addEventListener("click", addElement);

function addElement(e) {
    let inputValue = inp.value;

    if (inputValue.trim() === "") return;

    let creatlist = document.createElement("li");
    creatlist.innerText = inputValue;
    ol.append(creatlist);  // ✅ must have () here

    inp.value = "";
}
// //your code here

// let inp = document.querySelector("#newTodoInput");
// let btn = document.querySelector("#addTodoBtn");
// let ol = document.querySelector("#todoList")

// btn.addEventListener("click", addElement); 

// function addElement(){
// 	// e.preventDefault();
// 	let inputValue = inp.value;
	
//    let creatlist =  document.createElement("li");
// 	creatlist.innerText = inputValue;
// 		ol.append(creatlist);
// 	inp.value = "";
	
// }


let inp = document.querySelector("#newTodoInput");
let btn = document.querySelector("#addTodoBtn");
let ol = document.querySelector("#todoList");

btn.addEventListener("click", addElement);

function addElement(e) {
    let inputValue = inp.value;

    if (inputValue.trim() === "") return;  // ✅ no empty items

    let creatlist = document.createElement("li");
    creatlist.innerText = inputValue;
    ol.append(creatlist);   // ✅ fixed () added

    inp.value = "";          // ✅ clear input
}





















































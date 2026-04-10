//your code here

let inp = document.querySelector("#newToInput");
let btn = document.querySelector("button");
let ol = document.querySelector("#todoList")

btn.addEventListener("click", addElement); 

function addElement(e){
	// e.preventDefault();
	let inputValue = inp.value;
   let creatlist = document.createElement("li");
	creatlist.innerText = inputValue;
		ol.append = creatlist;
	
}

const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list")

const toDos = [];

function saveToDos() {
    localStorage.setItem("toDos", toDos);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //현재 입력된 value를 변수로 저장. 추후에 비워져도 저장이 잘 되어있다.
    toDoInput.value = ""; //엔터를 누를 때마다 input창이 비워짐. 
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

function deleteToDo(event) {
    const li = event.target.parentElement; // event>target>parentElement- 정확히 어떤 버튼을 클릭했고 그 부모요소를 특정.
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo; //li안에 span을 만들어, 그 span의 내용을 newToDo로 바꿔줌.
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}
    


toDoForm.addEventListener("submit",handleToDoSubmit);
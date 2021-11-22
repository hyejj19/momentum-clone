const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list")

const TODOS_KEY = "todos";

let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //value -> string toDos에 들어가 있는 내용을 string으로 저장.
}

function deleteToDo(event) {
    const li = event.target.parentElement; // event>target>parentElement- 정확히 어떤 버튼을 클릭했고 그 부모요소를 특정.
    li.remove(); //li 요소 삭제.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)) //toDo의 id 가 li의 id와 다른 것을 남긴다 -> toDo.id !== li.id, 남겨진 것들로 재할당. //괄호 안의 toDo는 toDos 안의 element.li.id는 문자열인데, toDo.id는 숫자이므로, li.id를 parseInt해 타입을 맞춰준다.
    saveToDos(); //변경된 toDos arr를 다시한 번 저장.
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //현재 입력된 value를 변수로 저장. 추후에 비워져도 저장이 잘 되어있다.
    toDoInput.value = ""; //엔터를 누를 때마다 input창이 비워짐. 
    const newToDoObj = {
        text : newTodo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; //li안에 span을 만들어, 그 span의 내용을 newToDo로 바꿔줌. newToDo는 id와 text를 가짐, text만 보이도록.
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}
    
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY); //로컬 스토리지에 string으로 저장된 value

if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos); //parse로 object화 시켜줌.
    toDos = parsedToDos; // toDos 배열을 새로운 데이터를 넣어 다시 정의해줌.
    parsedToDos.forEach(paintToDo); //paintToDo라는 함수는 newToDo라는 데이터를 받고 newToDo는 내가 입력한 밸류로 로컬스토리지에 저장되어 있음. forEach함수는 item을 받아서 뿌려주는데, item이 이미 newToDo라는 데이터로 paintToDo에 들어가 있기 때문에 작동되는 것임. (자바스크립트가 텍스트를 받아서 전달해준다)
}
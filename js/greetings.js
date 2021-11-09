const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME ="hidden"; //string으로만 구성된 변수를 저장하고 싶을 땐 대문자로 변수명을 지정하는 관례가 있음.
const USERNAME_KEY = "username"; //반복되는 단어가 있다면, 오류를 줄이기 위해 변수로 선언해주는 것이 좋다.

function onLoginSubmit(event) { //form에 추가된 submit 이벤트 리스너.
    event.preventDefault(); // submit시 새로고침되는 기본 행동을 억제한다.
    const username = loginInput.value; //username 변수에 사용자가 input에 입력한 value를 담고
    localStorage.setItem("username", username); //이를 브라우저의 로컬 스토리지에 저장한다.
    loginForm.classList.add(HIDDEN_CLASSNAME); //정보입력이 완료된 로그인 폼을 hidden시키고,
    paintGreetings(username); //인삿말을 띄워주는 함수를 실행한다.
}

function paintGreetings(username) { //인삿말을 띄워주는 함수
    greeting.innerText = `Hello, ${username}`; //h1안에 사용자가 입력한 이름을 넣어 인삿말 string을 만든다.
    greeting.classList.remove(HIDDEN_CLASSNAME); //인삿말이 만들어진 h1의 hidden class를 지워, 화면에 뜨도록 한다.
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //로컬 스토리지에 담긴 username을 변수로 선언한다.

if(savedUsername === null) { //만약 로컬 스토리지에 담긴 username이 null값, 즉 없다면
    loginForm.classList.remove(HIDDEN_CLASSNAME); //form의 hidden상태를 지워 나타나게 하고,
    loginForm.addEventListener("submit",onLoginSubmit) //form에 submit 이벤트 리스너를 추가해준다.
} else { //로컬 스토리지에 저장된 값이 있다면, 
   paintGreetings(savedUsername); //그 값을 변수로 넣어 인삿말을 띄워주는 함수를 실행한다.
}
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event) { //이벤트 리스너의 첫번째 인수는 이벤트에 대한 정보. event : 관행적으로 이렇게 지어줌.
    event.preventDefault(); // 함수 실행시 브라우저에 기본적으로 행해지는 동작을 방지하는 함수, 이벤트 리스너의 첫번째 인자의 기능. 그러니까, submit을 실행시킬 때 발생하는 새로고침이라는 기본 기능을 막아주는 역할.
    //const username = loginInput.value;
    console.log(event);
}

loginForm.addEventListener("submit",onLoginSubmit)
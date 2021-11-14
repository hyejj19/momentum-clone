const clock = document.querySelector("h2#clock")

function getTime() {
    const date = new Date(); //new Date()는 Date 객체를 불러옴, 이 함수를 인수 없이 호출하면 현재 날짜 및 시간이 저장된 date 객체가 반환된다.

    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`; 
    //Date 객체의 여러 메소드를 활용해, 현재 시간 값을 얻어올 수 있음. 이를 innerText로 화면에 표시한다.

}

getTime();
setInterval(getTime, 1000);
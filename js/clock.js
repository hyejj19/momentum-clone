const clock = document.querySelector("h2#clock")

function getTime() {
    const date = new Date(); //new Date()는 Date 객체를 불러옴, 이 함수를 인수 없이 호출하면 현재 날짜 및 시간이 저장된 date 객체가 반환된다.

    clock.innerText =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; //Date 객체의 여러 메소드를 활용해, 현재 시간 값을 얻어올 수 있음. 이를 innerText로 화면에 표시한다.

}

getTime(); //페이지가 로드되자마자 바로 실행될 수 있도록 함수를 한 번 호출해줌.
setInterval(getTime, 1000); //그 뒤 매 1초마다 재실행되도록 인터벌을 설정.
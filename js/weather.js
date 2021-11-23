const API_KEY = "1d108399572ef03b6af1e2b23cde4a36";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        const city = document.querySelector("#weather span:last-child");
        const weather = document.querySelector("#weather span:first-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //자바스크립트가 url을 불러줌.
}
function onGeoError(){
    alert("Cant't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);
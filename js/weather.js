const API_KEY = "3b75d0c0f9ee4afb819f3a79b6dd8fa4";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather span:first-child");
      const weather = document.querySelector(".weather span:last-child");
      const weatherIcon = document.querySelector(".weather img");

      // 도시 이름 및 날씨 정보 업데이트
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].description} / ${data.main.temp}℃`;

      // // 날씨 아이콘 추가
      // const iconCode = data.weather[0].icon; // 아이콘 코드 가져오기
      // const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // 아이콘 URL 생성
      // weatherIcon.src = iconUrl; // 이미지 태그의 src 설정
      // weatherIcon.alt = data.weather[0].description; // 아이콘 설명
    });
}

function onGeoError() {
  alert("Sorry, Can't find you. No weather for youㅠㅠ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

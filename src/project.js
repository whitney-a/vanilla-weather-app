function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    hours = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDate()];
}

function displayWeather(response) {
  console.log(response.data);
  console.log(response.data.time);
  let weatherElement = document.querySelector("#weather");
  let humidityElement = document.querySelector("#Humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let dateElement = document.querySelector("#date");
  weatherElement.innerHTML = Math.round(response.data.temperature.current);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  descriptionElement.innerHTML = response.data.condition.description;
  dateElement.innerHTML = formatDate(response.data.time * 1000);
}

let apiKey = `f8o9e9ae7af783f9513a465db0bta63f`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Abuja&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeather);

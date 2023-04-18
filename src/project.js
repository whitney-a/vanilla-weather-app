function displayWeather(response) {
  console.log(response.data);
  let weatherElement = document.querySelector("#weather");
  let humidityElement = document.querySelector("#Humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  weatherElement.innerHTML = Math.round(response.data.temperature.current);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  descriptionElement.innerHTML = response.data.condition.description;
}

let apiKey = `f8o9e9ae7af783f9513a465db0bta63f`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Abuja&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeather);

const endpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=ea0b8a4cfbd1fefde12f4b2172d1163b&units=metric";
let inp = document.querySelector(".inp");
let datas = inp.value;

const city = document.querySelector(".city");
const weather = document.querySelector(".weather");
const date = document.querySelector(".date");
const region = document.querySelector(".region");
const cari = document.querySelector(".cari");
let m = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log();

async function getWeather() {
  const res = await fetch(endpoint + datas + apiKey);
  let data = await res.json();

  console.log(data);
  city.innerHTML = data.name;
  weather.innerHTML = data.main.temp + " " + "°C";
  region.innerHTML = data.sys.country;
  date.innerHTML =
    new Date().getDate() +
    " " +
    m[new Date().getMonth()] +
    " " +
    new Date().getFullYear();
}
cari.addEventListener("click", () => {
  document.querySelector(".main").classList.add("hilang");
  document.querySelector(".search").classList.add("muncul");
});
function btnClick() {
    document.querySelector(".main").classList.remove("hilang");
    document.querySelector(".search").classList.remove("muncul");
    getWeather();
}

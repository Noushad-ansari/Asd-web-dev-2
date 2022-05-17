// 1.weather api
// const  key = "6eed81b01f2ee0f7670a4ec34f5fb3f1"
// const weatherApi = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=6eed81b01f2ee0f7670a4ec34f5fb3f1"

// const url = "https://api.openweathermap.org/data/2.5/weather?q=kota&lat=35&lon=139&appid=6eed81b01f2ee0f7670a4ec34f5fb3f1"

const weatherApi = {
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    key: "6eed81b01f2ee0f7670a4ec34f5fb3f1"
}

const searchInput = document.querySelector("#input_Box")

// console.log(searchInput)
searchInput.addEventListener("keypress", (e) => {
    // console.log(searchInput.value)
    if (e.keyCode == 13) {
        getWeatherReport(searchInput.value)
    }
})

// get Wether Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(res => res.json())
        .then(showWeatherReport)
}

// showing Weather data on webpage
function showWeatherReport(weather) {
    let city = document.querySelector("#city")
    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    let temp = document.querySelector("#temp")
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

    let minMaxTemp = document.querySelector("#min_max")

    minMaxTemp.innerHTML = `${Math.round(weather.main.temp_min)} &deg;C (min) / ${Math.round(weather.main.temp_max)} &deg;C (max)`

    let weatherType = document.querySelector("#weather")
    weatherType.innerHTML = `${weather.weather[0].main}`


    // Date
    let currentDate = new Date()
    let date = document.querySelector("#date")
    date.innerHTML = dataManage(currentDate)


    // dynamic body image 
    if (weather.weather[0].main === "Clouds") {
        document.body.style.background = "url('./public/bg2.jpg')"
        // console.log("hello")
    } else if (weather.weather[0].main === "Sky")
        document.body.style.background = "url('./public/bg2.jpg')"

}

// Date Manage

function dataManage(dateArg) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear()
    let month = months[dateArg.getMonth()]
    let date = dateArg.getDate()
    let day = days[dateArg.getDay()]

    return `${date} ${month} ${day} ${year}`

}
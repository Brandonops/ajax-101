fetch("https://api.openweathermap.org/data/2.5/weather?q=tampa&appid=45eb8c8db2124636e5eaa4fc8b24c96f&units=imperial")
.then((res => res.json()))
.then(body => {
    let weather = document.getElementById("weather");
    weather.innerHTML = body.main.temp + "°"
})
.catch(error => alert("it's not working"));
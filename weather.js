let weather ={
    'apiKey': 'e984a7e51a079a109a2519377ecbba37',
    FetchWeather: function(city){
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='
            + city 
            +'&units=metric&appid=' 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').innerText = 'Weather in ' + `${name}`;
        document.querySelector('.icon').src = 
        'https://openweathermap.org/img/wn/' + `${icon}` + '@2x.png';
        document.querySelector('.description').innerText = `${description}`;
        document.querySelector('.temp').innerText = `${temp}` + '°C';
        document.querySelector('.humidity').innerText = 'Humidity : ' + `${humidity}` + '%';
        document.querySelector('.wind').innerText = 'Wind speed : ' + `${speed}` + 'km/h';
        document.querySelector('.weather').classList.remove('loading');
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1950x1000/?" + `${name}` +"')";
    },
    search: function(){
        this.FetchWeather(document.querySelector('.search-bar').value) ;
    }
};

document.querySelector('.search-btn').addEventListener('click', ()=>{
    weather.search();
})

document.querySelector('.search-btn').addEventListener("keypup",({key})=>{
    if(key === "Enter"){
        /*event.preventDefault();
        weather.search();*/
        alert('test');
    }
})

weather.FetchWeather('Cotonou');
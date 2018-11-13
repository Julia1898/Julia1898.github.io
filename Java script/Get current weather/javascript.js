var endpointLondon ='https://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=9117bf1c0fa1bf432322023751327cc8';
var endpointMinsk = 'https://api.openweathermap.org/data/2.5/forecast?id=625144&APPID=9117bf1c0fa1bf432322023751327cc8';
  

class getWeather {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  getWeather() {
    return fetch(this.endpoint)
             .then(blob => blob.json())
             .then(data => {   
                var temp = this.getCelsius(data.list[0].main.temp);
                var iconMaker = data.list[0].weather[0].icon;
                var icon = "<img src = https://openweathermap.org/img/w/" + iconMaker + ".png>";
                var clauds = data.list[0].weather[0].description;
                var humidity = "Humidity "+"<br>" + data.list[0].main.humidity + " %";
                var wind = "Wind "+"<br>" + data.list[0].wind.speed + " m/s";
                var min = this.getCelsius(data.list[0].main.temp_min);
                var max = this.getCelsius(data.list[0].main.temp_max);
                var cityName = data.city.name;           
                var day = this.getDay();
                var out = document.querySelector('.wraper').innerHTML += `
                   <div class="wraper_weather">
                       <div class="temp">${temp}<span class="cel">&deg;C</span></div>
                       <div class="title${cityName}"><div class="icon">${icon}</div></div> 
                       <div class="clauds">${clauds}</div> 
                       <hr>
                       <div class="day">${day}</div>
                       <hr>
                       <div class="humidity">${humidity}</div>
                       <div class="wind">${wind}</div>
                       <div class="temp_min">Min temp <br>${min} &deg;</div>
                       <div class="temp_max">Max temp <br>${max} &deg;</div>
                   </div>`;
              })
  };

  getCelsius(val) {
    return Math.floor(val - 273);
  };

  getDay() {
    var now = new Date;
    var day = now.getDay();
    var month = now.getMonth();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['Jan ','Feb ','Mur ','Apr ','May ','June','July ','Aug','Sept ','Oct ','Nov ','Dec '];
    var result = '';

    return result = `${days[day]}, ${months[month]} ${now.getDate()}, ${now.getFullYear()}`;
  };
};

var London = new getWeather(endpointLondon);
London.getWeather();

var Minsk = new getWeather(endpointMinsk);
Minsk.getWeather();
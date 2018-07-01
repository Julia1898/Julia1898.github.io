window.onload = function (){
       
       
   var endpoint ='http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=9117bf1c0fa1bf432322023751327cc8';
   var weather={};
   fetch(endpoint)
               .then(blob => blob.json())
               .then(data => {
               	for(var key in data){
                     weather[key] = data[key];
               	}
               	var kelvin = weather.list[0].main.temp;
               	var temp = Math.floor(kelvin - 273);

               	document.querySelector('.temp').innerHTML= temp + `<span class="cel">&deg;C</span>`;

               	var icon = weather.list[0].weather[0].icon;
               	document.querySelector('.icon').innerHTML = "<img src = https://openweathermap.org/img/w/" + icon + ".png>";

               	document.querySelector('.clauds').innerHTML = weather.list[0].weather[0].description;

               	document.querySelector('.humidity').innerHTML = "Humidity "+"<br>" +weather.list[0].main.humidity + " %";

               	document.querySelector('.wind').innerHTML = "Wind "+"<br>" +weather.list[0].wind.speed + " m/s";
                
                var min = Math.floor((weather.list[0].main.temp_min) - 273);
               	document.querySelector('.temp_min').innerHTML = "Min temp "+"<br>" +min + " &deg;";
                
                var max = Math.floor((weather.list[0].main.temp_max) - 273);
               	document.querySelector('.temp_max').innerHTML = "Max temp "+"<br>" +max + " &deg;";
                	


    getTimeLondon();
    getDay();
    setInterval(getTimeLondon,30000);

      var min;
 	  var hour;
     
    function getTimeLondon () {
 	  var now = new Date;
 	  min = now.getUTCMinutes();
 	  hour = now.getUTCHours();
 	  document.querySelector('.time').innerHTML = hour + ':' +min;
    }

    function getDay(){
      var now = new Date;
      var day = now.getDay();
      var realDay;
      if(day == 0)realDay = 'Sunday, ';
      if(day == 1)realDay = 'Monday, ';
      if(day == 2)realDay = 'Tuesday, ';
      if(day == 3)realDay = 'Wednesday, ';
      if(day == 4)realDay = 'Thursday, ';
      if(day == 5)realDay = 'Friday, ';
      if(day == 6)realDay = 'Saturday, ';
      document.querySelector('.date').innerHTML += realDay;
  
      var i = now.getMonth();
      var mon = ['Jan ','Feb ','Mur ','Apr ','May ','June','July ','Aug','Sept ','Oct ','Nov ','Dec '];
      document.querySelector('.date').innerHTML += mon[i];

      var date = now.getDate();
      document.querySelector('.date').innerHTML += date;
      
      var year = now.getFullYear();
      document.querySelector('.date').innerHTML += ' '+ year;
    }

   }) 


   //Minsk

    var endpointMinsk ='http://api.openweathermap.org/data/2.5/forecast?id=625144&APPID=9117bf1c0fa1bf432322023751327cc8';
   var weatherMinsk ={};
   fetch(endpointMinsk)
               .then(blob => blob.json())
               .then(data => {
               	for(var k in data){
                     weatherMinsk[k] = data[k];
               	}
               	
               	 var kelvinMinsk  = weatherMinsk.list[0].main.temp;
               	 var tempMinsk  = Math.floor(kelvinMinsk  - 273);

               	 document.querySelector('.tempMinsk').innerHTML= tempMinsk + `<span class="celMinsk">&deg;C</span>`;

               	var iconMinsk = weatherMinsk.list[0].weather[0].icon;
               	document.querySelector('.iconMinsk').innerHTML = "<img src = https://openweathermap.org/img/w/" + iconMinsk + ".png>";

               	 document.querySelector('.claudsMinsk').innerHTML = weatherMinsk.list[0].weather[0].description;

               	 document.querySelector('.humidityMinsk').innerHTML = "Humidity "+"<br>" +weatherMinsk.list[0].main.humidity + " %";

               	 document.querySelector('.windMinsk').innerHTML = "Wind "+"<br>" +weatherMinsk.list[0].wind.speed + " m/s";
                
                 var minMinsk = Math.floor((weatherMinsk.list[0].main.temp_min) - 273);
               	 document.querySelector('.temp_minMinsk').innerHTML = "Min temp "+"<br>" +minMinsk + " &deg;";
                
                var maxMinsk = Math.floor((weatherMinsk.list[0].main.temp_max) - 273);
               	document.querySelector('.temp_maxMinsk').innerHTML = "Max temp "+"<br>" +maxMinsk + " &deg;"; 

    getTimeMinsk();
    getDayMinsk();
    setInterval(getTimeMinsk,30000);

      var minMinsk;
 	  var hourMinsk;
     
    function getTimeMinsk () {
 	  var now = new Date;
 	  minMinsk = now.getMinutes();
 	  hourMinsk = now.getHours();
 	  document.querySelector('.timeMinsk').innerHTML = hourMinsk + ':' +minMinsk;
    }

    function getDayMinsk(){
      var now = new Date;
      var day = now.getDay();
      var realDay;
      if(day == 0)realDay = 'Sunday, ';
      if(day == 1)realDay = 'Monday, ';
      if(day == 2)realDay = 'Tuesday, ';
      if(day == 3)realDay = 'Wednesday, ';
      if(day == 4)realDay = 'Thursday, ';
      if(day == 5)realDay = 'Friday, ';
      if(day == 6)realDay = 'Saturday, ';
      document.querySelector('.dateMinsk').innerHTML += realDay;
  
      var i = now.getMonth();
      var mon = ['Jan ','Feb ','Mur ','Apr ','May ','June','July ','Aug','Sept ','Oct ','Nov ','Dec '];
      document.querySelector('.dateMinsk').innerHTML += mon[i];

      var date = now.getDate();
      document.querySelector('.dateMinsk').innerHTML += date;
      
      var year = now.getFullYear();
      document.querySelector('.dateMinsk').innerHTML += ' '+ year;
    }
   });   
}
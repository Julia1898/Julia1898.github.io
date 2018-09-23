window.onload = function (){
      
 const endpoint='https://api.coindesk.com/v1/bpi/currentprice.json';
 let price={};
 let diff={};
 var difference = document.querySelector('.updown');
 var color = document.querySelector('#usd_change');
 setTimeout(getPrice,10);
 setInterval(getPrice,30000);

 function getPrice (){
    fetch(endpoint)
          .then(blob => blob.json())
          .then(data => {
          	    for(var key in data){
                  price[key]=data[key];
                }

            var usd= document.querySelector('.usd').innerHTML = price.bpi.USD.rate;
            document.querySelector('.bitcoinBlock').innerHTML = '$'+price.bpi.USD.rate;
            var gbp= document.querySelector('.gbp').innerHTML = price.bpi.GBP.rate;
            document.querySelector('.eurBlock').innerHTML = '&euro;'+price.bpi.GBP.rate;
            var eur= document.querySelector('.eur').innerHTML = price.bpi.EUR.rate; 
            document.querySelector('.gbpBlock').innerHTML = '&pound;'+price.bpi.GBP.rate;

   //changing
   const endpoint3='https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';
    fetch(endpoint3)
          .then(blob => blob.json())
          .then(data => {
          	    for(var j in data){
                  diff[j]=data[j];
                }
                diff = diff.bpi;
                       
            var usd_change= document.querySelector('.usd_change').innerHTML = (price.bpi.USD.rate_float / diff[Object.keys(diff)[0]] *100 -100).toFixed(2);
            document.querySelector('.todayOpen').innerHTML = '$'+ diff[Object.keys(diff)[0]];
            document.querySelector('.todayChange').innerHTML = '$'+ (price.bpi.USD.rate_float - diff[Object.keys(diff)[0]]).toFixed(2);
            if(price.bpi.USD.rate_float >diff[Object.keys(diff)[0]]){
               difference.innerHTML='&#9650;';
               color.style.color='#5cbb26';
            } else{
            	difference.innerHTML='&#9660;';
                color.style.color='#fcc118';
            } 
    })  
  })
         
 } 
   //grapfic
 const endpoint2 ='https://api.coindesk.com/v1/bpi/historical/close.json';
 let graph ={};
 fetch(endpoint2)
          .then(blob => blob.json())
          .then(data => {
          	    for(var key in data){
                  graph[key]=data[key];
                }
                var c = graph.bpi;
              console.log(c);
             
     google.charts.load('current', {packages: ['corechart', 'line']});
     google.charts.setOnLoadCallback(drawLineColors);

function drawLineColors() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', '');

      data.addRows([
        [,c[Object.keys(c)[0]]],    [1, c[Object.keys(c)[1]]],   [2, c[Object.keys(c)[2]]],  [3, c[Object.keys(c)[3]]],   [4, c[Object.keys(c)[4]]],  [5,c[Object.keys(c)[5]]],
        [6, c[Object.keys(c)[6]]],   [7, c[Object.keys(c)[7]]],  [8, c[Object.keys(c)[8]]],  [9, c[Object.keys(c)[9]]],  [10, c[Object.keys(c)[10]]], [11, c[Object.keys(c)[11]]],
        [12, c[Object.keys(c)[12]]], [13, c[Object.keys(c)[13]]], [14, c[Object.keys(c)[14]]], [15, c[Object.keys(c)[15]]], [16, c[Object.keys(c)[16]]], [17, c[Object.keys(c)[17]]],
        [18, c[Object.keys(c)[18]]], [19, c[Object.keys(c)[19]]], [20, c[Object.keys(c)[20]]], [21, c[Object.keys(c)[21]]], [22, c[Object.keys(c)[22]]], [23, c[Object.keys(c)[23]]],
        [24, c[Object.keys(c)[24]]], [25, c[Object.keys(c)[25]]], [26, c[Object.keys(c)[26]]], [27, c[Object.keys(c)[27]]], [28, c[Object.keys(c)[28]]],[29, c[Object.keys(c)[29]]],[30, c[Object.keys(c)[30]]],]);

      var options = {
      	title: 'Bitcoin price, $',
      	backgroundColor:'transparent',
      	legend:{position: 'top', textStyle: {color: 'blue'}},
        hAxis: {
          title: Object.keys(c)[0] + ' - ' + Object.keys(c)[30],
        },
        vAxis: {
          title: ''
        },
        colors: ['#fcc118', '#097138']
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
          });


}
   
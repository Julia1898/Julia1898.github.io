const endpointPrice = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const endpointChange = 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';
const endpointGrapfic ='https://api.coindesk.com/v1/bpi/historical/close.json';


class getData {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  serverRequest(callback){
     fetch(this.endpoint)
          .then(blob => blob.json())
          .then(data => callback(data));
  }
}


var price = new getData(endpointPrice);
price.serverRequest(showPrice);

var grapfic = new getData(endpointGrapfic);
grapfic.serverRequest(drawGrapfic);


function showPrice(price) {
  var bpi = price.bpi;
  var usd = bpi.USD.rate;
  var gbr = bpi.GBP.rate;
  var eur = bpi.EUR.rate;

  document.querySelector('.usd').innerHTML = usd;
  document.querySelector('.bitcoinBlock').innerHTML = '$'+ usd;
  document.querySelector('.gbp').innerHTML = gbr;
  document.querySelector('.eurBlock').innerHTML = '&euro;'+ eur;
  document.querySelector('.eur').innerHTML = eur; 
  document.querySelector('.gbpBlock').innerHTML = '&pound;'+ gbr;
   
  var differencePersent = new getData(endpointChange);
  differencePersent.serverRequest(change(bpi));  
}


function change(price) {
  var upDown = document.querySelector('.updown');
  var color = document.querySelector('#usd_change');
  var usdPrice = price.USD.rate_float;

    return function(changes) {
      var difference =  changes.bpi;
      difference = Object.values(difference)[0].toFixed();
      var usd_change = (usdPrice / difference * 100 - 100).toFixed(2);
      var todayChange = (usdPrice - difference ).toFixed(2);
      
      document.querySelector('.usd_change').innerHTML = usd_change;
      document.querySelector('.todayOpen').innerHTML = '$'+ difference ;
      document.querySelector('.todayChange').innerHTML = '$'+ todayChange;

        if (usdPrice > difference) {
           upDown.innerHTML='&#9650;';
           color.style.color='#5cbb26';
        } else {
            upDown.innerHTML='&#9660;';
            color.style.color='#fcc118';
          }
    }
}


//grapfic

function drawGrapfic(grapfic) {
  var dataBpi = grapfic.bpi;
  var dataArr = [];
  var count = 0;

  for (var key in dataBpi) {
      dataArr.push([count,dataBpi[key]]);
      count++;
  }
   
  google.charts.load('current', {packages: ['corechart', 'line']});
  google.charts.setOnLoadCallback(drawLineColors);

  function drawLineColors() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', '');
    data.addRows(dataArr);

    var start = Object.keys(dataBpi)[0];
    var end = Object.keys(dataBpi)[30];
    start = start.split("-").reverse().join("-");
    end = end.split("-").reverse().join("-");

    var options = {
    	title: 'Bitcoin price, $',
    	backgroundColor:'transparent',
    	legend:{position: 'top', textStyle: {color: 'blue'}},
      hAxis: {
        title: start + ' / ' + end,
      },
      vAxis: {
        title: ''
      },
      colors: ['#fcc118', '#097138']
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  } 
}                
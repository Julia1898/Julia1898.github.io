
var endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
 var cities =[];

fetch(endpoint)
               .then(blob => blob.json())
               .then(data => {
               	   cities.push(...data)

var from = document.querySelector('.from');
var matchFrom = document.querySelector('#placesFrom');
var to = document.querySelector('.to');
var matchTo = document.querySelector('#placesTo');

from.addEventListener('keyup',function (){
	return search(from, matchFrom);
});
to.addEventListener('keyup',function (){
	return search(to, matchTo);
});



function findMatches (word, cities){
	return cities.filter( x => {
		var regex = new RegExp(word, 'gi');
		return x.city.match(regex) || x.state.match(regex);
	})
}

 function search (field, place) {
	var result = findMatches (field.value, cities);
    var out = result.map( x => `<ul><li>${x.city}, ${x.state}</li></ul>`).join('');

	    if (out){
		    place.style.height = 'auto';
		    place.innerHTML = out;
		}

	    var li = document.getElementsByTagName('li');
	   
		for( var i = 0; i < li.length; i++ ){
	       li[i].onclick = function(e){ 
	       	  field.value = this.innerHTML;
	       	  place.innerHTML='';
	       	  place.style.height = 0 + 'px';
	       	  place.classList.add('tool');
		   }
		}	
}

   window.onclick = function(e){
		matchFrom.innerHTML='';
		matchFrom.style.height = 0 + 'px';
		matchFrom.classList.add('tool');
		matchTo.innerHTML='';
		matchTo.style.height = 0 + 'px';
		matchTo.classList.add('tool');
	}

document.querySelector('.button').onclick = function (e){
	if ( !to.value ) return;
    alert(`Have a nive holiday in ${to.value} `);
}


 })






               



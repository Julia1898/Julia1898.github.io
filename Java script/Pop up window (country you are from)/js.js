window.onload = function (){

function getCountry (){

  var modal =  document.querySelector('.modal'); 
  var ip;
  var country_name;

      if (localStorage.getItem('setCountry') == null){

          var endpointIp = 'https://api.ipify.org?format=json';
            fetch(endpointIp)
                 .then(blob => blob.json())
                 .then(data => {
          	          ip = data.ip;
          	          const endpoint = `https://ipapi.co/${ip}/json/`;
         
                  fetch(endpoint)
                      .then(blob => blob.json())
                      .then(data => {
               	           country_name = data.country_name;
               	    	     modal.style.display = 'block';
                           
               	          document.querySelector('.question').innerHTML += `<span class = "question">${country_name}?</span>`;
               	          document.querySelector('.refuse').onclick = function(e) {
               	    	           modal.style.display = 'none';
               	                }
               	          document.querySelector('.admit').onclick = function (e) {
   	                            localStorage.setItem('setCountry', country_name);
   	                             modal.style.display = 'none';
                	              }
               	}) 
            })
            .catch(e => {console.log(new Error ('Look mistake in request'))})
      }
}
	
  getCountry();	  
}

  
	


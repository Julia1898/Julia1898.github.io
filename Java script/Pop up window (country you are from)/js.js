var country = (function() {

    var modal = document.querySelector('.modal'); 
    var ip;
    var country_name;
    var question = document.querySelector('.question');
    var refuse = document.querySelector('.refuse');
    var admit = document.querySelector('.admit');

    function getCountry() {
      if (localStorage.getItem('setCountry') == null) {
         const endpointIp = 'https://api.ipify.org?format=json';
            
         serverRequest(endpointIp, function(data) {
            ip = data.ip;
            const endpointCountry = `https://ipapi.co/${ip}/json/`;
                        	          
            serverRequest(endpointCountry, function(data){
                country_name = data.country_name;
                modal.style.display = 'block';
                question.innerHTML += `<span class = "question">${country_name}?</span>`;
                          
                refuse.onclick = function() {
                  modal.style.display = 'none';
                }

                admit.onclick = function() {
                  localStorage.setItem('setCountry', country_name);
                  modal.style.display = 'none';
                }
            })                  
         })             
      }
    }


   function serverRequest(endpoint, callback) {
      fetch(endpoint)
            .then(blob => blob.json())
            .then(data => callback(data))
   }


    return {
      getCountry: getCountry
    }
})();
	
  country.getCountry();	  

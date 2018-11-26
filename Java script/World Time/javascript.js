var timeApp = (function() {

	function Time(country) {
	 	var sec;
	    var min;
	    var hour;
	    var parent = document.querySelector('#' + country);
	    var secOut = parent.querySelector('.sec');
	    var minOut = parent.querySelector('.min');
	    var hourOut = parent.querySelector('.hour');
	    
	 	this.getTime = function(zone) {
	        var now = new Date;

	        if (country === 'Belarus') {
	           sec = now.getSeconds() * 6;
	           min = 6 * (now.getMinutes() + (1 / 60) * now.getSeconds());
	           hour = 30 * (now.getHours() + (1 / 60) * now.getMinutes());
	        } else {
	           sec = now.getUTCSeconds() * 6;
	           min = 6 * (now.getUTCMinutes() + (1 / 60) * now.getUTCSeconds());
	           hour = 30 * ((now.getUTCHours() + zone) + (1 / 60) * now.getUTCMinutes());
	        }
	    }
		
	 	this.moveArrows = function(zone) {
	 		var countryData = this.getTime.bind(this,zone);
		 	
		 	function rotateArrows() {
                countryData();

		        secOut.style.transform = 'rotate(' + sec + 'deg)';
		    	minOut.style.transform = 'rotate(' + min  + 'deg)';
		    	hourOut.style.transform = 'rotate(' + hour + 'deg)';
		    }
	        return setInterval(rotateArrows,1000);
	 	}
	};


    var london = new Time('London');
    london.moveArrows(-1);

    var belarus = new Time('Belarus');
    belarus.moveArrows(-1);

    var newYork = new Time('NewYork');
    newYork.moveArrows(-6);

    var moscow = new Time('Moscow');
    moscow.moveArrows(+2);
})();

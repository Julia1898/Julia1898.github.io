window.onload = function (){

 window.addEventListener('keydown', function (event) {
 	 var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
     var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
             //audio.controls = true;
        	 audio.currentTime = 0;
        	 audio.play();
             key.classList.add('playing');	
			
 });
 
    window.addEventListener('keyup', function (event) {
 
            var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
            key.classList.remove('playing');	
 }); 
      
}
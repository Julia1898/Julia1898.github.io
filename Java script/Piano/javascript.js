var key;

window.addEventListener('keydown', function(event) {
	var data_key = `[data-key="${event.keyCode}"]`;
 	var audio = document.querySelector(`audio${data_key}`);
    key = document.querySelector(`.key${data_key}`);
	   
	audio.currentTime = 0;
	audio.play();
    key.classList.add('playing');				
 });
 

window.addEventListener('keyup', function(event) {
    key.classList.remove('playing');	
 }); 
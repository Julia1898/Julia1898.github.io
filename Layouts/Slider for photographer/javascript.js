	var slider = document.getElementById('slider');
	var pic = document.getElementById('secondPic');
	setting ();
	function setting (){
        pic.style.width= '200px';
	}
	slider.onmousemove = function(event) {
		var x = event.offsetX;
		pic.style.width = x + 'px';
		document.querySelector('.button').style.display= 'none';
	}
	slider.onmouseleave = function(event){
		pic.style.width= '401px';
	}
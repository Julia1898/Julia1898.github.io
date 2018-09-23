window.onload = function (){
   //slider    
  var slider = document.querySelector('.slider').addEventListener('click', fslider);
 
  function fslider (event){
  	 var img = document.querySelectorAll('.product');
  	if(event.target.className == 'slider1'){
  		var dataSlide = event.target.getAttribute('data-slide');
  		for( var i =0; i <img.length; i++){
  			if(dataSlide == i){
  				img[i].style.display ='block';
  			} else {
  				img[i].style.display ='none';
  			}
  		}
  	}
  }

 //sizing
 var size = document.querySelectorAll('.size1');
    for(var j=0; j < size.length; j++){
 	    size[j].onclick = function (event){
 		     for(var i =0; i < size.length; i++){
 			    size[i].classList.remove('size2');
 		        this.classList.add('size2');
 	         }
 	    }
    }
 
  // quantity
  var quantity = document.querySelector('.add2');
  var num = 1;
  var plus = document.querySelector('.add3').onclick = function (event){
       num++;
       quantity.innerHTML= num;
  } 
  var minus = document.querySelector('.add1').onclick = function (event){
  	if(num != 0){
       num--;
       quantity.innerHTML= num;
   }
  } 

//like
var like2 = document.querySelector('#like')
var step = 0;
var timer;
var opacity =1;
var like = document.querySelector('.like').onclick = function move () {
 	like2.style.display = 'block';
 	like2.style.marginTop = step + 'px';
 	step-=10;
 	   if (step !=-150 && opacity >0){
 	      timer = setTimeout(move,80);
 	      like2.style.opacity = opacity - 0.15;
 	      opacity-=0.15;
       }
 }
   	
 //colour
 var colour = document.querySelectorAll('.check');
 var check_box =document.querySelectorAll('.checkbox_icon');
     for (var n =0; n<check_box.length; n++){
         check_box[n].addEventListener('click',checkColor);
         check_box[n].addEventListener('click',changeImg);

         function checkColor(event){
    	    var dataImg = event.target.getAttribute('data-img');
    	       for(var i =0; i<colour.length; i++){
    	       	  if(dataImg == i){
                     colour[i].style.display= 'block';
    	       	  }else{
    	       	  	 colour[i].style.display= 'none';
    	       	  }
    	       }
         }    
         function changeImg (event){
         	var img = document.querySelectorAll('.product');
         	var block = document.querySelector('.img-block');
         	if (colour[1].style.display =='block'){
                block.innerHTML = '<img class="product" src="images/snik3.png"><img class="product" style="display:none" src="images/snik4.png">';
           } 
           if (colour[0].style.display =='block'){
                block.innerHTML = '<img class="product" src="images/snik1.png"><img class="product" style="display:none" src="images/snik2.png">';
           } 
         }
     }      
}
   
import {getElements, getElement} from './settings.js';

var nav = new getElements('nav').on('mouseover', function(event){
	var target = event.target;
	if(target.tagName != 'UL') return;
	over(target);
});


function over (node){
	var a = node.querySelector('li a');
	 a.style.opacity = 1;
	 var tab = a.innerHTML;
	 setTimeout(()=> node.classList.add('hover'+tab),100);
};

var nav = new getElements('nav').on('mouseout', function(event){
	var target = event.target;
	if(target.tagName != 'UL') return;
	out(target);
});

function out (node){
	var a = node.querySelector('li a');
	 a.style.opacity = 0;
	 var tab = a.innerHTML;
	 setTimeout(()=>node.classList.remove('hover'+tab) ,100);
};


var nav = new getElements('nav').on('click', function(event){
	var target = event.target;
	if(target.tagName != 'UL') return;
	click(target);
});

function click (node){
	var a = node.querySelector('li a');
	 a.style.opacity = 1;
	 var tab = a.innerHTML;
	 var ul = document.querySelectorAll('nav ul');
	 for(var i = 0; i<ul.length; i++){
	 	ul[i].classList.remove('activeHome');
	 	ul[i].classList.remove('activeAbout');
	 	ul[i].classList.remove('activeSkills');
	 	ul[i].classList.remove('activeWork');
	 	ul[i].classList.remove('activeContact');
	 }
	 setTimeout(()=>node.classList.add('active'+tab) ,100);
};


window.onload = function (){
	var loader = new getElement('.appear').getEl();
	loader.classList.add('disappear');
	setTimeout(()=>loader.style.display ='none',1000);	
}

var isIPad = false;
if(navigator.userAgent.match('iPad')){
	isIPad = true;
	var w = window.innerWidth;
	if (isIPad == true && w >= 1024) {
       var container_main = new getElement('.container_main').getEl();
       container_main.style.paddingTop = 40 + '%';
	}
}

// Toggle pages ----------------------------------------




 var content = document.querySelector('.container_main');

var ul = new getElements('ul').on('click', function(event){
	 content.classList.add('close');
     content.classList.remove('open');
    var target = event.target.id;
        if(target == 'home'){
        	 target = 'index';
        	history.replaceState(null, null, '/');
        }else{
            history.pushState(null, null, `${target}.html`);
        }
        
          
          
   setTimeout(function(){
 
	var request = new XMLHttpRequest();
        request.open('GET', `${target}.html`, true);
        request.responseType = 'document';

        request.onreadystatechange = function() {
           if (request.readyState == 4 && request.status == 200) {
	         	var text = request.responseXML.getElementById('container_main');
	         	text = text.innerHTML; 
	         	content.classList.add('open');
                content.classList.remove('close');  
	            content.innerHTML = text;
            } 
        };
    request.send();
   
   } ,400);
  
});


// work page--------------------------------
   
   var main = new getElements('.main').on('click', function(event){
   	    var target = event.target;
   	    if (target.className != 'myImg') return;
   	        var num = target.getAttribute('data-num');
   	        var modal = document.querySelectorAll('.modal')[num];
   	        modal.style.display = 'block';
   });

   main.on('click', function(event){
   	var target = event.target;
    if (target.className != 'closee') return;
   	    var modal = event.target.parentElement;
     	modal.style.display="none";
   });
      
      
     

      
 
  
 
  
   
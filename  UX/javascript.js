window.onload = function () {
// height------ 

  function getHeight (){ 
      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
      var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 
      var hAbout = document.querySelector('.text_about').offsetHeight;
      var hWork = document.querySelector('.text_work').offsetHeight; 
 
      document.querySelector('.header').style.height = height + 'px';
      document.querySelector('.menu_about').style.height = height + 'px';
      document.querySelector('.menu_work').style.height = height + 'px';
      document.querySelector('.menu_contact').style.height = height + 'px';
      document.querySelector('.about').style.height = hAbout+ 'px';
      document.querySelector('.work').style.height = hWork+ 'px';
      document.querySelector('.contact').style.height = height + 'px';
      document.querySelector('.text_contact').style.height = height + 'px';
      document.querySelector('.tourism').style.height = height + 'px';
      document.querySelector('.pumatrac').style.height = height + 'px';
      document.querySelector('.redbull').style.height = height + 'px';
      document.querySelector('.mycomfort').style.height = height + 'px';
      if(w <=850){        
        document.querySelector('.about').style.height = 'auto';
        document.querySelector('.work').style.height = 'auto';
        document.querySelector('.contact').style.height = 'auto';
      }
      
    
// hamburger menu
 var open = document.querySelector('.open');
 var close = document.querySelector('.close');
 var toggle = document.querySelector('.toggle');
 open.onclick= function (){
     open.removeAttribute('style');
     close.style.display= 'block';
     toggle.style.display='block';
 }
 close.onclick= function (){
     open.style.display= 'block';
     close.removeAttribute('style');
     toggle.removeAttribute('style');
 }
  function menu (){
    if (window.innerWidth >850){
      close.style.display= 'none';
      toggle.style.display='none';
      open.style.display='none';
    }else {
      open.style.display='block';
    }
  }
  menu();

  } 
  getHeight();

  window.onresize =  getHeight;

 //-----------------------------
  

        var about = document.querySelector('.menu_about');
        var work = document.querySelector('.menu_work');

  window.onscroll = function scrolll(event){
      if(window.innerWidth >850){
         var hAbout = document.querySelector('.text_about').offsetHeight;
         var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
         var hWork = document.querySelector('.text_work').offsetHeight;
         scroll = window.pageYOffset;
       

           if(scroll >= height && scroll < hAbout){
               about.style.position = 'fixed';
               about.style.top = 0 +'px';
           } if(scroll < height){
               about.style.position = 'absolute';
           } if(scroll >hAbout){
               about.style.position = 'absolute';
               about.style.top = hAbout-height +'px';
           }
           if(scroll >=height+hAbout && scroll < height + hAbout+hWork){
             work.style.position='fixed';
             work.style.top = 0 +'px';
           } if(scroll< height + hAbout){
             work.style.position='absolute';
           } if(scroll > height + hAbout-height + hWork){
             work.style.position ='absolute';
             work.style.top = hWork-height +'px';
           } 
      } 
 }
 //----ooacity more
var img = document.querySelector('.text_work');
var more =document.querySelectorAll('.more');
var opacity = 0;
       img.onmouseover = function (event) {
          for(var i =0;i<more.length; i++){
            more[i].style.opacity = 1;               
          }
       }
        img.onmouseleave = function (event) {
           for(var i =0;i<more.length; i++){
              more[i].style.opacity = 0;              
           }
        }
   
}
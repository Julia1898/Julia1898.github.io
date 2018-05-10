window.onload = function (){
       
 setInterval(belarus,1000);
   
 
 function belarus () {
 	var sec;
 	var min;
 	var hour;
 	var now = new Date;
 	sec = now.getSeconds() * 6;
 	min = 6 * (now.getMinutes() + (1/60) * now.getSeconds());
 	hour = 30*(now.getHours() + (1/60) * now.getMinutes());
 	document.querySelector('#sec1').style.transform = 'rotate(' + sec  + 'deg)';
 	document.querySelector('#min1').style.transform = 'rotate(' + min  + 'deg)';
    document.querySelector('#hour1').style.transform = 'rotate(' + hour + 'deg)';
     
    
 }
 //--------------------------------------------------

 setInterval(london,1000);
   
 
 function london () {
 	var sec;
 	var min;
 	var hour;
 	var now = new Date;
 	sec = now.getUTCSeconds() * 6;
 	min = 6 * (now.getUTCMinutes() + (1/60) * now.getUTCSeconds());
 	hour = 30*((now.getUTCHours()+1) + (1/60) * now.getUTCMinutes());
 	document.querySelector('#sec').style.transform = 'rotate(' + sec  + 'deg)';
 	document.querySelector('#min').style.transform = 'rotate(' + min  + 'deg)';
 	document.querySelector('#hour').style.transform = 'rotate(' + hour + 'deg)';
 }
   //--------------------------------------------------

   setInterval(newYork,1000);
   
 
 function newYork () {
 	var sec;
 	var min;
 	var hour;
 	var now = new Date;
 	sec = now.getUTCSeconds() * 6;
 	min = 6 * (now.getUTCMinutes() + (1/60) * now.getUTCSeconds());
 	hour = 30*((now.getUTCHours()-4) + (1/60) * now.getUTCMinutes());
 	document.querySelector('#sec2').style.transform = 'rotate(' + sec  + 'deg)';
 	document.querySelector('#min2').style.transform = 'rotate(' + min  + 'deg)';
 	document.querySelector('#hour2').style.transform = 'rotate(' + hour  + 'deg)';
 }
              
  //--------------------------------
  setInterval(moscow,1000);
   
 
 function moscow () {
 	var sec;
 	var min;
 	var hour;
 	var now = new Date;
 	sec = now.getUTCSeconds() * 6;
 	min = 6 * (now.getUTCMinutes() + (1/60) * now.getUTCSeconds());
 	hour = 30*((now.getUTCHours()+3) + (1/60) * now.getUTCMinutes());
 	document.querySelector('#sec3').style.transform = 'rotate(' + sec  + 'deg)';
 	document.querySelector('#min3').style.transform = 'rotate(' + min  + 'deg)';
 	document.querySelector('#hour3').style.transform = 'rotate(' + hour  + 'deg)';
 } 



}
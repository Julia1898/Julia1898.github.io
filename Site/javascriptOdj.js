window.onload = function (){


//pupils movement------------------
	var pupilleft = document.querySelector('.pupilleft');
  var pupilright = document.querySelector('.pupilright');
    var yeyleft =document.querySelector('.pupil1');
    var yeyright =document.querySelector('.pupil2');

  document.onmousemove = function move (event){
    var x1 = pupilleft.offsetLeft;
    var y1= pupilleft.offsetTop;
        var y2 = event.clientY-300;
        var x2 = event.clientX-300;
    var r = 20;
    var r1 =10;
      var y =((r*(y2-y1))/Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)))+y1;
      var y3 =((r1*(y2-y1))/Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)))+y1;
    var x=(((y-y1)*(x2-x1))/(y2-y1))+x1;
    var x3=(((y3-y1)*(x2-x1))/(y2-y1))+x1;

    pupilleft.style.marginLeft = (x-x1+1) +'px';
    pupilleft.style.marginTop = (y-y1+1) +'px';

    pupilright.style.marginLeft = (x-x1) +'px';
    pupilright.style.marginTop = (y-y1+1) +'px';

    yeyleft.style.marginLeft = (x3-x1) +'px';
    yeyleft.style.marginTop = (y3-y1+1) +'px';

    yeyright.style.marginLeft = (x3-x1) +'px';
    yeyright.style.marginTop = (y3-y1+1) +'px';
  }
//small oji---------------------------
var pupilleftS = document.querySelector('.pupilleftS');
  var pupilrightS = document.querySelector('.pupilrightS');
    var yeyleftS =document.querySelector('.pupil1S');
    var yeyrightS =document.querySelector('.pupil2S');

  document.querySelector('.layer2').onmousemove = function moveS (event){
    var x1 = pupilleftS.offsetLeft;
    var y1= pupilleftS.offsetTop;
        var y2 = event.clientY-300;
        var x2 = event.clientX-300;
    var r = 20;
    var r1 =10;
      var y =((r*(y2-y1))/Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)))+y1;
      var y3 =((r1*(y2-y1))/Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)))+y1;
    var x=(((y-y1)*(x2-x1))/(y2-y1))+x1;
    var x3=(((y3-y1)*(x2-x1))/(y2-y1))+x1;

    pupilleftS.style.marginLeft = (x-x1+1) +'px';
    pupilleftS.style.marginTop = (y-y1+1) +'px';

    pupilrightS.style.marginLeft = (x-x1)+'px';
    pupilrightS.style.marginTop = (y-y1+1) +'px';

    yeyleftS.style.marginLeft = (x3-x1) +'px';
    yeyleftS.style.marginTop = (y3-y1+1) +'px';

    yeyrightS.style.marginLeft = (x3-x1) +'px';
    yeyrightS.style.marginTop = (y3-y1+1) +'px';
  }
  //small oji blinks------------------
    blinksS();
    blinks2S();
  var timerS;
  var timer1S;
  var timer2S;
  var timer3S;

  function blinksS (){ 
      timerS = setTimeout(function (){
            pupilleftS.style.background = 'url(images/yey1S.png)';
            pupilrightS.style.background = 'url(images/yey1S.png)';
            yeyleftS.style.background = 'none';
            yeyrightS.style.background = 'none';
               timer1S = setTimeout (function (){
                  pupilleftS.style.background = 'url(images/yeyS.png)';
                  pupilrightS.style.background = 'url(images/yeyS.png)';
                  yeyleftS.style.background = 'url(images/pupilS.png)';
                  yeyrightS.style.background = 'url(images/pupilS.png)';
               },100);
        blinksS();
      },3000);
  }
  function blinks2S (){  
      timer2S = setTimeout(function (){
            pupilleftS.style.background = 'none';
            yeyleftS.style.background = 'none';
            pupilrightS.style.background = 'none';
            yeyrightS.style.background = 'none';
               timer3S = setTimeout (function (){
                  pupilleftS.style.background = 'url(images/yeyS.png)';
                  yeyleftS.style.background = 'url(images/pupilS.png)';
                  pupilrightS.style.background = 'url(images/yeyS.png)';
                  yeyrightS.style.background = 'url(images/pupilS.png)';
               },50);
        blinks2S();
      },4000);        
  }
//blinks-------------------------------
    blinks();
    blinks2();
	var timer;
	var timer1;
	var timer2;
	var timer3;

	function blinks (){	
		  timer = setTimeout(function (){
            pupilleft.style.background = 'url(images/yey1.png)';
            pupilright.style.background = 'url(images/yey1.png)';
            yeyleft.style.background = 'none';
            yeyright.style.background = 'none';
               timer1 = setTimeout (function (){
                  pupilleft.style.background = 'url(images/yey.png)';
                  pupilright.style.background = 'url(images/yey.png)';
                  yeyleft.style.background = 'url(images/pupil.png)';
                  yeyright.style.background = 'url(images/pupil.png)';
               },100);
		    blinks();
		  },3000);
	}
	function blinks2 (){	
		  timer2 = setTimeout(function (){
            pupilleft.style.background = 'none';
            yeyleft.style.background = 'none';
            pupilright.style.background = 'none';
            yeyright.style.background = 'none';
               timer3 = setTimeout (function (){
                  pupilleft.style.background = 'url(images/yey.png)';
                  yeyleft.style.background = 'url(images/pupil.png)';
                  pupilright.style.background = 'url(images/yey.png)';
                  yeyright.style.background = 'url(images/pupil.png)';
               },50);
		    blinks2();
		  },4000); 	      
	}
// close yeys--------------------------
var leftyey = document.querySelector('.leftyey');
var pupilleft1 = document.querySelector('.pupilleft1');
var rightyey = document.querySelector('.rightyey');
var pupilright1 = document.querySelector('.pupilright1');
 leftyey.onmouseover = function (event){
 	pupilleft.style.display = 'none';
    pupilleft1.style.display = 'block';
    pupilright.style.display = 'none';
    pupilright1.style.display = 'block';       
 }
leftyey.onmouseleave = function (event){
 	pupilleft.style.display = 'block';
    pupilleft1.style.display = 'none';
    pupilright.style.display = 'block';
    pupilright1.style.display = 'none';     
 }
 
 rightyey.onmouseover = function (event){
 	pupilright.style.display = 'none';
    pupilright1.style.display = 'block';
    pupilleft.style.display = 'none';
    pupilleft1.style.display = 'block';  
 }
rightyey.onmouseleave = function (event){
 	pupilright.style.display = 'block';
    pupilright1.style.display = 'none';  
    pupilleft.style.display = 'block';
    pupilleft1.style.display = 'none'; 
 }
	//screen
  var height = screen.height; 
  var layer = document.querySelector('.layer').style.height = height -130 + 'px';
 
  //scroll-----------------------------------------
var scroll;
 
var opacity = 0;
var who = document.querySelector('.who-i-am');
var point = document.querySelector('.point');
var r = document.querySelector('.r');
var top =520;
var topR = 965;

  window.onscroll = function (event){
     scroll = window.pageYOffset;
          if(top<690 && scroll>700){//point down
               point.style.top = top + 'px';
               top+=6;
           }
          if(scroll > 950){//text appear
             if(opacity<1){
                 who.style.opacity = opacity+0.08;
                 opacity+=0.08;        
              }
              if(topR > 765){ //letter up
                r.style.top = topR +'px';
                topR-=15;
              }
          } 

          if(top>520 && scroll<700){//point up
               point.style.top = top + 'px';
               top-=6;
           }
          if (scroll < 950){//text disapp
             if(opacity >0){
                 who.style.opacity = opacity-0.04;
                 opacity-=0.04;
              }
              if(topR < 965){ //letter down
                r.style.top = topR +'px';
                topR+=6;
              }
          }
  }

//slider--------------------
var left =0;
var polosa = document.querySelector('.polosa');
var polosa1 = document.querySelector('.polosa1');
var w =screen.width;
var timer;
var flag;
var right = document.querySelector('.right');
right.onmouseenter = function slider () {
 flag = true;
      timer = setTimeout(function (){
          if(flag == true){
                left = left - 20; 
                      if(left < -(4784-w)){
                           left = -(4784-w);
                      }
                      polosa.style.left = left + 'px';
                      polosa1.style.left = left + 'px';
                      slider();
          } else {
                clearTimeout(timer);
          }  
      },50);
         
}

var leftt = document.querySelector('.left');
leftt.onmouseenter= function slider1(){
   flag = true;
      timer = setTimeout(function (){
          if(flag == true){
                left = left + 50;
                      if (left >=0){
                          left = 0;
                      }
                      polosa.style.left = left + 'px';
                      polosa1.style.left = left + 'px';
                      slider1();
          }else{
            clearTimeout(timer);
          }
      },50);
}
   
right.onmouseleave = function (){
  flag=false;
  return flag;
}
leftt.onmouseleave = function (){
  flag = false;
  return flag;
} 
//-----------------------------------
 function width (){
  document.querySelector('.slider').style.width = w;
 }
width();

//-----------------------------------
}

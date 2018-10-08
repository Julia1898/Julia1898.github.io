window.onload = function (){
       
 document.getElementById('spacing').oninput = cssGeneratorSpace;
 document.getElementById('blur').oninput = cssGeneratorBlur;
 document.querySelector('.color').oninput = cssGeneratorColor;

 var block = document.getElementById('block');
 var img =document.getElementById('img');

 function cssGeneratorSpace () {
 	block.style.padding = this.value + 'px';
 }
 //--------------------
 function cssGeneratorBlur () {
 	img.style.webkitFilter = 'blur('+this.value + 'px)';
 }
 //--------------------
 function cssGeneratorColor () {
 	block.style.background = this.value;
 }
     
      
}
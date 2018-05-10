window.onload = function () {

//Move sign up block to the right
  document.getElementById('sign2').onclick = function () {
      var block = document.getElementById('topblock');
      block.className = 'click';
  
  //Move log in block to the right
      var block1 = document.getElementById('topblock3');
      block1.className = 'click';
      block1.style.zIndex = '10';
  }


//Move sign up block to the left
  document.getElementById('sign').onclick = function () {
      var block = document.getElementById('topblock');
      block.className = 'click2';

//Move log in block to the left
      var block1 = document.getElementById('topblock3');
      block1.className = 'click2';
      block1.style.zIndex = '7';
  }



}
window.onload = function (){
       
  class getElements{
    constructor(selector){
       this.el = document.querySelectorAll(selector);
    }
    on(event,callback){
      for(var i =0; i < this.el.length; i++){
        this.el[i].addEventListener(event, callback);
      }
      return this;
    }
  }


class getElement{
  constructor(selector){
    this.el = document.querySelector(selector);
    return this.el;
  }
}

class getElementsSelf{
  constructor(selector){
    this.el = document.querySelectorAll(selector);
     return Array.from(this.el);
  }
}


//--functions--------------------
var counter = 0;

function move (){
  if(counter % 2==0 && counter < 8){
    this.innerHTML = 'X';
    tern.innerHTML = '0';
    check('X');
  } else if(counter % 2 !=0 && counter < 8){
    this.innerHTML = '0';
    tern.innerHTML = 'X';
    check('0');
  } else if(counter ==8){
    checkDraw();
  }
  counter++;
}


function restart(el){
  for(var i =0; i < el.length; i++){
      el[i].innerHTML = '';
  }
   tern.innerHTML = 'X';
   counter = 0;
}
 
 function clear (el){
   for(var i =0; i < el.length; i++){
      el[i].innerHTML = '';
  }
   tern.innerHTML = 'X';
   counter = -1;
 }

function checkWinner(){
   var wonX = 0;
   var wonO = 0;
   return function(player){
      if(blocks[0].innerHTML == player && blocks[1].innerHTML == player && blocks[2].innerHTML == player){
          alert ('Won ' + player);
          var winner = player;
          clear(blocks);
      }
      if(blocks[3].innerHTML == player && blocks[4].innerHTML == player && blocks[5].innerHTML == player){
          alert ('Won ' + player);
          var winner = player;
          clear(blocks);
      }
      if(blocks[6].innerHTML == player && blocks[7].innerHTML == player && blocks[8].innerHTML == player){
          alert ('Won ' + player);
          var winner = player;
          clear(blocks);
      }
      if(blocks[0].innerHTML == player && blocks[3].innerHTML == player && blocks[6].innerHTML == player){
          alert ('Won ' + player);
          var winner = player;
          clear(blocks);
      }
      if(blocks[1].innerHTML == player && blocks[4].innerHTML == player && blocks[7].innerHTML == player){
          alert ('Won ' + player);
          var winner = player;
          clear(blocks);
      }
      if(blocks[2].innerHTML == player && blocks[5].innerHTML == player && blocks[8].innerHTML == player){
          alert ('Won ' + player);
          var winner = player;
          clear(blocks);
      }
      if(blocks[0].innerHTML == player && blocks[4].innerHTML == player && blocks[8].innerHTML == player){
          alert ('Won ' + player);
          var winner = player;
          clear(blocks);
      }
      if(blocks[2].innerHTML == player && blocks[4].innerHTML == player && blocks[6].innerHTML == player){
          alert ('Won ' + player);
          var winner = player;
          clear(blocks);
      }
          if(winner == 'X') return wonx.innerHTML = ++wonX;
          if(winner == '0') return wono.innerHTML = ++wonO;
     }
}

var check = checkWinner();

function countDraw(){
   var countD = 0;
   return function (){
      alert ('Draw');
      draw.innerHTML = ++countD;
      restart(blocks);
   }
}

var checkDraw = countDraw();

//Main code -------------------------

var tern = new getElement('.tern');

(new getElements('.block')).on('click', move);

var blocks = new getElementsSelf('.block');

(new getElements('.restart')).on('click', function(){
  return restart(blocks);
});

var wonx = new getElement('.wonX');
var wono = new getElement('.wonO');
var draw = new getElement('.draw');




}
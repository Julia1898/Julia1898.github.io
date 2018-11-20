var playGame = (function() {

  var tern = document.querySelector('.tern');
  var blocks = document.querySelectorAll('.block');
  var restartButton = document.querySelector('.restartButton');
  var wonx = document.querySelector('.wonX');
  var wono = document.querySelector('.wonO');
  var draw = document.querySelector('.draw');
  var checkDraw = countDraw();
  var check = checkWinner();
  var counter = 0;


  function makeMove() {
    for (var i =0 ; i < blocks.length; i++) {
        blocks[i].addEventListener('click', move);
    }
  }


  restartButton.addEventListener('click', function(){
    return restart(blocks);
  });


  function move() {
    if (counter % 2 == 0 && counter < 8) {
       this.innerHTML = 'X';
       tern.innerHTML = '0';
       check('X');
    } 
    else if (counter % 2 != 0 && counter < 8) {
       this.innerHTML = '0';
       tern.innerHTML = 'X';
       check('0');
    } 
    else if (counter == 8) {
       checkDraw();
    }
    counter++;
  }


  function clean(el) {
    for (var i = 0; i < el.length; i++) {
        el[i].innerHTML = '';
    }
    tern.innerHTML = 'X';
  }


  function restart(el) {
    clean(el);
    counter = 0;
  }
   

  function clear(el) {
    clean(el);
    counter = -1;
  }


  function countDraw() {
    var countD = 0;

    return function () {
        alert ('Draw');
        draw.innerHTML = ++countD;
        restart(blocks);
    }
  }


  function checkWinner() {
    var wonX = 0;
    var wonO = 0;
    var winner; 
    var combinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

    return function(player) {

      for (var i = 0; i < combinations.length; i++) {
        if (blocks[combinations[i][0]].innerHTML == player && blocks[combinations[i][1]].innerHTML == player && blocks[combinations[i][2]].innerHTML == player) {
           winner = player;
           alert ('Won ' + player);
           clear(blocks);

           if(winner == 'X') return wonx.innerHTML = ++wonX;
           if(winner == '0') return wono.innerHTML = ++wonO;
        }
      }
    }
  }

  return {
        makeMove:  makeMove
  }
})();

playGame.makeMove();
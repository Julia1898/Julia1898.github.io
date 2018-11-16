document.querySelector('#spacing').oninput = cssGeneratorSpace;
document.querySelector('#blur').oninput = cssGeneratorBlur;
document.querySelector('.color').oninput = cssGeneratorColor;

var block = document.querySelector('#block');
var img = document.querySelector('#img');

function cssGeneratorSpace() {
  block.style.padding = this.value + 'px';
}


function cssGeneratorBlur() {
  img.style.webkitFilter = 'blur(' + this.value + 'px)';
}


function cssGeneratorColor() {
  block.style.background = this.value;
}
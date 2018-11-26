var block = document.querySelector('#block');
var img = document.querySelector('#img');

document.querySelector('#spacing').oninput = cssGeneratorSpace;
document.querySelector('#blur').oninput = cssGeneratorBlur;
document.querySelector('.color').oninput = cssGeneratorColor;

function cssGeneratorSpace() {
  block.style.padding = this.value + 'px';
}


function cssGeneratorBlur() {
  img.style.webkitFilter = 'blur(' + this.value + 'px)';
}


function cssGeneratorColor() {
  block.style.background = this.value;
}
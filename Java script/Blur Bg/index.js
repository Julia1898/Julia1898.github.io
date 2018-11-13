var imageCanvas, lineCanvas, imageCanvasCtx, lineCanvasCtx;
var points = [], image, bgcSize;

window.onload = init;

function init() {
  image = document.querySelector('img');
  
  points = [];
  imageCanvas = document.getElementById('ImageCanvas');
  lineCanvas = document.createElement('canvas');
  
  imageCanvasCtx = imageCanvas.getContext('2d');
  lineCanvasCtx = lineCanvas.getContext('2d');
  
  window.addEventListener('resize', onResize, false);
  window.addEventListener('mousemove', onMove, false);
  
  onResize()
  
  if (image.complete) {
    loop()
  } else {
    image.onload = loop;
  }
}

function onMove(e) {
  points.push({
    time: Date.now(),
    x: e.clientX,
    y: e.clientY
  })
}

function onResize() {
  imageCanvas.width = lineCanvas.width = window.innerWidth;
  imageCanvas.height = lineCanvas.height = window.innerHeight;
  bgcSize = backgroundCover(imageCanvas);
}

function loop() {
  clearDots()
  drawLineCanvas()
  drawImageCanvas()
  requestAnimationFrame(loop)
}

function drawImageCanvas() {
  
  imageCanvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
  imageCanvasCtx.globalCompositeOperation = 'source-over';
  imageCanvasCtx.drawImage(image, 0, 0, bgcSize.w, bgcSize.h);
  imageCanvasCtx.globalCompositeOperation = 'destination-in';
  imageCanvasCtx.drawImage(lineCanvas, 0, 0);
}

function backgroundCover(canvas) {
  
  var w = canvas.width
  var h = canvas.width / image.naturalWidth * image.naturalHeight
  
  if (h < canvas.height) {
    w = canvas.height / image.naturalHeight * image.naturalWidth
    h = canvas.height
  }
  
  return {w: w, h: h}
}

function drawLineCanvas() {
  lineCanvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)  
  lineCanvasCtx.lineCap = 'round'
  lineCanvasCtx.shadowBlur = 30
  lineCanvasCtx.shadowColor = 'rgb(0,0,0)'
  
  for (var pi = 1; pi < points.length; ++pi) {
    var point = points[pi], prevPoint = points[pi-1]
    
    lineCanvasCtx.strokeStyle = 'rgba(0,0,0,'+ calcOpacity(point) +')'
    lineCanvasCtx.lineWidth = calcLineWidth(point, prevPoint)
    
    lineCanvasCtx.beginPath()
    lineCanvasCtx.moveTo(prevPoint.x, prevPoint.y)
    lineCanvasCtx.lineTo(point.x, point.y)
    lineCanvasCtx.stroke()
  }
}

function calcLineWidth(p1, p2) {
  return Math.random() * 30 +10
}

function calcOpacity(p) {                                 
  return (1000 - (Date.now() - p.time)) / 1000
}

function clearDots() {
  points = points.filter(function (p) {
    return Date.now() - p.time < 1000
  })
}
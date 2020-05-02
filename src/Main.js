var canvas = createScreen(window.innerWidth, window.innerHeight);
var buffer = setScreenBuffer(canvas.width / 4, canvas.height / 4, canvas.width / 2, canvas.height / 2);
setPixel(buffer, buffer.width / 2, buffer.height / 2, 255, 0, 0, 127);
render(buffer, canvas) ;

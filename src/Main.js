var canvas = createScreen(window.innerWidth, window.innerHeight);
var buffer = setScreenBuffer(0, 0, canvas.width, canvas.height);
setPixel(buffer, 128, 128, 255, 0, 0, 255);
render(buffer, canvas);

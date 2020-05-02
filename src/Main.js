var canvas = createScreen(window.innerWidth, window.innerHeight);
var buffer = setScreenBuffer(0, 0, canvas.width, canvas.height);
setPixel(buffer, 128, 128, 255, 0, 0, 127);
point(buffer, [ 256, 256 ], [ 3, 4 ], [ 255, 127, 63, 127 ]);
render(buffer, canvas);

var canvas = createScreen(window.innerWidth, window.innerHeight);

var buffer = setScreenBuffer(canvas.width / 4, canvas.height / 4, canvas.width / 2, canvas.height / 2);

render(buffer, canvas);

alert(buffer.data);

function setScreenBuffer(x, y, w, h) {
	var data = new Array(w * h * 4);
	
	for (var i = 0; i < data.length; i++) {
		data[i] = 0;
	}
	
	for (var i = 3; i < data.length; i += 4) {
		data[i] = 255;
	}
	
	return {
		data: data,
		height: height,
		length: w * h,
		scale: {
			x: 1,
			y: 1
		},
		width: w,
		x: x,
		y: y
	};
}

function render(buffer, canvas) {
	var ctx = canvas.context;
	
	var pixels = New Uint8ClampedArray(buffer.data);
	
	var screen = new ImageData(pixels, buffer.width, buffer.height);
	
	ctx.putImageData(screen, buffer.x, buffer.y);
}

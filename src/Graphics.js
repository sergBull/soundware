function render(buffer, canvas) {
	var ctx = canvas.context;
	
	var pixels = new Uint8ClampedArray(buffer.data);
	
	var screen = new ImageData(pixels, buffer.width, buffer.height);
	
	ctx.putImageData(screen, buffer.x, buffer.y);
}


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
		height: h,
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

function setPixel(buffer, x, y, r, g, b, a) {
	var i = (y * buffer.width + x) * 4;
	
	var data = buffer.data;
	
	var dr = data[i + 0];
	var dg = data[i + 1];
	var db = data[i + 2];
	
	data[i + 0] = dr * (1 / (a / 255)) + r * (a / 255);
	data[i + 1] = dg * (1 / (a / 255)) + g * (a / 255);
	data[i + 2] = db * (1 / (a / 255)) + b * (a / 255);
	data[i + 3] = 255;
}

function setPoint(buffer, t0, size, color) {
	var x = t0[0];
	var y = t0[1];
	
	var h = size[1];
	var w = size[0];
	
	for (var i = x; i < w; i++) {
		for (var j = y; j < h; j++) {
			setPixel(buffer, i, j, color[0], color[1], color[2], color[3]);
		}
	}
}

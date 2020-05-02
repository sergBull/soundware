function line(buffer t0, t1, lw, color) {
	var x0 = t0[0];
	var y0 = t0[1];
	
	var x1 = t1[0];
	var y1 = t1[1];
	
	var dx = abs(x1 - x0);
	var dy = abs(y1 - y0);
	
	var sx = x0 < x1 ? 1 : -1;
	var sy = y0 < y1 ? 1 : - 1;
	
	var err = dx - dy;
	
	point(buffer, [ x1, y1 ], lw, color);
	
	while (x0 != x1 || y0 != y1) {
		point(buffer, [ x0, y0 ], lw, color);
		
		var err2 = err * 2;
		
		if (err2 > -dy) {
			err -= dy;
			x0 += sx;
		}
		
		if (err2 < dx) {
			err += dx;
			y0 += sy;
		}
	}
} 

function point(buffer, t0, size, color) {
	var x = t0[0];
	var y = t0[1];
	
	var h = size[1];
	var w = size[0];
	
	for (var i = x; i < x + w; i++) {
		for (var j = y; j < y + h; j++) {
			setPixel(buffer, i, j, color[0], color[1], color[2], color[3]);
		}
	}
}

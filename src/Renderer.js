function createScreen(w, h) {
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	
	document.body.appendChild(canvas);
	
	canvas.height = h;
	canvas.width = w;
	
	return {
		canvas: canvas,
		context: ctx,
		height: canvas.height,
		width: canvas.width
	};
}

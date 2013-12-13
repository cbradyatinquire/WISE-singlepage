
var drawrandom = function( args ) {
	
	var mouseX, mouseY;

	    if(args.offsetX) {
	        mouseX = args.offsetX;
	        mouseY = args.offsetY;
	    }
	    else if(args.layerX) {
	        mouseX = args.layerX;
	        mouseY = args.layerY;
	    }
	
	var ds = document.getElementById("draw_space");
	var ctx = ds.getContext('2d');
	//var xc = ds.width * Math.random();
	//var yc = ds.height * Math.random();
	//var xc2 = ds.width * Math.random();
	//var yc2 = ds.height * Math.random();
	ctx.beginPath();
	//console.log(args);
	ctx.moveTo(mouseX - 3, mouseY);
	ctx.lineTo(mouseX + 3, mouseY);
	ctx.moveTo(mouseX , mouseY - 3);
	ctx.lineTo(mouseX , mouseY + 3);
	ctx.lineWidth = 2;
	ctx.stroke();
	ctx.closePath();
}

function clearCanvas() {
	var ds = document.getElementById("draw_space");
	var ctx = ds.getContext('2d');
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,450,300);
	ctx.fillStyle = "#000000";
	ctx.fillRect(50,50,50,50);
	ctx.fillStyle = "#8833AA";
	ctx.fillRect(75,75,50,50);
}

console.log("-----------------> loaded helloWorld.js");

function setup() {
	var ds = document.getElementById("draw_space");
	var ctx = ds.getContext('2d');
	ctx.fillRect(50,50,50,50);
	//ctx.globalCompositeOperation = 'xor';
	ctx.fillStyle = "#8833AA";
	ctx.fillRect(75,75,50,50);
	ds.addEventListener('mousemove', drawrandom, false);

	//load any previous responses the student submitted for this step
	var latestState = parent.apiToGetLatestState();

	console.log("latest state");
	console.log(latestState);
	if(latestState != null) {
		/*
		 * get the response from the latest state. the response variable is
		 * just provided as an example. you may use whatever variables you
		 * would like from the state object (look at testTypeState.js)
		 */

		var latestImage = new Image();
		latestImage.src = latestState.imageData;
		console.log("!!!!!!!!!!!!!!!!!drawing");
		console.log(latestImage);
		ctx.drawImage(latestImage, 0, 0);
	}
}


function provideSavedState() {
	var ds = document.getElementById("draw_space");
	var ctx = ds.getContext('2d');
	var imagedata = ds.toDataURL();
	console.log(">>>>>>>>>>>>sending from app: " + imagedata);
	return imagedata;
}
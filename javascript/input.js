//input.js

//
//global variables
//
var mousex = 0;
var mousey = 0;
var mousedown = 0;
var mouseclicked = 0;


var kp_up = 0;
var kp_left = 0;
var kp_right = 0;


//
//mouse initialization
//
function initMouse(canvas) {
	canvas.addEventListener("mousemove", function(e) {
		mousex = e.pageX - canvas.offsetLeft;
		mousey = e.pageY - canvas.offsetTop;

		if(!sounddata.background.playing) {
			sounddata.background.play();
			sounddata.background.playing = true;
		}
	}, false);
	
	canvas.addEventListener("mousedown", function(e) {
		mousedown = 1;
	}, false);
	
	canvas.addEventListener("mouseup", function(e) {
		mousedown = 0;
	}, false);
	
	canvas.addEventListener("click", function(e) {
		var ab = audiobutton;
		var mb = musicbutton;
		if(mousex > ab.loc[0] && mousex < ab.loc[0] + ab.size && mousey > ab.loc[1] && mousey < ab.loc[1] + ab.size) {
			audiobutton.on = !audiobutton.on;
		}
		else if(mousex > mb.loc[0] && mousex < mb.loc[0] + ab.size && mousey > mb.loc[1] && mousey < mb.loc[1] + ab.size) {
			musicbutton.on = !musicbutton.on;
		}
		else {
			mouseclicked += 1;
		}

		if(!sounddata.background.playing) {
			sounddata.background.play();
			sounddata.background.playing = true;
		}
	}, false);
}


//
//keyboard initialization
//
function initKeyboard() {

	document.addEventListener("keydown", function(event) {
		if(event.keyCode == 38 || event.keyCode == 87) {
			kp_up = 1;
        }
        if(event.keyCode == 37 || event.keyCode == 65) {
			kp_left = 1;
        }
        if(event.keyCode == 39 || event.keyCode == 68) {
			kp_right = 1;
		}

		if(event.keyCode == 50) {
			loadlevel(mapnum + 1);
		}
		if(event.keyCode == 49) {
			loadlevel(mapnum - 1);
		}
        
	});
	document.addEventListener("keyup", function(event) {
		if(event.keyCode == 38 || event.keyCode == 87) {
			kp_up = 0;
        }
        if(event.keyCode == 37 || event.keyCode == 65) {
			kp_left = 0;
        }
        if(event.keyCode == 39 || event.keyCode == 68) {
			kp_right = 0;
		}
    });
}


//
//get mouse data
//
function getMouse() {
	mdata = {x:mousex, y:mousey, down:mousedown}
	return mdata;
}
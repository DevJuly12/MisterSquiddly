//main.js

var requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();


var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 768;
canvas.height = 640;

var gamestate = "start";

var lastTime;
function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    if(gamestate == "play") {
        update(dt);
        render(dt);
    }
    else if(gamestate == "start") {
        updatestart(dt);
        //renderstart(dt);
    }

    if(musicbutton.on)
        sounddata.background.sound.muted = false;
    else
        sounddata.background.sound.muted = true;
    
    if(audiobutton.on) {
        sounddata.swim.sound.muted = false;
        sounddata.pickup.sound.muted = false;
    }
    else {
        sounddata.swim.sound.muted = true;
        sounddata.pickup.sound.muted = true;
    }

    lastTime = now;
    requestAnimFrame(main);
}


window.onload = function() {
    document.getElementById("canvas_container").appendChild(canvas);
    load();
    lastTime = Date.now();
	main();
};
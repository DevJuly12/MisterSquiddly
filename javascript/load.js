//load.js

var imgdata = {};
var playerdata = {};
var sounddata = {};
var audiobutton = {};
var musicbutton = {};

function load() {
    imgdata.player = [new Image(), new Image(), new Image()];
    imgdata.player[0].src = "images/playerBlue_swim0.png";
    imgdata.player[1].src = "images/playerBlue_swim1.png";
    //imgdata.player[2].src = "images/playerBlue_right.png";
    imgdata.player[0].style.height = "50%";

    imgdata.wife = new Image();
    imgdata.wife.src = "images/playerBlue_wife.png";

    imgdata.portrait = new Image();
    imgdata.portrait.src = "images/playerBlue_portrait1.png";

    imgdata.background = new Image();
    imgdata.background.src = "images/background_0.png";

    imgdata.startscreen = new Image();
    imgdata.startscreen.src = "images/startscreen_0.png";

    imgdata.audio = [new Image(), new Image()];
    imgdata.audio[0].src = "images/audioOff.png";
    imgdata.audio[1].src = "images/audioOn.png";
    audiobutton.loc = [632, 20];
    audiobutton.on = true;
    audiobutton.size = 48;

    imgdata.music = [new Image(), new Image()];
    imgdata.music[0].src = "images/musicOff.png";
    imgdata.music[1].src = "images/musicOn.png";
    musicbutton.loc = [680, 20];
    musicbutton.on = true;
    
    imgdata.tiles = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
    //imgdata.tiles[0].src = "images/tileGreen_0.png";
    imgdata.tiles[1].src = "images/tileGreen_1.png";
    imgdata.tiles[2].src = "images/tileGreen_2.png";
    imgdata.tiles[3].src = "images/tileGreen_3.png";
    imgdata.tiles[4].src = "images/tileGreen_4.png";
    imgdata.tiles[5].src = "images/tileGreen_5.png";
    imgdata.tiles[6].src = "images/tileGreen_6.png";
    imgdata.tiles[7].src = "images/tileGreen_7.png";
    imgdata.tiles[8].src = "images/tileSpike_1.png";

    imgdata.star = new Image();
    imgdata.star.src = "images/yellowCrystal.png";

    imgdata.enemspike = new Image();
    imgdata.enemspike.src = "images/enemyFloating_1.png";
    imgdata.enemfish = [new Image(), new Image()];
    imgdata.enemfish[0].src = "images/enemySwimming_1.png";
    imgdata.enemfish[1].src = "images/enemySwimming_2.png";

    sounddata.background = new Sound("images/song2_soft2.wav", true);
    sounddata.background.loop = true;
    sounddata.background.playing = false;
    //sounddata.background.play();

    sounddata.pickup = new Sound("images/pickup3.wav");
    sounddata.swim = new Sound("images/swim4x.wav", true);
    sounddata.swim.loop = true;
    sounddata.swim.playing = false;


    var loc = playerstart["map" + (mapnum) + "start"];
    playerdata.x = loc[0];
    playerdata.y = loc[1];
    playerdata.vx = 0;
    playerdata.vy = 0;
    playerdata.rot = 0;
    playerdata.anim = 0;
    playerdata.score = 0;
    playerdata.energy = 100;

    initKeyboard();
    initMouse(canvas);
    initTextBox(ctx);
}


function Sound(src, loop=false) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    if(loop)
        this.sound.setAttribute("loop", "loop");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = 0;
    }
}
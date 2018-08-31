//render.js

var maprender = "";
var fpsavg = 60;
var fps = 60;
var fpstoken = 0;

var starcycle = 0;

var textboxdata = null;

function render(dt) {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	//draw map
	//if(maprender != "") {
	//	ctx.drawImage(maprender, 0, 0);
	//}
	//else {
	//	var mapcanvas = document.createElement("canvas");
	//	var mapctx = mapcanvas.getContext("2d");
	//	mapcanvas.width = canvas.width;
	//	mapcanvas.height = canvas.height;

		ctx.drawImage(imgdata.background, 0, 0);
		for(var col=0; col<cmap.length; col++) {
			for(var row=0; row<cmap[col].length; row++) {
				var tiletype = cmap[col][row];
				
				if(tiletype == 8) {
					var yoffset = Math.sin(starcycle*4 + row*2)/2;
					ctx.drawImage(imgdata.tiles[tiletype], row*maptilesize, col*maptilesize + yoffset);
				}
				else if(tiletype > 0) {
					ctx.drawImage(imgdata.tiles[tiletype], row*maptilesize, col*maptilesize);
				}
			}
		}
		
	//	maprender = mapcanvas;//ctx.getImageData(0, 0, canvas.width, canvas.height);
	//}


	//draw audio buttons
	if(audiobutton.on)
		ctx.drawImage(imgdata.audio[1], audiobutton.loc[0], audiobutton.loc[1], 32, 32);
	else
		ctx.drawImage(imgdata.audio[0], audiobutton.loc[0], audiobutton.loc[1], 32, 32);
	if(musicbutton.on)
		ctx.drawImage(imgdata.music[1], musicbutton.loc[0], musicbutton.loc[1], 32, 32);
	else
		ctx.drawImage(imgdata.music[0], musicbutton.loc[0], musicbutton.loc[1], 32, 32);


	//draw stars (pickup)
	starcycle += dt;
	if(starcycle > 3.14) {
		starcycle = 0;
	}
	for(var col=0; col<cmap.length; col++) {
		for(var row=0; row<cmap[col].length; row++) {
			var tiletype = cmap[col][row];
			if(tiletype == -1) {
				var yoffset = Math.sin(starcycle*6 + col*row*2);
				ctx.drawImage(imgdata.star, row*maptilesize + 10 , col*maptilesize + 10 + yoffset);
			}
		}
	}


	//draw enemies
	var enems = enemies["map" + mapnum]
	for(var i = 0; i < enems.length; i++) {
		var en = enems[i];
		
		if(en[0] == SPIKE) {
			var yoffset = Math.sin(starcycle*6 + en[1]/16);
			var img = imgdata.enemspike;
			ctx.drawImage(img, en[1]-img.width/2, en[2]-img.height/2 + yoffset);
		}
		else if(en[0] == FISH) {
			var img = imgdata.enemfish[0];
			if(Math.sin(starcycle*24) > 0) {
				img = imgdata.enemfish[1];
			}
			var yoffset = Math.sin(starcycle*6 + en[1]/16);
			var cycle = en[3];
			var xoffset = 0;//Math.sin(cycle/5)*30;
			ctx.save();
			ctx.translate(en[1] + xoffset, en[2] + yoffset);
			if(en[4] == -1)
				ctx.rotate(3.14);
			ctx.drawImage(img, -img.width/2, -img.height/2);
			ctx.restore();
		}
	}


	//draw npcs
	var nlist = npcs["map" + mapnum];
	if(nlist) {
		for(var i = 0; i < nlist.length; i++) {
			var n = nlist[i];
			var yoffset = Math.sin(starcycle*6 + n[1]/16);
			
			if(n[0] == KID) {
				var img = imgdata.player[1];
				ctx.save();
				ctx.translate(n[1], n[2] + yoffset);
				ctx.scale(-1, 1);
				ctx.drawImage(img, 0, 0, img.width/1.5, img.height/1.5);
				ctx.restore();
			}
			else if(n[0] == WIFE) {
				var img = imgdata.wife;
				ctx.drawImage(img, n[1], n[2] + yoffset);
			}
		}
	}


	//draw player
	pimg = imgdata.player[0];
	if(kp_up)
		playerdata.anim += dt*(playerdata.energy+50)/150;
	if(playerdata.anim > 0.1) {
		pimg = imgdata.player[1];
	}
	if(playerdata.anim > 0.2) {
		pimg = imgdata.player[0];
		playerdata.anim = 0;
	}
	ctx.save();
	ctx.translate(playerdata.x, playerdata.y);
	ctx.rotate(playerdata.rot);
	ctx.drawImage(pimg, -pimg.width/2, -pimg.height/2);
	ctx.restore();

	//draw energy bar
	//ctx.strokeStyle = "rgba(64, 128, 196, 0.6)";
	ctx.fillStyle = "white";
	if(mapnum != 1) {
		var p = playerdata
		var ebar = p.energy + 2;
		//ctx.fillRect(p.x - ebar/4, p.y + 20, ebar/2, 4);

		ctx.lineWidth = 5;
		ctx.strokeStyle = "rgba(0,0,0,0.4)";
		ctx.beginPath();
		ctx.arc(p.x, p.y-6, 32, Math.PI/2 - 112/180, Math.PI/2 + 112/180);
		ctx.stroke();

		ctx.lineWidth = 3;
		ctx.strokeStyle = "white";
		ctx.beginPath();
		ctx.arc(p.x, p.y-6, 32, Math.PI/2 - ebar/180, Math.PI/2 + ebar/180);
		ctx.stroke();
	}


	//draw textbox
	if(textboxdata) {
		drawTextBox(ctx, 20, canvas.height-tboxheight-20, textboxdata[3]);
	}


	//draw score
	ctx.fillStyle = "white";
	ctx.font = "18px Arial"
	ctx.fillText("Score: " + playerdata.score, 128, 24);


	//draw death filter
	if(deathtimer > 0) {
		var alpha = 0.5*deathtimer;
		ctx.fillStyle = "rgba(96, 0, 0, " + alpha + ")";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		deathtimer -= dt;
	}

	//draw debug data
	ctx.fillStyle = "white";
	//ctx.fillText("mx: " + mousex + " my: " + mousey, mousex, mousey);
	//ctx.fillText("playerx: " + Math.round(playerdata.x) + " playery: " + Math.round(playerdata.y), 20, 20);
	//ctx.fillText("angle: " + Math.round(playerdata.rot*100)/100.0, 20, 30);
	fpstoken++;
	if(fpstoken%2 == 0)
		fpsavg = Math.round(((1.0/dt*10.0)/10.0 + fpsavg)/2.0);
	if(fpstoken%30 == 0)
		fps = fpsavg;
	//ctx.fillText("fps: " + fps, 20, 40);
	//ctx.fillText("energy: " + (40 + Math.log(playerdata.energy/10+1)*40), 12, 48);
	ctx.fillText("Level " + mapnum, 12, 24);
	//ctx.fillText("debug: " + debugcollision, 20, 50);

	ctx.strokeStyle = "white";
	//ctx.strokeRect(32, 32, 702, 576);

	//ctx.beginPath();
	//ctx.moveTo(0,0);
	//ctx.lineTo(playerdata.x,playerdata.y);
	//ctx.stroke();

	ctx.strokeStyle = "red";
	//ctx.strokeRect(playerdata.x-9, playerdata.y-10, 18, 20);
	//ctx.strokeRect(debuginfo[1]*maptilesize, debuginfo[0]*maptilesize, maptilesize, maptilesize);
	
	//ctx.fillText("playerx: " + Math.floor(playerdata.x/64) + " playery: " + Math.floor(playerdata.y/64), Math.floor(playerdata.x/64)*64, Math.floor(playerdata.y/64)*64);
	//ctx.strokeRect(Math.floor(playerdata.x/64)*64, Math.floor(playerdata.y/64)*64, 1, 1);
	//ctx.strokeRect(playerdata.x, playerdata.y, 1, 1);

}
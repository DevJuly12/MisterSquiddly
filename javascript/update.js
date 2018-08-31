//update.js

var debugcollision = false;
var debuginfo = [0,0];
var deathtimer = 0;

function update(dt) {
    if(dt > 0.2) {
        dt = 0.2;
    }

    updateenemies(dt);

    var p = playerdata;
    var gravity = 60;
    var playerspeed = (40 + Math.log(p.energy/10+1)*40);

    if(mapnum == 1)
        p.energy = 100;

    if(kp_left) {
        p.rot -= 3.0*dt;
    }
    if(kp_right) {
        p.rot += 3.0*dt;
    }
    if(kp_up) {
        p.energy -= 24*dt;
        if(p.energy < 0)
            p.energy = 0;
        
        var ax = Math.cos(p.rot - 1.5708);
        var ay = Math.sin(p.rot - 1.5708);
        
        p.vx += ax*playerspeed*dt;
        p.vy += ay*playerspeed*dt;

        sounddata.swim.sound.playbackRate = (p.energy+201)/300;
        //console.log((p.energy+100)/201);
        if(!sounddata.swim.playing) {
            sounddata.swim.play();
            sounddata.swim.playing = true;
        }
    }
    else {
        p.energy += 12*dt*120/(p.energy + 10);
        if(p.energy > 100)
            p.energy = 100;
        if(sounddata.swim.playing) {
            sounddata.swim.stop();
            sounddata.swim.playing = false;
        }
    }
    p.vy += gravity*dt;
    p.vy *= 0.995;
    p.vx *= 0.995;

    //enforce max velocity
    if(p.vx*p.vx + p.vy*p.vy > 120*120) {
        var vangle = Math.atan2(p.vy, p.vx);
        p.vx = Math.cos(vangle)*120;
        p.vy = Math.sin(vangle)*120;
    }
    p.x += p.vx*dt;
    p.y += p.vy*dt;

    
    //check enemy collision
    var enems = enemies["map" + mapnum]
    for(var i = 0; i < enems.length; i++) {
        var en = enems[i];
        if(Math.abs(p.x - en[1]) < 20 && Math.abs(p.y - en[2]) < 20) {
            playerdeath();
            return;
        }
    }

    //check player collision
    var playerbounds = [[p.x-9, p.y-10], [p.x+9, p.y-10], [p.x+9, p.y+10], [p.x-9, p.y+10]];    //four collision points
    var collision = [0, 0, 0, 0];
    for(var i=0; i<4; i++) {
        var gridx = Math.floor(playerbounds[i][1]/maptilesize);
        var gridy = Math.floor(playerbounds[i][0]/maptilesize);

        //check map collision
        if(gridx >= 0 && gridy >= 0 && gridx < cmap.length && gridy < cmap[gridx].length && cmap[gridx][gridy] != 0) {
            if(cmap[gridx][gridy] == -1) {
                //star collision
                cmap[gridx][gridy] = 0;
                playerdata.score += 100;
                playerdata.energy = 100;
                sounddata.pickup.stop();
                sounddata.pickup.play();
            }
            else if(cmap[gridx][gridy] == 8) {
                //spike collision
                var spikeloc = [gridy*32 + 16, gridx*32 + 16];
                if(Math.abs(p.x - spikeloc[0]) < 20 && Math.abs(p.y - spikeloc[1] < 20)) {
                    playerdeath();
                    return;
                }
            }
            else {
                collision[i] = 1;
                debuginfo = [gridx, gridy];
                //p.x -= p.vx*dt;
                //p.y -= p.vy*dt;
            }
        }
    }

    //calculate bounce
    if(collision[0] || collision[1] || collision[2] || collision[3]) {
        p.x -= p.vx*dt;
        p.y -= p.vy*dt;
        var collsum = collision.reduce(function(a, b) { return a + b; }, 0);
        if(collsum == 1) {
            var vvector = Math.sqrt(p.vx*p.vx + p.vy*p.vy)*0.5;
            var gridloc = [debuginfo[0] + maptilesize/2, debuginfo[1] + maptilesize/2];
            //if(Math.abs(p.x - gridloc[0]) > 32 && Math.abs(p.y - gridloc[1] > 32)) {
            //    p.x += p.vx*dt;
            //    p.y += p.vy*dt;
            //}
            if(collision[0]) {
                //p.vx = 0.95*vvector;
                //p.vy = 0.95*vvector;
                //console.log("tr");
                if(p.vx > 0) {
                    p.x += p.vx*dt;
                    p.vx = p.vx*0.95;
                    p.vy = -p.vy*0.5;
                }
                else if(p.vy > 0) {
                    p.y += p.vy*dt;
                    p.vx = -p.vx*0.5;
                    p.vy = p.vy*0.95;
                }
                else {
                    p.vx *= -0.5;
                    p.vy *= -0.5;
                }
            }
            else if(collision[1]) {
                if(p.vx < 0) {
                    p.x += p.vx*dt;
                    p.vx = p.vx*0.95;
                    p.vy = -p.vy*0.5;
                }
                else if(p.vy > 0) {
                    p.y += p.vy*dt;
                    p.vx = -p.vx*0.5;
                    p.vy = p.vy*0.95;
                }
                else {
                    p.vx *= -0.5;
                    p.vy *= -0.5;
                }
            }
            else if(collision[2]) {
                if(p.vx < 0) {
                    p.x += p.vx*dt;
                    p.vx = p.vx*0.95;
                    p.vy = -p.vy*0.5;
                }
                else if(p.vy < 0) {
                    p.y += p.vy*dt;
                    p.vx = -p.vx*0.5;
                    p.vy = p.vy*0.95;
                }
                else {
                    p.vx *= -0.5;
                    p.vy *= -0.5;
                }
                //console.log("bl");
            }
            else if(collision[3]) {
                if(p.vx > 0) {
                    p.x += p.vx*dt;
                    p.vx = p.vx*0.95;
                    p.vy = -p.vy*0.5;
                }
                else if(p.vy < 0) {
                    p.y += p.vy*dt;
                    p.vx = -p.vx*0.5;
                    p.vy = p.vy*0.95;
                }
                else {
                    p.vx *= -0.5;
                    p.vy *= -0.5;
                }
                //console.log("br");
            }
            //p.vx *= -0.95;
            //p.vy *= -0.95;
        }
        else if(collsum == 2) {
            if((collision[0] && collision[1]) || (collision[2] && collision[3])) {
                p.x += p.vx*dt;
                p.vx = p.vx*0.95;
                p.vy = -p.vy*0.5;
            }
            else {
                p.y += p.vy*dt;
                p.vx = -p.vx*0.5;
                p.vy = p.vy*0.95;
            }
        }
        else {
            p.vx *= -0.95;
            p.vy *= -0.95;
        }
    }

    //check for level exit
    if(p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
        loadlevel(mapnum + 1);
    }

    //check for text box trigger zone
    var tzone = texttrigger["map" + (mapnum)];
    if (tzone && Math.abs(p.x - tzone[0]) < tzone[2] && Math.abs(p.y - tzone[1]) < tzone[2]) {
        textboxdata = tzone;
    }
    else {
        textboxdata = null;
    }
}



function loadlevel(newmapnum) {
    var p = playerdata;
    p.vx = 0;
    p.vy = 0;
    var loc = playerstart["map" + (newmapnum) + "start"];
    p.x = loc[0];
    p.y = loc[1];
    p.energy = 100;

    if(newmapnum == 13 && p.score > 2000) {
        texttrigger["map13"][3] = "  Welcome home, sweet toots! \n You brought us enough food for a feast!"
    }

    cmap = maps["map" + (newmapnum)];
    mapnum = newmapnum;
}



function updateenemies(dt) {
    for(var i = 0; i < enemies["map" + (mapnum)].length; i++) {
        var e = enemies["map" + (mapnum)][i];
        if(e[0] == FISH) {
            var loc = [e[1],e[2]];
            e[3] = e[3] + 2*dt;
            var offset = Math.sin(e[3])/2;
            if(offset < 0)
                e[4] = -1;
            else
                e[4] = 1;
            e[1] = loc[0] + offset*140*dt;
        }
    }
}



function playerdeath() {
    var p = playerdata;
    p.vx = 0;
    p.vy = 0;
    var loc = playerstart["map" + (mapnum) + "start"];
    p.x = loc[0];
    p.y = loc[1];
    p.energy = 100;
    p.score -= 40;
    deathtimer = 1.0;
}



function updatestart(dt) {
    if(mouseclicked > 0) {
        gamestate = "play";

        audiobutton.size = 32;
        audiobutton.loc = [672, 0];
        musicbutton.loc = [704, 0];
    }

    ctx.drawImage(imgdata.startscreen, 0, 0);

    ctx.fillStyle = "rgba(96, 96, 96, 0.4)";
    ctx.fillRect(184, 460, 400, 60);
    ctx.fillStyle = "white";
	ctx.font = "24px Arial"
    ctx.fillText("Click to Play", 316, 500);
    
    if(audiobutton.on)
		ctx.drawImage(imgdata.audio[1], audiobutton.loc[0], audiobutton.loc[1], 48, 48);
	else
		ctx.drawImage(imgdata.audio[0], audiobutton.loc[0], audiobutton.loc[1], 48, 48);
	if(musicbutton.on)
		ctx.drawImage(imgdata.music[1], musicbutton.loc[0], musicbutton.loc[1], 48, 48);
	else
		ctx.drawImage(imgdata.music[0], musicbutton.loc[0], musicbutton.loc[1], 48, 48);
}
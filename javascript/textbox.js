//textbox.js

var textcanvas = document.createElement("canvas");
var tboxwidth = 600;
var tboxheight = 140;

function initTextBox(context) {
    textcanvas = document.createElement("canvas");
    textcanvas.width = tboxwidth;
    textcanvas.height = tboxheight;
    textctx = textcanvas.getContext("2d");

    textctx.fillStyle = "rgba(64, 64, 64, 0.6)";
    textctx.fillRect(0, 0, tboxwidth, tboxheight);

    context.font = "bold 11pt Arial";
//    context.fillStyle = "#f8f8f8";
//    context.strokeStyle = "#f8f8f8";
}

function drawTextBox(context, x, y, text) {
    context.font = "14pt Arial";
    var words = text.split(" ");
    var line = "";
    var ty = y + 24;

    //draw bounding box
    context.drawImage(textcanvas, x, y);

    //draw portrait
    context.drawImage(imgdata.portrait, x + 10, y + 10);

    //draw text
    context.strokeStyle = "#f8f8f8";
    context.fillStyle = "#f8f8f8";
    for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + " ";
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if(testWidth > tboxwidth-20 || words[n] == "\n") {
            context.fillText(line, x + 80, ty);
            //context.strokeText(line, x + 10, ty);
            line = words[n] + " ";
            ty += 24;
        }
        else {
            line = testLine;
        }
    }
    context.fillText(line, x + 80, ty);
    //context.strokeText(line, x + 10, ty);

    //draw dismiss prompt
    //context.font = "8pt Arial";
    //context.fillText("press space...", x + 140, y + 80);
}
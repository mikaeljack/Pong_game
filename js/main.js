
window.onload = oppstart;

p1y = p2y = 60;
pt = 15;
ph = 100;
bx = by = 50;
xv = yv = 4;
bd = 6;
score1 = score2 = 0;
ais = 4;
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

function oppstart() {
    var c = document.getElementById("Canvas");
    var cc = c.getContext("2d");
    setInterval(update, 1000 / 30);
    c.addEventListener("mousemove", function (e) {
        p1y = e.clientY-ph/2
    });
}

function reset() {
    bx = c.width / 2;
    by = c.height / 2;
    xv = -xv;
    yv = 3;
}

function update() {
    bx += xv;
    by += yv;
    if (by < 0 && yv < 0) {
        yv = -yv;
    }
    if (by > c.height && yv > 0) {
        yv = -yv;
    }
    if (bx < 0) {
        if (by > p1y && by < p1y + ph) {
            xv = -xv;
            dy = by - (p1y + ph / 2);
            yv = dy * 0.3;
        }
        else {
            score2++;
            reset();
        }
    }

    if (bx > c.width) {
        if (by > p2y && by < p2y + ph) {
            xv = -xv;
            dy = by - (p2y + ph / 2);
            yv = dy * 0.3;
        }
        else {
            score1++;
            reset();
        }
    }

    if (p2y + ph / 2 < by) {
        p2y += ais;
    }
    else {
        p2y -= ais;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c.width, c.height)
    ctx.fillStyle = "white";
    ctx.fillRect(0, p1y, pt, ph);
    ctx.fillRect(c.width - pt, p2y, pt, ph);
    ctx.fillRect(bx - bd / 2, by - bd / 2, bd, bd)
    ctx.fillText(score1, 100, 100);
    ctx.fillText(score2, c.width-100, 100)
}


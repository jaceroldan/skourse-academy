var canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(50, 25);
    ctx.lineTo(100, 25);
    ctx.lineTo(125, 40);
    ctx.lineTo(25, 40);
    ctx.fill();
}


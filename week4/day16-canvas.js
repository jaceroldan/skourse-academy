const canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(0, 0, 200, 0.5)';
    ctx.strokeRect(30, 30, 50, 50);

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.strokeRect(10, 10, 50, 50);
    
}


var arc = document.getElementById('arc');
var ctx = arc.getContext('2d');

function drawPieSlice(
  ctx,
  centerX,
  centerY,
  radius,
  startAngle,
  endAngle,
  color
) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
}

drawPieSlice(ctx, 150, 0, 150, 0, Math.PI / 2 + Math.PI / 4, '#ff0000');

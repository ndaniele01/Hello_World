var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, yf, xi;

for(l=0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("red", 0, yi, xf, 300);
console.log("lineas" + l);
}
for(l=0 ; l < lineas; l++)
{
  xi = 10 * l;
  yf = 10 * (l + 1);
dibujarLinea("blue", xi, 1, 300, yf);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

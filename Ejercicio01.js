<canvas id='tablero' width=500 height=500></canvas>
<script>
	function triangulo(cd,colorBorde, colorRelleno, grosor){
	ctx.beginPath();
	ctx.strokeStyle = colorBorde;
	ctx.fillStyle = colorRelleno;
	ctx.lineWidth = grosor;
	ctx.moveTo(cd[0],cd[1]);
	ctx.lineTo(cd[2],cd[3]);
	ctx.lineTo(cd[4],cd[5]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
	}
	var c= document.getElementById('tablero')
	var ctx=c.getContext('2d')
	
	var arr1=[198,21,296,176,97,177]
	//Se maneja la intensidad de rojo, verde y azul por aparte. Esto con valores enteros de 0 a 255. Hay poca intensidad de rojo, media de verde y alta de azul.
	triangulo(arr1, 'rgba(50,30,100)', 'rgba(68,114,196)');//triángulo azul
	
	//Se refiere a partir de un nombre preestablecido, sin necesidad de haber declarado manualmente los valores de rgb a partir de una variable o arreglo. Esta forma es un poco limitada, ya que no se puede graduar la intensidad de cada color a voluntad.
	triangulo([3, 323, 78, 390, 321, 51], 'gray', 'orange');//triángulo naranja
	
	//Se refieren los colores a partir del manejo de los colores primarios basados en el modelo rgb desde dos valores hexadecimales seguidos. El color del borde tiene mayor intensidad de rojo, mientras que el verde y el azul tienen la misma intensidad.
	triangulo([300, 416, 395, 380, 197, 10], '#FFCCCC', '#CC0066');//triángulo rosado
</script>
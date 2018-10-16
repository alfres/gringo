Crafty.defineScene("portada", function() {
Crafty("fondo, vaquero").each(function(i) { this.destroy() });


  
	
	for (var i = 0; i < 4; i++){ Crafty.e('fondo').attr({x:(0 + (400 * i)), y:0, z:(i + 1)}) }	


  
  var player = Crafty.e("vaquero")
 
  Crafty("barra").text('press ENTER key to start')
resetall()
  Crafty.bind('KeyDown', function(event) {
	  if(event.key === 13 || event.key === Crafty.keys.ENTER){plaipause()}
	  else if (event.key === Crafty.keys.DOWN_ARROW && started == true && paused == false) { sitting()  } 
	  
	  })
  
  Crafty.bind('KeyUp', function(e) {
	if (e.key === Crafty.keys.DOWN_ARROW && started == true && paused == false) { standing() }	
	  
  })
  
});
 

Crafty.defineScene("gameover", function() {
	started = false; paused = false; vidas = 9; balas = 6; nivel = 1;
Crafty.unbind('KeyDown') 
Crafty.unbind('KeyUp')
//Crafty.e("2D, DOM, Color").attr({x:0, y:0, z: 10000, w:1000, h:200}).color("#BC2700")	
Crafty.e("2D, DOM, Image").attr({w: 1200, h: 200}).image("img/woodTexture.png", "repeat")
Crafty.e("2D, DOM, ic").attr({x:230, y:50, z: 10001, w:580, h:100})	
.uniqueBind('KeyDown', function(event){
	if(event.key === 8 || event.key === Crafty.keys.BACKSPACE){
		resetall()
		Crafty.scene("portada")
		}
		})	
Crafty("barra").text('press BACKSPACE key to replay')	
})

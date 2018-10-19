var started = false, paused = false, vidas = 3, balas = 6, nivel = 1, viento = false, counter = 0

Game = {
	
 load:function(){
 

  Crafty.init(1000, 400, document.getElementById("marco") );
  
 
  Crafty.sprite("img/desert_BG.png", {desert:[0,0,800,400]})
  Crafty.sprite("img/rolling-bush.png", {rollingbush:[0,0,28,24]})
  Crafty.sprite("img/axe2.png", {axe:[0,0,80,162]});
  Crafty.sprite("img/arrow.png", {arrow:[0,0,67,13]});
  Crafty.sprite("img/plumas.png", {plumas:[0,0,61,45]});
  Crafty.sprite("img/plumas2.png", {plumas2:[0,0,61,45]});
  Crafty.sprite("img/plumas3.png", {plumas3:[0,0,61,45]});
  Crafty.sprite("img/plumas4.png", {plumas4:[0,0,61,25]});
  Crafty.sprite("img/caramelo1.png", {caramelo:[0,0,231,219]});
 Crafty.sprite("img/ic.png", {ic:[0,0,215,37]});
 Crafty.sprite("img/lanza.png", {spear:[0,0,120,48]});
  Crafty.sprite("img/burger.png", {burger:[0,0,34,31]});
  Crafty.sprite("img/dollars.png", {dollars:[0,0,32,21]});
  Crafty.sprite("img/wind.png", {wind:[0,0,34,34]});
  Crafty.sprite("img/craven.png", {craven:[0,0,92,71]});
Crafty.sprite("img/arrow_right.png", {tucson:[0,0,100,50]});
Crafty.sprite("img/button.png", {boton:[0,0,115,60]});

  
 	 Crafty.e("2D, DOM, Color, platform, Persist")
  .color("coral")
  .attr({x: 0, y: 201, w: 1200, h: 5 })
  
   Crafty.e("2D, DOM, Color, platform2, Persist")
  .color("coral")
  .attr({x: 0, y: 202, w: 1200, h: 5 })
  
   Crafty.e("2D, DOM, Color, Text, barra, Persist")
  .color("coral")
  .attr({x: 0, y: 200, w: 1050, h: 50})
  .textAlign('center').textFont({ size: '24px' })
 
   Crafty.e("2D, DOM, Color, camino, Persist")
  //.color("grey")
  .attr({x: 0, y: 170, w: 1000, h: 5 , z: 4000000}) 
  
  Crafty.e("2D, DOM, tucson, Persist")
  //.color("grey")
  .attr({x: 840, y: 210, w: 100, h: 50 , z: 40000000})  
  
   Crafty.e("2D, DOM, Text, tuc, Persist")
  //.color("grey")
  .attr({x: 840, y: 222, w: 100, h: 50 , z: 40000001}) 
.textAlign('center').textFont({ size: '14px' }).text('tucson  ' + Math.floor(100 - (counter / 4)))

 if (navigator.appVersion.search("Android") != -1) {
loadbuton()
Crafty("barra").each(function(i) { this.visible = false })
}

  
 
   var game_assets = {
	       "audio": {
		"reload": "sounds/reload.mp3",	   
		"squawk": "sounds/squawk.mp3",	   
	    "torsound": "sounds/windsound.mp3",
		"Drink": "sounds/Drink.mp3",	   
		"drums": "sounds/Wardrums.mp3",	   
	    "woosh3": "sounds/woosh3.mp3",
        "woosh": "sounds/woosh.mp3",
        "gun5": "sounds/gun5.mp3"
    },
	
  "sprites": {
    "img/hero_spritesheet.png": {
      tile: 80,
      tileh: 94,
      map: {
        hero_idle: [0, 0],
        hero_walking: [4, 4],
        hero_jumping: [2, 3],
        hero_sitting: [0, 4]
		
      }
    },
	
	
    "img/tornado.png": {
      tile: 170,
      tileh: 96,
      map: {
        tor: [0, 0]
		
      }
    }
	
  }
	
  
 
};
 
Crafty.load(game_assets, function(){Crafty.scene("portada")});

}

}


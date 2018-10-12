var started = false, paused = false, vidas = 3, balas = 6, nivel = 1

Game = {
	
 load:function(){
 

  Crafty.init();
 
  Crafty.sprite("img/desert_BG.png", {desert:[0,0,800,400]})
  Crafty.sprite("img/rolling-bush.png", {rollingbush:[0,0,28,24]})
  Crafty.sprite("img/axe2.png", {axe:[0,0,80,162]});
  Crafty.sprite("img/arrow.png", {arrow:[0,0,67,13]});
  Crafty.sprite("img/plumas.png", {plumas:[0,0,61,45]});
  Crafty.sprite("img/plumas2.png", {plumas2:[0,0,61,45]});
  Crafty.sprite("img/plumas3.png", {plumas3:[0,0,61,45]});
  Crafty.sprite("img/caramelo1.png", {caramelo:[0,0,231,219]});
 Crafty.sprite("img/ic.png", {ic:[0,0,215,37]});
 Crafty.sprite("img/lanza.png", {spear:[0,0,120,48]});
  Crafty.sprite("img/burger.png", {burger:[0,0,34,31]});
  Crafty.sprite("img/dollars.png", {dollars:[0,0,32,21]});


  
 	 Crafty.e("2D, DOM, Color, platform, Persist")
  .color("grey")
  .attr({x: 0, y: 201, w: 1000, h: 5 })
  
   Crafty.e("2D, DOM, Color, platform2, Persist")
  .color("grey")
  .attr({x: 0, y: 202, w: 1000, h: 5 })
  
   Crafty.e("2D, DOM, Color, Text, barra, Persist")
  .color("coral")
  .attr({x: 0, y: 200, w: 1050, h: 50})
  .textAlign('center').textFont({ size: '24px' })
 
   Crafty.e("2D, DOM, Color, camino, Persist")
  //.color("grey")
  .attr({x: 0, y: 170, w: 1000, h: 5 , z: 4000000}) 
  
  
   var game_assets = {
	       "audio": {
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
    }
	
  }
};
 
Crafty.load(game_assets, function(){Crafty.scene("portada")});

}

}


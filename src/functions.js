 function loadbuton(){
 Crafty.multitouch(true);
 Crafty.e("2D, DOM, boton, Touch, Persist")
.attr({x: 430, y: 200, z: 4000000, w: 115, h: 60 }).origin("center")
.attach(Crafty.e("2D, DOM, Text, bot, Persist").attr({x: 430, y: 214, z: 4000001, w: 115, h: 60 }).textAlign('center').textFont({ size: '24px' }).text('start'))
.uniqueBind('TouchOver', function(TouchPoint){
    this.visible = false
	Crafty("bot").each(function(i) { this.visible = false })
	loadarrows()
	plaipause()
	
  })
 } 
 
 
 function loadarrows(){
	 

	 
	 Crafty.e("2D, DOM, tucson, Touch, tucsonAndroid")
.attr({x: 530, y: 260, z: 4000000, w: 60, h: 30 }).origin("center")
.bind('TouchOver', function(TouchPoint){
   var evt = new KeyboardEvent('keydown', {'keyCode':39, 'which':39});
document.dispatchEvent (evt);
  })
.bind('TouchOut', function(TouchPoint){
   var evt = new KeyboardEvent('keyup', {'keyCode':39, 'which':39});
document.dispatchEvent (evt);
  }) 

  	 Crafty.e("2D, DOM, tucson, Touch, tucsonAndroid")
.attr({x: 360, y: 260, z: 4000000, w: 60, h: 30 }).origin("center").flip('X')
.bind('TouchOver', function(TouchPoint){
   var evt = new KeyboardEvent('keydown', {'keyCode':37, 'which':37});
document.dispatchEvent (evt);
  })
.bind('TouchOut', function(TouchPoint){
   var evt = new KeyboardEvent('keyup', {'keyCode':37, 'which':37});
document.dispatchEvent (evt);
  }) 
  
  
  	 Crafty.e("2D, DOM, tucson, Touch, tucsonAndroid")
.attr({x: 445, y: 210, z: 4000000, w: 60, h: 30 }).origin("center")
.bind('TouchOver', function(TouchPoint){
   var evt = new KeyboardEvent('keydown', {'keyCode':38, 'which':38});
document.dispatchEvent (evt);
  })
.bind('TouchOut', function(TouchPoint){
   var evt = new KeyboardEvent('keyup', {'keyCode':38, 'which':38});
document.dispatchEvent (evt);
  }) 
.rotation = -90

  	 Crafty.e("2D, DOM, tucson, Touch, tucsonAndroid")
.attr({x: 445, y: 310, z: 4000000, w: 60, h: 30 }).origin("center")
.bind('TouchOver', function(TouchPoint){
   var evt = new KeyboardEvent('keydown', {'keyCode':40, 'which':40});
document.dispatchEvent (evt);
  })
.bind('TouchOut', function(TouchPoint){
   var evt = new KeyboardEvent('keyup', {'keyCode':40, 'which':40});
document.dispatchEvent (evt);
  }) 
.rotation = 90  
 }



 function getsprite(){
		var walking_hero = Crafty.e('2D, DOM, hero_walking, SpriteAnimation, Motion')
  .attr({
    x: 400,
    y: 89,
	z: 3900
  })
  walking_hero._globalZ = 10
  
  walking_hero.reel("walking", 1000, [
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
  [5, 1]
]);

  walking_hero.reel("sitting", 1200, [
  [1, 4],
  [0, 4],
  [1, 4],
  [1, 4]
]);
return walking_hero
  } 


   function gettor(){
	   Crafty.audio.play("torsound",1,1)
		var t = Crafty.e('2D, DOM, tor, SpriteAnimation, Motion')
  .attr({
    x: -200,
    y: 89,
	z: 4000,
	 w: 100,
	 h: 100
  })
  //t._globalZ = 10
  
  t.reel("walking", 300, [
  [0, 0],
  [0, 1],
  [0, 2]
]);
t.animate("walking", -1)
t.vx = 60
t.bind("UpdateFrame", function() {if(t.x > 1200 ){this.destroy()}})
  }   
   
   
   
   function resetall(){
	  started = false; paused = false; vidas = 9; balas = 16 ; nivel = 1; viento = false; counter = 0
	reloadlifes();reloadmuni();
	Crafty("tuc").text('tucson  ' + Math.floor(100 - (counter / 4)))
   }
   
   function plaipause(){
   if(started == true && paused == false){
   Crafty("barra").text('paused')
   Crafty.pause();
   paused = true
   //Crafty.audio.pause('drums');
   } 
   
   else if (started == false && paused == false){ 
   Crafty('lifes').get().pop().destroy();
   vidas--
   started = true
   Crafty("barra").text('')
   Crafty('hero_walking').animate( "walking", -1)
   Crafty('fondo').each(function(){this.vx = -40})
   //Crafty.audio.play("drums",-1,1)
    //gettor()
   } 
   
   else if (started == true && paused == true){
   Crafty("barra").text('')
  // Crafty.audio.play("drums",-1,1)
   Crafty.pause();
   paused = false
   }
   
   
   } 
   
   
   function reloadlifes(){
	Crafty("lifes").each(function(i) { this.destroy() });
	if(vidas > 5) vidas = 5
    for (var i = 0; i < vidas; i++){
  Crafty.e('2D, DOM, hero_idle, lifes').attr({x:(14 + (25 * i)), y:200, z:10000000, w: 20, h: 23 })
  }	
}

function reloadmuni(){
	Crafty("municion").each(function(i) { this.destroy() });
	 balas = 6
      for (var i = 0; i < balas; i++){
  Crafty.e('2D, DOM, caramelo, municion').attr({x:(200 + (18 * i)), y:205, z:10000000, w: 15, h: 16 })
  }
}
function comer(thi){
	Crafty.audio.play("Drink",1,1)
	thi.destroy()
	if(vidas < 5){
		vidas++
		Crafty.e('2D, DOM, hero_idle, lifes').attr({x:(0 + (25 * (vidas- 1))), y:200, z:10000000, w: 20, h: 23 })
		}
}

function quieto(thi){
	//Crafty.audio.play("Drink",1,1)
	Crafty('vaquero').each(function(i) {this.removeComponent('Twoway')})
	
}

function muerto(thi){
	vidas--
	
	Crafty("barra").text('u r dead')
	if(vidas < 0){
	Crafty.pause()	
	var st1 = setTimeout(function(){Crafty("barra").text(''); clearTimeout(st1); Crafty.pause(); Crafty.scene("gameover")}, 3000);
		
		
	} else {
		Crafty.unbind('KeyUp')
	Crafty.pause()
	 
	
		var st2 = setTimeout(function(){ 
		Crafty("barra").text('')
		clearTimeout(st2);
		 Crafty.pause()
		 Crafty.bind('KeyUp', function(e) {
	if (e.key === Crafty.keys.DOWN_ARROW && started == true && paused == false) { standing() }	
	  
  })
  thi.destroy()
  Crafty('lifes').get().pop().destroy();
		}, 3000);
 


	}
				//thi.vx = 0
		//thi.vy = 0
		
		
}

function sitting() {
     Crafty('hero_walking').animate( "sitting", 1).one('AnimationEnd', function(){
               
				 Crafty('hero_walking').animate( "walking", -1)
		Crafty('vaquero').attr({ y: 116, z: 4000000, w: 18, h: 58 })
		Crafty('fondo').each(function(){this.vx = -40})
		}
	).one('FrameChange', function(){
		
	if(this.getReel().currentFrame == 1){
	if(Crafty('municion').get().length > 0){
//alert(Crafty('hero_walking').x)		
	Crafty.e('caramel').attr({x: (Crafty('hero_walking').x + 55), y: (Crafty('hero_walking').y + 36)})
	Crafty('municion').get().pop().destroy()
	Crafty.audio.play("gun5",1,0.5)
	}
		}
		})
		
		Crafty('vaquero').attr({ y: 134, z: 4000000, w: 18, h: 35 })
		Crafty('fondo').each(function(){this.vx = 0})	
	
}

function standing(){

        Crafty('hero_walking').animate( "walking", -1)
		Crafty('vaquero').attr({ y: 116, z: 4000000, w: 18, h: 58 })
		Crafty('fondo').each(function(){this.vx = -40})	
}


function addindi1(thi){
thi.attach(Crafty.e('indio2')
.attr({x:(thi.x + 300), y:(thi.y + 122)})
.bind("UpdateFrame", function() { 
if (this.x < (Crafty('vaquero').x - 220)){
var h =	Crafty.e("lanza").attr({x: this.x, y: this.y })
h.rotation = 14
	this.unbind("UpdateFrame");
	}
}
)
)
	
}

function addindi1b(thi){
thi.attach(Crafty.e('indio2')
.attr({x:(thi.x + 300), y:(thi.y + 122)})
.bind("UpdateFrame", function() { 
if (this.x < (Crafty('vaquero').x + 230)){
var h =	Crafty.e("lanzab").attr({x: this.x, y: this.y }).gravity("platform")
h.rotation = -14

	this.unbind("UpdateFrame");
	}
}
)
)
	
}



function addindi2(thi){
thi.attach(Crafty.e('indio3')
.attr({x:(thi.x + 37), y:(thi.y + 109)})
.bind("UpdateFrame", function() { 
if (this.x < (Crafty('vaquero').x + 520)){
var h =	Crafty.e("flecha").attr({x: this.x, y: this.y }).gravity("platform")
Crafty("flecha").rotation = 17
Crafty("flecha").vx = -385
Crafty("flecha").vy = -120
Crafty("flecha").gravityConst(200)
	this.unbind("UpdateFrame");
	}
}
)
)
	
}


function addindi2b(thi){
thi.attach(Crafty.e('indio3')
.attr({x:(thi.x + 37), y:(thi.y + 109)})
.bind("UpdateFrame", function() { 
if (this.x < (Crafty('vaquero').x - 180)){
var h =	Crafty.e("lanza").attr({x: (this.x ), y: (this.y ) }).gravity("platform")
h.rotation = 14
h.vx = 385
h.vy = -12
h.gravityConst(200)
	this.unbind("UpdateFrame");
	}
}
)
)
	
}


function addindi3(thi){
thi.attach(Crafty.e('indio3')
.attr({x:(thi.x + 373), y:(thi.y + 107)})
.bind("UpdateFrame", function() { 
if (this.x < (Crafty('vaquero').x - 340)){
var h =	Crafty.e("flechab").attr({x: (this.x +1), y: (this.y -5)}).gravity("platform").rotation = -17
//h.rotation = -17
//h.flip("X")
	this.unbind("UpdateFrame");
	}
}
)
)
	
}


function addindi4(thi){
thi.attach(Crafty.e('indio3')
.attr({x:(thi.x + 121), y:(thi.y + 95)})
.bind("UpdateFrame", function() { 
if (this.x < (Crafty('vaquero').x + 450)){
var h =	Crafty.e("flecha").attr({x: this.x, y: this.y }).gravity("platform")
Crafty("flecha").rotation = 17
	this.unbind("UpdateFrame");
	}
}
)
)
	
}

function addindi5(thi){
thi.attach(Crafty.e('indio')
.attr({x:(thi.x + 130), y:(thi.y + 177)})
.bind("UpdateFrame", function() { 
if (this.x < (Crafty('vaquero').x - 245)){
var h =	Crafty.e("hacha2").attr({x: this.x, y: this.y }).gravity("platform")
Crafty("hacha2").rotation = -30
	this.unbind("UpdateFrame");
	}
}
)
)
	
}


function addindi6(thi){
thi.attach(Crafty.e('indio')
.attr({x:(thi.x + 205), y:(thi.y + 177)})
.bind("UpdateFrame", function() { 
if (this.x < (Crafty('vaquero').x + 453)){
var h =	Crafty.e("hacha").attr({x: this.x, y: this.y }).gravity("platform")
h.rotation = 30
	this.unbind("UpdateFrame");
	}
}
)
)
	
}



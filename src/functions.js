  function getsprite(){
		var walking_hero = Crafty.e('2D, DOM, hero_walking, SpriteAnimation, Motion')
  .attr({
    x: 400,
    y: 89,
	z: 100000
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


   
   
   
   
   function resetall(){
	  started = false; paused = false; vidas = 9; balas = 16 
	reloadlifes();reloadmuni();   
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
  Crafty.e('2D, DOM, hero_idle, lifes').attr({x:(0 + (25 * i)), y:200, z:10000000, w: 20, h: 23 })
  }	
}

function reloadmuni(){
	Crafty("municion").each(function(i) { this.destroy() });
	if(balas > 6) balas = 6
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


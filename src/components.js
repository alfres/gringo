Crafty.c('fondo', {
	init: function( ) {
		this.requires("2D, DOM, desert, Motion");
		this.attr({ w:401, h:200})
		this.bind("UpdateFrame", function() {
   if(this.x < -400){ this.x = 1200
   this._children.forEach(function(i) { i.destroy() })
   counter++
   if(counter > 100){counter = 0; nivel++}
  // Crafty("ciclos").text('ciclos ' + counter)
  // this.detach('indio, indiob,  indio2, indio2b, indio3, indio3b, indio4, bush, macdo')

//if(Crafty.math.randomNumber(0,6) < nivel)addindi1b(this)
//if(Crafty.math.randomNumber(0,6) < nivel)addindi1(this)
//if(Crafty.math.randomNumber(0,6) < nivel)addindi2(this)
//if(Crafty.math.randomNumber(0,6) < nivel)addindi2b(this)
if(Crafty.math.randomNumber(0,6) < nivel)addindi3(this)
if(Crafty.math.randomNumber(0,6) < nivel)addindi4(this)
if(Crafty.math.randomNumber(0,6) < nivel)addindi5(this)
if(Crafty.math.randomNumber(0,6) < nivel)addindi6(this)
//this.attach(Crafty.e('bush').attr({x:(this.x ), y:(this.y + 155)}))
if(Crafty.math.randomNumber(0,4) < nivel)var f =  Crafty.math.randomElementOfArray([addindi1, addindi1b])(this)
if(Crafty.math.randomNumber(0,4) < nivel)var f2 = Crafty.math.randomElementOfArray([addindi2, addindi2b])(this)
//if(nivel == 1){this.attach(Crafty.e('bush').attr({x:(this.x ), y:(this.y + 155)})); nivel = 9}
if(Crafty.math.randomNumber(0,4) < nivel)this.attach(Crafty.e('2D, DOM, craven').attr({x:(this.x -111), y:(this.y + 78), z: 3000, w:18, h:14}))

this.attach(Crafty.e('pasta'))
//addindi1b(this)
//addindi2(this)
//addindi2b(this)
//addindi3(this)
//addindi4(this)
//addindi5(this)
//addindi6(this)
//if(Crafty.math.randomNumber(0,8) < (nivel *2))this.attach(Crafty.e('bush').attr({x:(this.x ), y:(this.y + 155)}))
if(Crafty.math.randomNumber(0,8) < nivel)this.attach(Crafty.e('macdo').attr({x:(this.x + Crafty.math.randomElementOfArray([92, 142, 1, 300])), y:(this.y + Crafty.math.randomElementOfArray([92, 142]))}))
}
   


});
this.vx = 0
 


		}
})

Crafty.c('vaquero', {
	init: function( ) {

  this.requires('2D, DOM, Color, Twoway, Gravity')
  this.twoway(60, 169)
  this.gravity("camino")
  this.attr({x: 430, y: 116, z: 4000000, w: 18, h: 58 })
  this.attach(getsprite())
  this.attach(Crafty.e("boca").attr({x: (this.x + 14), y: (this.y + 12) }))
  //this.color('red')

	}
});

Crafty.c('boca', {
	init: function( ) {

  this.requires('2D, DOM, Color, Collision')
  this.attr({z: 4000000, w: 3, h: 6})
  //this.color('red')
  this.origin("center")
  this.checkHits("boca")
	}
});

Crafty.c('macdo', {
	init: function( ) {
		this.requires('2D, DOM, Motion, Color, Collision')
		//this.color('green')
		this.origin("center")
		this.attr({ z: 5000000, w:2, h:15})
		this.attach(Crafty.e('2D, DOM, burger').origin("center").attr({x:(this.x - 8), y:(this.y ), z: 500000, w:20, h:15}))
		
		this.attr({alreadyTouched: {} })
		this.checkHits("boca")
		this.origin("center")
		this.vx = -150
		this.ax = -50
		this.onHit('boca' , function(hitDatas) {
			//alert()
			if(this.alreadyTouched['vaquero'] !== true){
				this.alreadyTouched['vaquero'] = true;
				Crafty.audio.play("woosh",1,1)
				comer(this)
		
			
			}
			})
	}
});


Crafty.c('pasta', {
	init: function( ) {

  this.requires('2D, DOM, dollars, Collision, Gravity')
  this.attr({x:Crafty.math.randomNumber(350,550), y: 0, z: 4000000, w: 16, h: 11})
  this.gravityConst(120)
  this.gravity("platform2")
  this.origin("center")
  this.onHit('platform' , function(hitDatas) {this.destroy() })
  this.onHit('vaquero' , function(hitDatas) {this.destroy(); reloadmuni(); Crafty.audio.play("reload",1,1) })
	}
});



Crafty.c('bush', {
	init: function( ) {
		Crafty.audio.play("torsound",1,0.4)
		this.requires('2D, DOM, Motion, Color, Collision')
		//this.color('green')
		this.origin("center")
		this.attach(Crafty.e('2D, DOM, rollingbush').origin("center").attr({x:(this.x - 8), y:(this.y - 8), z: 500000, w:10, h:10}))
		this.attr({ z: 50000, w:16, h:16})
		this.attr({alreadyTouched: {} })
		this.bind("UpdateFrame", function() {if(started == true && paused == false)this.rotation--})
		this.origin("center")
		this.vx = -110
		this.onHit('vaquero' , function(hitDatas) {
			if(this.alreadyTouched['vaquero'] !== true){
				this.alreadyTouched['vaquero'] = true;
				Crafty.audio.play("woosh",1,1)
				hitDatas[0].obj.removeComponent('Jumper')
				//hitDatas[0].obj.toggleComponent('Multiway')
				//hitDatas[0].obj.twoway(40, 169)
				
			var rb =	Crafty.e('2D, DOM, rollingbush, Collision')
				.origin("center")
				.attr({x:(this.x - 8), y:(this.y - 6), z: 500000, w:26, h:26})
				.onHit('tor' , function(hitDatas) {
					this._parent.addComponent('Jumper').jumper(169, ['UP_ARROW']);
					//Crafty("vaquero").each(function(i) { this.addComponent('Jumper').jumper(169, ['UP_ARROW']);});
					this._parent.detach(this)
					hitDatas[0].obj.attach(this)
					this.bind("UpdateFrame", function() {if(started == true && paused == false)this.rotation++})
				})
				
				
				
				hitDatas[0].obj.attach(rb)
			this.destroy()
			
			//quieto(this)
			}
			})
	}
});

Crafty.c('indio', {
	init: function( ) {
		this.requires('2D, DOM, plumas');
		this.attr({z: 3800, w:30, h:22})
		
	},
	change: function( ) {
		this.removeComponent('plumas')
		this.addComponent('plumas4')
		this.removeComponent('indio')
		this.addComponent('indiob')
		this.unbind("UpdateFrame");
		this.attr({y: (this.y + 10), w:30, h:12})
		
	}
});

Crafty.c('indio2', {
	init: function( ) {
		this.requires('2D, DOM');
		this.attr({z: 5000, w:20, h:2})
		this.attach(Crafty.e('2D, DOM, plumas2, p2').attr({x:(this.x + 0), y:(this.y ),z: 3800, w:30, h:22}))
		
	},
	change: function( ) {
	
		
		this._children.forEach(function(i) { i.destroy() })
		this.detach()
		this.attach(Crafty.e('2D, DOM, plumas4').attr({x:(this.x + 0), y:(this.y +10),z: 3800, w:30, h:12}))
		this.unbind("UpdateFrame");
		this.removeComponent('indio2')
		this.addComponent('indio2b')
		
	}
});

Crafty.c('indio3', {
	init: function( ) {
		this.requires('2D, DOM');
		this.attr({z: 5000, w:20, h:2})
		this.attach(Crafty.e('2D, DOM, plumas3').attr({x:(this.x + 0), y:(this.y ),z: 3800, w:30, h:22}))
		
	},
	change: function( ) {
		this._children.forEach(function(i) { i.destroy() })
		this.detach()
		this.attach(Crafty.e('2D, DOM, plumas4').attr({x:(this.x + 0), y:(this.y +10),z: 3800, w:30, h:12}))
		this.unbind("UpdateFrame");
		this.removeComponent('indio3')
		this.addComponent('indio3b')
		
	}
});

Crafty.c('hacha', {
	init: function( ) {
		this.requires('2D, DOM, Color, Motion, Gravity, Collision');
		this.attr({z: 3800, w:3, h:3})
		//this.color('green')
		this.vx = -300
		this.vy = -380
		this.origin("center")
		this.attach(Crafty.e('2D, DOM, axe').attr({x:(this.x - 1), y:(this.y - 5 ),z: 3800, w:18, h:27}))
		//this.rotation = 45
		var fgirar = function() {
			if(this.motionDelta().y > 0){
				this.rotation = (this.rotation * -1)
				this.unbind("UpdateFrame", fgirar);
				}
		}
		this.bind("UpdateFrame", fgirar)
		this.attr({alreadyTouched: {} })
		this.onHit('platform' , function(hitDatas) {this.destroy()})
		this.onHit('vaquero' , function(hitDatas) {
		if(this.alreadyTouched['vaquero'] !== true){
			Crafty.audio.play("woosh",1,1)
			Crafty("barra").text('u r dead')
			this.alreadyTouched['vaquero'] = true;
		muerto(this)
		this.antigravity()
			}
		
		
		
		})
	}
});

Crafty.c('hacha2', {
	init: function( ) {
		this.requires('2D, DOM, Color, Motion, Gravity, Collision');
		this.attr({z: 3800, w:3, h:3})
		//this.color('white')
		this.vx = 200
		this.vy = -380
		this.origin("center")
		this.attach(Crafty.e('2D, DOM, axe').attr({x:(this.x + 3), y:(this.y + 1 ),z: 3800, w:18, h:27}).flip("X"))
		//this.rotation = 45
		var fgirar = function() {
			if(this.motionDelta().y > 0){
				this.rotation = (this.rotation * -1)
				this.unbind("UpdateFrame", fgirar);
				}
		}
		this.bind("UpdateFrame", fgirar)
		this.attr({alreadyTouched: {} })
		this.onHit('platform' , function(hitDatas) {this.destroy()})
		this.onHit('vaquero' , function(hitDatas) {
		if(this.alreadyTouched['vaquero'] !== true){
			Crafty.audio.play("woosh",1,1)
			Crafty("barra").text('u r dead')
			this.alreadyTouched['vaquero'] = true;
		muerto(this)
		this.antigravity()
			}
		
		
		
		})
	}
});


Crafty.c('flecha', {
	init: function( ) {
		this.requires('2D, DOM, Color, Motion, Gravity, Collision');
		//this.color('red')
		this.attr({z: 3800, w:3, h:3})
		this.vx = -385
		this.vy = -120
		this.origin("center")
		this.gravityConst(300)
		this.attach(Crafty.e('2D, DOM, arrow').attr({x:(this.x - 3), y:(this.y + 1 ),z: 3800, w:38, h:7}))
		//this.rotation = 45
		var fgirar = function() {
			if(this.motionDelta().y > 0){
				this.rotation = (this.rotation * -1)
				this.unbind("UpdateFrame", fgirar);
				}
		}
		this.bind("UpdateFrame", fgirar)
		this.attr({alreadyTouched: {} })
		this.onHit('platform' , function(hitDatas) {this.destroy()})
		this.onHit('vaquero' , function(hitDatas) {
		if(this.alreadyTouched['vaquero'] !== true){
			Crafty.audio.play("woosh3",1,1)
			Crafty("barra").text('u r dead')
			this.alreadyTouched['vaquero'] = true;
		muerto(this)
		this.antigravity()
			}
		
		
		
		})
	}
	
});


Crafty.c('flechab', {
	init: function( ) {
		this.requires('2D, DOM, Color, Motion, Gravity, Collision');
		//this.color('white')
		this.attr({z: 3800, w:3, h:3})
		this.vx = 365
		this.vy = -120
		this.origin("center")
		this.gravityConst(300)
		this.attach(Crafty.e('2D, DOM, arrow').attr({x:(this.x + 10), y:(this.y - 2 ),z: 3800, w:38, h:7}).flip("X"))
		this.rotation = 45
		var fgirar = function() {
			if(this.motionDelta().y > 0){
				this.rotation = (this.rotation * -1)
				this.unbind("UpdateFrame", fgirar);
				}
		}
		this.bind("UpdateFrame", fgirar)
		this.attr({alreadyTouched: {} })
		this.onHit('platform' , function(hitDatas) {this.destroy()})
		this.onHit('vaquero' , function(hitDatas) {
		if(this.alreadyTouched['vaquero'] !== true){
			Crafty.audio.play("woosh3",1,1)
			Crafty("barra").text('u r dead')
			this.alreadyTouched['vaquero'] = true;
		muerto(this)
		this.antigravity()
			}
		
		
		
		})
	}
	
});


Crafty.c('lanzab', {
	init: function( ) {
		this.requires('2D, DOM, Color, Motion, Gravity, Collision');
		//this.color('red')
		this.attr({z: 3800, w:3, h:3})
		this.vx = -400
		this.vy = 40
		this.origin("center")
		this.gravityConst(100)
		this.attach(Crafty.e('2D, DOM, spear').attr({x:(this.x - 1), y:(this.y - 13 ),z: 3800, w:48, h:18}).origin("middle left"))
		//this.rotation = 45
	
		this.attr({alreadyTouched: {} })
		this.onHit('platform' , function(hitDatas) {this.destroy()})
		this.onHit('vaquero' , function(hitDatas) {
		if(this.alreadyTouched['vaquero'] !== true){
			Crafty.audio.play("woosh3",1,1)
			Crafty("barra").text('u r dead')
			this.alreadyTouched['vaquero'] = true;
		muerto(this)
		this.antigravity()
			}
		
		
		
		})
	}
});

Crafty.c('lanza', {
	init: function( ) {
		this.requires('2D, DOM, Color, Motion, Gravity, Collision');
		//this.color('red')
		this.attr({z: 3800, w:3, h:3})
		this.vx = 400
		this.vy = 40
		this.origin("middle right")
		this.gravityConst(90)
		
		this.attach(Crafty.e('2D, DOM, spear').attr({x:(this.x + 7), y:(this.y - 12 ),z: 3800, w:48, h:18}).flip("X"))
		this.gravity("platform2")
	
		this.attr({alreadyTouched: {} })
		this.onHit('platform' , function(hitDatas) {this.destroy()})
		this.onHit('vaquero' , function(hitDatas) {
		if(this.alreadyTouched['vaquero'] !== true){
			Crafty.audio.play("woosh3",1,1)
			Crafty("barra").text('u r dead')
			this.alreadyTouched['vaquero'] = true;
		muerto(this)
		this.antigravity()
			}
		
		
		
		})
	}
});

Crafty.c('caramel', {
	init: function( ) {
		this.requires('2D, DOM, Color, Motion, Gravity, Collision');
		this.attr({z: 11000, w:8, h:8})
		
		//this.color('red')
		this.vx = 200
		this.vy = -90
		this.gravityConst(Crafty.math.randomNumber(50, 200))
		this.gravity("platform")
		this.onHit('barra' , function(hitDatas) {this.destroy()})
		this.onHit('indio' , function(hitDatas)  {hitDatas[0].obj.change(); this.destroy()})
		this.onHit('indio2' , function(hitDatas) {hitDatas[0].obj.change(); this.destroy()})
		this.onHit('indio3' , function(hitDatas) {hitDatas[0].obj.change(); this.destroy()})
		this.onHit('craven' , function(hitDatas) {
			Crafty.audio.play("squawk",1,1) 
			this.destroy()
			if(viento == true){gettor(); viento = false} else {Crafty.e('bush').attr({x:1200, y:155});viento = true}
			})
		this.attach(Crafty.e('2D, DOM, caramelo').attr({x:(this.x + 1), y:(this.y - 1 ),z: 11001, w:15, h:15}))
	}
})






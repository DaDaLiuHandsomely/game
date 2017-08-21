var can = document.querySelector('canvas');
var pen = can.getContext('2d');
var btn = document.querySelector('#btn');
var sky = document.querySelector('#sky');
var hill = document.querySelector('#hill');
var hillnear = document.querySelector('#hillnear');
var floor = document.querySelector('#floor');
var qq = ['daiji.png','dead.png','jump.png','run1.png','run2.png','ready.png','go.png','superjump.png'];
var x= -2272;
var lv={
	ri:0,
	i:0,
	x:190,
	y:550,
	s:6,
	g:2,
	v:0
};
var c = 0;
lazyLoad(qq,function(data){
	function a(){
		sky.style.display = 'none';
		hill.style.display = 'none';
		hillnear.style.display = 'none';
		floor.style.display = 'none';
		btn.onmouseover = function(){
			btn.src = 'images/start2.png';
		}
		btn.onmouseout = function(){
			btn.src = 'images/start1.png';
		}
		btn.onclick = function(){
			btn.style.display = 'none';
			can.style.backgroundImage = 'none';
			
			sky.style.display = 'inline-block';
			hill.style.display = 'inline-block';
			hillnear.style.display = 'inline-block';
			floor.style.display = 'inline-block';
			
			
			
			
	
	
			var run1;
			var run2;
			var runstatus1 = 0;
			var runstatus2 = 0;
			pen.drawImage(data.ready,60,350,388,108);
			setTimeout(function(){
				pen.drawImage(data.ready,60,350,388,108);
			},0);
			setTimeout(function(){
				pen.drawImage(data.ready,60,350,388,108);
			},1000);
			setTimeout(function(){
				pen.clearRect(0,0,480,500);
				pen.drawImage(data.go,150,350,207,76);
			},2000);
			setTimeout(function(){
				pen.clearRect(0,0,480,500);
					
					lv.v = 50;
					setInterval(function(){
						pen.clearRect(0,0,480,800);
						lv.v-=lv.g;
						lv.y-=lv.v;
						pen.drawImage(data.jump,lv.i*128,0,128,128,lv.x,lv.y,128,128);
						lv.i++;
						if(lv.i==18){
							lv.i=0;
						}
						
					},1000/24);
			},3000);
			
			pen.drawImage(data.daiji,190,550,128,128);
			
			function left(){										
				run2 = setTimeout(function(){						
					pen.clearRect(0,500,480,300);					
					pen.drawImage(data.run2,lv.ri*128,0,128,128,lv.x,lv.y,128,128);
					lv.ri++;
					if(lv.ri==13){
						lv.ri=0;
					}
										
				},1000/24);
				
			}
			function right(){
				run1 = setTimeout(function(){						
					pen.clearRect(0,500,480,300);					
					pen.drawImage(data.run1,lv.ri*128,0,128,128,lv.x,lv.y,128,128);
					lv.ri++;
					if(lv.ri==13){
						lv.ri=0;
					}
										
				},1000/24);
			}
			window.onkeydown = function(e){
				switch(e.keyCode){
					case 37:
						lv.x-=lv.s;											
						left();	
						
					break;
					case 39:
						lv.x+=lv.s;
						right();
					
					break;
				}
			}
			window.onkeyup = function(e){
				switch(e.keyCode){
					case 37:
						clearTimeout(run2);
						pen.clearRect(0,500,480,300);
						pen.drawImage(data.daiji,lv.x-20,550,128,128);
					break;
					case 39:
						clearTimeout(run1);
						pen.clearRect(0,500,480,300);
						pen.drawImage(data.daiji,lv.x-20,550,128,128);					
					break;
				}
			}
			
			
			var set = setInterval(function(){				
				sky.style.position = "absolute";
				sky.style.top = x+'px';
				x+= 5;
				if(x>=-5){
					clearInterval(set);
				}		
			},1000/24)
			
		}
		console.log(lv.y);
	}
	a();
	
	if(lv.y>=800){
			lv.y = 550;
			pen.clearRect(0,0,480,800);
			sky.style.display = 'none';			
			hill.style.display = 'none';
			hillnear.style.display = 'none';
			floor.style.display = 'none';
			
			can.style.backgroundImage = 'url(images/background.jpg)';
			can.style.backgroundPosition = 'right';
			btn.style.display = 'inline-block';
			btn.src = 'images/ready1.png';			

		btn.onmouseover = function(){
			btn.src = 'images/ready2.png';
		}
		btn.onmouseout = function(){
			btn.src = 'images/ready1.png';
		}
		btn.onclick = function(){
			can.style.backgroundPosition = 'left';
			btn.src = 'images/start1.png';
			a();
		}
	}
	
	
	
	
	
	
	
	
	
	
})


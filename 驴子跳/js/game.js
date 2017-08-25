var can = document.querySelector('canvas');
var pen = can.getContext('2d');
var span = document.querySelector('span');
var btn = document.querySelector('#btn');
var sky = document.querySelector('#sky');
var hill = document.querySelector('#hill');
var hillnear = document.querySelector('#hillnear');
var floor = document.querySelector('#floor');
var qq = ['daiji.png','dead.png','jump1.png','jump2.png','run1.png','run2.png','ready.png','go.png','superjump.png','cloud.png'];
var x= -2272;
var hi = 198;
var hir = 189;
var flr = 216; 

var jp = 0;
var lv={
	ri:0,
	i:0,
	x:190,
	y:550,
	s:10,
	g:2,
	v:0
};
var c = 0;
var numb = 0;
lazyLoad(qq,function(data){
	var jup = [data.jump1,data.jump2];
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
				pen.clearRect(0,200,480,500);
				pen.drawImage(data.go,150,350,207,76);
			},2000);
			setTimeout(function(){
				pen.clearRect(0,0,480,500);
					
					lv.v = 40;
					setInterval(function(){
						pen.clearRect(0,0,480,800);
						lv.v-=lv.g;
//						if(lv.y>=250){
//							
//						}
						lv.y-=lv.v;
//						if(lv.y<=250){
//							lv.y=250;
//							setTimeout(function(){						
//								lv.v+=lv.g;
//								lv.y+=2*lv.v;											
//							},4000);						
//						}
//pen.drawImage(data.cloud,0,0,160,73,0,0,160,73);
						
						pen.drawImage(jup[jp],lv.i*128,0,128,128,lv.x,lv.y,128,128);
						lv.i++;
						if(lv.i==18){
							lv.i=0;
						}
						for(var j = 0;j<cloud.length;j++){
							
							pen.drawImage(data.cloud,cloud[j].cx*158,0,160,73,cloud[j].x+=cloud[j].xv,cloud[j].y-j*200,160,73);
							cloud[j].y+=cloud[j].v;
							if(cloud[j].y-j*200>=800){
								cloud.splice(j,1,'');
							}
							if(cloud[j].cx==2){
								
															
								if(cloud[j].x>=320){									
									cloud[j].xv=-2;									
									
								}else if(cloud[j].x<=240){
									cloud[j].xv=1;
								}
							}
						}
						for(var k=0;k<cloud.length;k++){						
							if(touch(lv.x,lv.y,128,128,cloud[k].x,cloud[k].y-k*200,150,73 ) && lv.v<-20){
								lv.v=25;
								numb+=100;
								if(cloud[k].cx==1){
									cloud.splice(k,1,'');
								}
								
							}
							
						}
						if(lv.v>=0){
							for(var m=0;m<cloud.length;m++){
								cloud[m].v=16;
							}
						}
						if(lv.v<=0){
							for(var m=0;m<cloud.length;m++){
								cloud[m].v=0;
							}
						}
						if(lv.y>=800){
								span.innerHTML = numb;
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
//							btn.onclick = function(){
//								can.style.backgroundPosition = 'left';
//								btn.src = 'images/start1.png';
//								a();
//							}
						}
						
						
						
					},1000/24);
			},3000);
			var cloud = [];
			setInterval(function(){
				cloud.push({
					cx:Math.round(Math.random()*2),
					x:Math.round(Math.random()*310),
					y:100,
					v:30,
					xv:0
				})
			},1000/6);			
			setInterval(function(){
								
			},1000/24);
			pen.drawImage(data.daiji,190,550,128,128);
			
			function left(){										
				run2 = setTimeout(function(){						
						jp=1;				
//					pen.drawImage(data.jump2,lv.ri*128,0,128,128,lv.x,lv.y,128,128);
//					lv.ri++;
//					if(lv.ri==13){
//						lv.ri=0;
//					}
										
				},1000/24);
				
			}
			function right(){
				run1 = setTimeout(function(){						
						jp=0;			
//					pen.drawImage(data.jump1,lv.ri*128,0,128,128,lv.x,lv.y,128,128);
//					lv.ri++;
//					if(lv.ri==13){
//						lv.ri=0;
//					}
										
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
//			window.onkeyup = function(e){
//				switch(e.keyCode){
//					case 37:
//						clearTimeout(run2);
//						pen.clearRect(0,500,480,300);
//						pen.drawImage(data.daiji,lv.x-20,550,128,128);
//					break;
//					case 39:
//						clearTimeout(run1);
//						pen.clearRect(0,500,480,300);
//						pen.drawImage(data.daiji,lv.x-20,550,128,128);					
//					break;
//				}
//			}
			
			setTimeout(function(){
				var set = setInterval(function(){				
					sky.style.position = "absolute";
					sky.style.top = x+'px';
					x+= 1;
					if(x>=-5){
						clearInterval(set);
					}		
				},1000/24)
				var het = setInterval(function(){				
					hill.style.position = "absolute";
					hill.style.top = hi+'px';
					hi+= 3;
					if(hi>=800){
						clearInterval(het);
					}		
				},1000/24)
				var her = setInterval(function(){				
					hillnear.style.position = "absolute";
					hillnear.style.top = hir+'px';
					hir+= 4;
					if(hir>=800){
						clearInterval(her);
					}				
				},1000/24)
				var fr = setInterval(function(){				
					floor.style.position = "absolute";
					floor.style.top = flr+'px';
					flr+= 6;
					if(flr>=800){
						clearInterval(fr);
					}				
				},1000/24)
			},3000)
			
		
		}
		
	}
	a();
	
	
	
	
	
	
	
	
	
	
	
	
})


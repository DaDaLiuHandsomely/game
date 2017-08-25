function lazyload(arr,fun){
	var len = arr.length;
	var imgs = {};
	var num = 0;
	for(var i = 0;i<len;i++){
		var img = new Image();
		img.onload = function(){
			num++;
			if(num==len){
				fun(imgs);
			}
		}
		img.src = arr[i];
		var name = arr[i].split('.')[0];
		imgs[name] = img;
	}
}

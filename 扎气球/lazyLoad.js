function lazyLoad(arr,fun){
	var num = 0;
	var len = arr.length;
	var imgs = {};
	for(var i = 0;i<len;i++){
		var img = new Image();
		img.onload = function(){
			num++;
			if(num == len){
				fun(imgs);
			}
		}
		img.src = arr[i];
		var name = arr[i].split('.')[0];
		imgs[name] = img;
	}
}

function lazyLoad(arr, fun){
	var len = arr.length; // 计算总个数
	var nums = 0; //已经加载的数目
	var imgs = {};
	
	for(var i = 0; i < len; i++){
		var img = new Image();
		img.onload = function(){
			nums++; // 表示多加载了一张图片
			if(nums == len){
				// 加载完毕了
				fun(imgs);
				console.log(imgs);
			}
		}
		img.src = arr[i];
		var name = arr[i].split('.')[0];
		imgs[name] = img;
	}
}

function touch(x1, y1, w1, h1, x2, y2, w2, h2){
	if(x1 > x2 + w2 || y1 > y2 + h2 || x1 + w1 < x2 || y1 + h1 < y2){
		return false; // 没有碰撞到
	}else{
		return true; // 表示碰撞到了
	}
}

// 1. 复制#imgs图片
var oImgs = document.getElementById('imgs');
oImgs.innerHTML += oImgs.innerHTML;

// 2. 设置#imgs图片宽度
var aImgs = oImgs.getElementsByTagName('li');
oImgs.style.width = (aImgs[0].offsetWidth + 20) * aImgs.length + 'px';

// 3. 移动
var speed = -2;
setInterval(function(){
	oImgs.style.left = (oImgs.offsetLeft + speed) + 'px';
	if(oImgs.offsetLeft <= -oImgs.offsetWidth/2){
		oImgs.style.left = 0;
	}
	if(oImgs.offsetLeft > 0){
		oImgs.style.left = -oImgs.offsetWidth/2 + 'px';
	}
},30)

// 4. 设置向左向右
var oPrev = document.getElementById('prev');
var oNext = document.getElementById('next');

oNext.onmouseover = oPrev.onmouseover = function(){
	if(this == oPrev){
		speed = -2;
	}else{
		speed = 2;
	}
};

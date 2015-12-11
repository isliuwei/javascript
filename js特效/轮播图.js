/*
 *
 * 第一步：首先实现选项卡效果
 * 第二步：为oPrev和oNext实现向前向后切换效果
 * 第三步：使用定时器为图片设置自动轮播切换效果
 * 第四步：为整个区域oContainer设置鼠标滑入和滑出的事件
 *
 */

/* 封装两个函数：①图片切换函数 changeImg(); ②图片轮播函数 play(); */



/* 第一步：实现选项卡效果 */
/* 为列表注册单击事件实现列表样式和图片显示切换 */
//①首先获取列表和图片对象
var oMeun = document.getElementById('menu');
var aLi = oMeun.getElementsByTagName('li');
var oImgs = document.getElementById('imgs');
var aImgs = oImgs.getElementsByTagName('img');

//②为列表注册单击事件实现切换效果
for(var i=0; i<aLi.length; i++){
	aLi[i].index = i; //先为列表添加自定义index索引属性，保存索引的值以便后续调用
	//单击时，调用图片切换函数 changeImg();此时函数的实参为当前对象的索引 this.index
	aLi[i].onclick = function(){
		index = this.index; //全局索引变量index设为当前对象的索引
		changeImg(this.index);
	};	
}

/* changeImg()函数 */
//功能是每当单击对应列表的数字时实现列表自身效果的切换以及列表索引对应图片的显示
//形参是 idx 当前单击对象的索引 this.index
//选项卡的思想：单击时，首先将所有的样式清空，再给自己添加样式

function changeImg(idx){
	//清空所有样式
	for(var i=0; i<aLi.length; i++){
		aLi[i].className = "";
		aImgs[i].className = "";
	}
	//为自己添加选中样式
	aLi[idx].className = "selected";
	aImgs[idx].className = "selected";
}


/* 第二步：为oPrev和oNext注册单击事件 */
//为这两个对象注册单击事件，每当单击时调用changeImg()函数，通过控制该函数的形参实现递增递减的效果

var oPrev = document.getElementById('prev');
var oNext = document.getElementById('next');

var index = 0; //先定义一个全局索引变量赋初值为0

oNext.onclick = function(){
	index++;
	//index索引满足的条件：当递增到图片最大数量时，将索引设为0（第一幅图片的索引）
	if(index == aImgs.length){
		index = 0;
	}
	changeImg(index);
};

oPrev.onclick = function(){
	index--;
	//index索引满足的条件：当递减到-1时，将索引设为aImgs.length-1(最后一个图片元素的对应的索引)
	if(index == -1){
		index = aImgs.length-1;
	}
	changeImg(index);
};



/* 第三步：使用定时器为图片设置自动轮播切换效果 */
//使用定时器实现图片轮播：每隔一段时间调用一次oNext.onclick函数
//为了方便后续清除定时器函数的操作，将该函数赋给一个变量timer（因为清除定时器函数clearInerval的参数便是该变量）
//为了后续鼠标滑出oContainer同样是自动轮播切换效果也要调用该函数，便将其封装成一个函数play()方便后续调用

/* play()函数 */
var timer; //将timer设为全局变量方便后续消除定时器函数clearInterval调用,因为函数内部的局部变量,在函数外部不能使用
function play(){
	var timer = setInterval(function(){
		oNext.onclick();
	},1000);
}

//因为页面加载完毕后，便自动实现轮播效果，便需要调用play()函数
play();


/* 第四步：为整个区域oContainer设置鼠标滑入和滑出的事件 */
var oContainer = document.getElementById('container');

//鼠标滑入Container区域停止轮播,清除定时器
//为oContainer注册鼠标滑入事件,清除定时器

oContainer.onmouseover = function(){
	clearInterval(timer);
};

//鼠标滑出Container区域继续轮播,调用play()函数
//为oContainer注册鼠标滑出事件,调用play()函数

oContainer.onmouseout = function(){
	play();
};




























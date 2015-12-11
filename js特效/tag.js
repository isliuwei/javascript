

var oTag = document.getElementById('tag');	
var aLi = oTag.getElementsByTagName('li'); 
var oContent = document.getElementById('content');
var aDiv = oContent.getElementsByTagName('div');

for(var i=0; i<aLi.length; i++){
	aLi[i].index = i;
	aLi[i].onclick = function(){
		for(var i=0; i<aLi.length; i++){
			aLi[i].className = "";
			aDiv[i].className = "";
		}
		this.className = 'selected';
		aDiv[this.index].className = 'selected';
	};
}
<script type="text/javascript" src="tag.js"></script>
// //首先获取html标签

		// var oTag = document.getElementById('tag'); 
		// var aLi = oTag.getElementsByTagName('li'); 
		// var oContent = document.getElementById('content');
		// var aDiv = oContent.getElementsByTagName('div');
		// for(var i=0; i<aLi.length; i++)
		// { // 注册单击事件
		// 	aLi[i].index = i;
		// 	aLi[i].onclick = function(){
		// 		for(var i=0; i<aLi.length; i++)
		// 		{// 单击时将所有属性清除
		// 			aLi[i].className = "";
		// 			aDiv[i].className = "";
		// 		}
		// 		// 清除后，在给当前标签添加属性
		// 		this.className = "selected";

		// 		aDiv[this.index].className = "selected";	
		// 	};

		// }
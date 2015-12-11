var oDiv = document.getElementById('div1');
oDiv.onmousedown = function(e){
	e = e || window.event;
	var constantX = e.clientX - oDiv.offsetLeft;
	var constantY = e.clientY - oDiv.offsetTop;
	document.onmousemove = function(e){
		e = e || window.event;

		var iLeft = e.clientX - constantX;
		var iTop = e.clinentY - constantY;
		if(iLeft <= 0){
			iLeft = 0;
		}
		if(iLeft > document.documentElement.clientWidth - oDiv.offsetWidth){
			iLeft = document.documentElement.clientWidth - oDiv.offsetWidth;
		}
		if(iTop <= 0){
			iTop = 0;
		}
		if(iTop > document.documentElement.clientHeight - oDiv.offsetHeight){
			iTop = document.documentElement.clientHeight - oDiv.offsetHeight;
		}
		oDiv.position = absolute;
		oDiv.style.left = iLeft + 'px';
		oDiv.style.top = iTop + 'px';
	};
	oDiv.onmouseup = function(){
			document.onmousemove = null;
	};

};
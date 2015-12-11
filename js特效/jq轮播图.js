
$('#menu li').on('mouseover',function(){
	$(this).addClass('selected').siblings().removeClass('selected');
	var index = $(this).index();
	$('#imgs img:eq('+index+')').addClass('selected').siblings().removeClass('selected');
});
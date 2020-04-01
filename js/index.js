//移动端版本兼容

	function rePosition(){
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var ratio = width/750;
    if(width<=750){
        document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
    }else{
        document.getElementsByTagName('html')[0].style.fontSize="100px";
    }
}
rePosition();
window.onresize = function(){
    rePosition();
};
//移动端版本兼容 end

//弹窗代码特效
$(function(){
	$('#login').click(function(){
			$('#bg').css('display','block');
			$('#mp_play').css('display','block');
		
	});
	$('#closebtn').click(function(){
			$('#bg').css('display','none');
			$('#mp_play').css('display','none');
		
	});
	
	$('.slo').click(function(){
			$('#bg').css('display','block');
			$('#mp_play1').css('display','block');
		
	});
	$('#closebtn1').click(function(){
			$('#bg').css('display','none');
			$('#mp_play1').css('display','none');
		
	});
	
	
})



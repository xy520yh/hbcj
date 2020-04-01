;(function($){
	$.extend({
		inputStyle:function(){
			function check(el,cl){
				$(el).each(function(){
					$(this).parent('span').removeClass(cl);
					

					var checked = $(this).prop('checked');
					if(checked){
						$(this).parent('span').addClass(cl);
						
					}
				})
			}	
			$('input[type="radio"][value="and"]').parent('span').addClass('radio_bg_check red');
			console.log($('input[type="radio"][value="and"]').val());
		
			$('input[type="radio"]').on('click',function(){
				var index1 = $('input[type="radio"]').index( $(this) );
//			alert($('input[type="radio"]:eq(index1)'.val()))
			//	console.log(index1);
				console.log($(this).val());
				check('input[type="radio"]','radio_bg_check');
				check('input[type="radio"]','red');
				
			})
		
			
		}
		
	})

})(jQuery)

//调用
$(function(){
	$.inputStyle();
})
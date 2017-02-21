(function ($) {

	// placeholder
	// $('input').focus(function(){
	// 	$(this).data('placeholder',$(this).attr('placeholder'))
	// 	$(this).attr('placeholder','');
	// });
	// $('input').blur(function(){
	// 	$(this).attr('placeholder',$(this).data('placeholder'));
	// });		

	$('#search-ic').click(function(){
		event.preventDefault();
		$('#search input').toggleClass('searchClass').focus();
	})
	$('#search input').blur(function(){
		$('#search input').toggleClass('searchClass');
	})

	$(document).keyup(function(e) {
	     if (e.keyCode == 27) { // escape key maps to keycode `27`
			$('#search input').toggleClass('searchClass');
	    }
	});



}(jQuery));
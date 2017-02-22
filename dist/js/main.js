(function ($) {

	// placeholder
	// $('input').focus(function(){
	// 	$(this).data('placeholder',$(this).attr('placeholder'))
	// 	$(this).attr('placeholder','');
	// });
	// $('input').blur(function(){
	// 	$(this).attr('placeholder',$(this).data('placeholder'));
	// });		

	$('#search-ic').click(function(event){
		event.preventDefault();
		$('#search input').toggleClass('searchClass').focus();
	})
	$('#search input').blur(function(){
		$('#search input').toggleClass('searchClass');
	})

	// $(document).keyup(function(e) {
	//      if (e.keyCode == 27) { 
	// 		$('#search input').toggleClass('searchClass');
	//     }
	// });
	
	$('video').on('play',(function(){
		$('.onl').hide();
	}))

  $('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	  	items:1,
	  	nav: true,
	  	navText: false,
	  	navSpeed: 500,
	  	animateOut: false
	})


}(jQuery));
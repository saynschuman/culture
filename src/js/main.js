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
	  	animateOut: false,
	})

      // Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {};

    // validation

    $("#choose-date").validate({
    	rules:{
	      from:{
	        required: true
	      },
	      to:{
	        required: true
	      }      
	    },
	    messages:{
		      from:{
		        required: "Будь ласка, вкажіть дату"
		      },
		      to:{
		        required: "Будь ласка, вкажіть дату"
		      }
	      } 
    });

	 $("#contact").validate({
	    rules:{
	      name:{
	        required: true,
	        minlength: 2
	      },
	      email:{
	        required: true,
	        minlength: 5
	      },
	      text:{
	        required: true,
	        minlength: 10
	      }
	    },
	    messages:{
		      name:{
		        required: "Будь ласка, вкажіть Ваше Ім'я",
		        minlength: jQuery.validator.format("Введіть, як мінімум, два символи")
		      },
		      text:{
		        required: "Будь ласка, напишіть текст Вашого повідомлення",
		        minlength: jQuery.validator.format("Введіть, як мінімум, десять символів")
		      },		      
		      email: {
		        required: "Будь ласка, вкажіть Ваш e-mail",
		        minlength: jQuery.validator.format("Введіть, як мінімум, два символи"),
		        email: "Email має містити символ <@>, а також ім'я доменної зони"
		      }
	      }           
	  });   

	  // datepicker
	  $( ".datepicker" ).datepicker( $.datepicker.regional[ "uk" ] ); 	  

	  //mobile

	  $('.mobile-menu').click(function(){
	  	$('header.header .header-top .left-align').toggleClass('translate-menu');
	  })
	  $('.close').click(function(){
	  	$('header.header .header-top .left-align').toggleClass('translate-menu');
	  })


	  
	   


}(jQuery));
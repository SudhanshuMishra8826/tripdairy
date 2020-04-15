$(function() {
  "use strict";

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();

    //------- Parallax -------//
  skrollr.init({
    forceHeight: false
  });
  var text = ["Hallo","One stop AI powered communication platform for hospitality industry"];
  var counter = 0;
  var elem = $("#postertext");
  setInterval(change, 3000);
  function change() {
      elem.fadeOut(function(){
          elem.html(text[counter]);
          counter++;
          if(counter >= text.length) { counter = 0; }
          elem.fadeIn();
      });
  }
  //------- mailchimp --------//  
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();


  $('select').niceSelect();

    /*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
    if ($('.testimonial').length) {
        $('.testimonial').owlCarousel({
            loop: true,
            margin: 30,
            items: 5,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 100,
            paginationSpeed: 500,
            autoplay:true,
            responsive: {
                0: {
                    items: 1
                }
            }
        })
    }




  
});

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

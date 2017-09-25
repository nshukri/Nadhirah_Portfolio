$(document).ready(function(){ 

	//scroll down to view projects 
	$('#project-button').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
		console.log("scroll")
	});

	//scroll down to view projects 
	$('#project-button2').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
		console.log("scroll")
	});


	 // scroll body to 0px on click 
	 // http://webdesignerwall.com/tutorials/animated-scroll-to-top
	$('#back-up').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

	// scroll down nav visibility
	slider();
	// https://stackoverflow.com/questions/16390885/how-to-make-a-floating-menu-appear-after-you-scroll-past-a-certain-point
	$(window).scroll(function () {
    slider();
	});

	function slider() {
	var winHeight = $(window).height(); 

	// $('.project-section-nav').hide()

    if (document.body.scrollTop > winHeight-20) //Show nav after scrolling down 
        $('.project-section-nav').stop().animate({"opacity": '1'});
    else
        $('.project-section-nav').stop().animate({"opacity": '0'}); //200 matches the width of the slider
	}

	$('#about-section').hide();

	//show about section on click
	$('#about-button').click(function () {
			$('#about-section').fadeIn( "slow" ); //http://api.jquery.com/fadein/
			$( "#about-button" ).addClass( "nav-selected" );

	});

	//x-button functionality
	$('.x-button').click(function () {
			$('#about-section').fadeOut( "slow" ); //
			$( "#about-button" ).removeClass( "nav-selected" );
	});

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		// some code..
 		$('.framer-prototype-link').css("visibility",'visible');
 		$('.framer-prototype').hide();
 		// console.log("show link")
	}


}); //end of document ready
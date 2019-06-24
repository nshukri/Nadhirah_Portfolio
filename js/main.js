$(document).ready(function(){ 
	// test animation
	// Wrap every letter in a span
	$('.ml11 .letters').each(function(){
	  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
	});

	anime.timeline({loop: true})
	  .add({
	    targets: '.ml11 .line',
	    scaleY: [0,1],
	    opacity: [0.5,1],
	    easing: "easeOutExpo",
	    duration: 700
	  })
	  .add({
	    targets: '.ml11 .line',
	    translateX: [0,$(".ml11 .letters").width()],
	    easing: "easeOutExpo",
	    duration: 700,
	    delay: 100
	  }).add({
	    targets: '.ml11 .letter',
	    opacity: [0,1],
	    easing: "easeOutExpo",
	    duration: 600,
	    offset: '-=775',
	    delay: function(el, i) {
	      return 34 * (i+1)
	    }
	  }).add({
	    targets: '.ml11',
	    opacity: 0,
	    duration: 1000,
	    easing: "easeOutExpo",
	    delay: 1000
	  });

	
	//scroll down to view projects 
	$('#project-button').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
		console.log("scroll");
		console.log(window.pageYOffset);
	});

	//scroll down to view projects 
	$('#project-button2').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1600, 'linear');
		console.log("scroll");
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

	console.log($(window).scrollTop());

	function slider() {
		var winHeight = $(window).height(); 
		// console.log("slider call");
		// $('.project-section-nav').hide()
	    if ($(window).scrollTop() > winHeight-20) {//Show nav after scrolling down 
	        $('.project-section-nav').stop().animate({"opacity": '1'});
	    	
	    }else{
	        $('.project-section-nav').stop().animate({"opacity": '0'}); //200 matches the width of the slider
	    }
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
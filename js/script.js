var main = function() {
	$('.footer').hide();
	$('.mobileSmallMenu .nav').hide();

	$(document).scroll(function() {				//captures scroll events
		if ($(window).width() <= 414) {
			
			return;
		}

		var y = $(this).scrollTop();			//gets the position of the top of the page
		var mainTop = $('.main').offset().top;	//gets the position of the top of the main element
		
		if (y > mainTop) {						//if the offset by scroll event is more than 50 from the top (50 unites/pixels?) 
			$('.footer').fadeIn();				//fade in the footer
			$('.header').fadeOut();
		} else {
			$('.footer').fadeOut();				//otherwise, fade out the footer
			$('.header').slideDown('fast');
		}
	});


	$('.btnNav').click(function() {
		$('.mobileSmallMenu .nav').toggle();
	})


	$('.mobileSmallMenu li a').click(function() {
		$('.mobileSmallMenu .nav').hide();
	})


	$('.btnTop').click(function() {
		//button to animate to top of page
		$(document.body).animate({scrollTop : 0}, 800);
	})


	$('.btnPortfolio').click(function() {
		//button to animate to portfolio element
		$(document.body).animate({
			scrollTop: $('.portfolio').offset().top 	//offset the scroll from the top to the target element
		}, 800);
	})

	$('.btnAbout').click(function() {
		//button to animate to about element
		$(document.body).animate({
			scrollTop: $('.about').offset().top
		}, 800);
	})

	$('.btnContact').click(function() {
		//button to animate to contact element
		$(document.body).animate({
			scrollTop: $('.contact').offset().top
		}, 800);
	})







	$('.login').click(function() {
		$(this).next($('.dropdown-menu')).toggle();
	})

	$('.login').next($('.dropdown-menu submit')).submit(function() {
		var email = $('#email').val();
		var password = $('#password').val();

		if (email === "") {
			$('.email-error').text("Please enter your email");
		}

		if (password === "") {
			$('.password-error').text("Please enter your password");
		}
	})
}

$(document).ready(main)
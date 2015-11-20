var main = function() {
	$('.footer').hide();

	$(document).scroll(function() {
		var y = $(this).scrollTop();	//scrollTop is 
		
		if (y > 50) {
			$('.footer').fadeIn();
		} else {
			$('.footer').fadeOut();
		}
	});


	$('.topButton').click(function() {
		$(document.body).animate({scrollTop : 0}, 800);
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
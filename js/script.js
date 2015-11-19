var main = function() {
	$('.scrollTop').hide();

	$(document).scroll(function() {
		var y = $(this).scrollTop();	//scrollTop is 
		
		if (y > 50) {
			$('.scrollTop').fadeIn();
		} else {
			$('.scrollTop').fadeOut();
		}
	});











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
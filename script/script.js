var main = function() {
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
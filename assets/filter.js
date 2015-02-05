$(document).ready(function() {
	
	//Filter
	$('ul.nav-pills a').click(function() {
		$('ul.nav-pills .active').removeClass('active');
		$(this).parent().addClass('active');

		var filterVal = $(this).text().toLowerCase().replace(',','').replace(' ','-').replace(',','').replace(' ','-').replace(',','').replace(' ','-');

		if(filterVal == 'all') {
			$('div#portfolio div.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('div#portfolio div.item').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut('normal').addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}

		return false;
	});

	//Search
	$("#search-criteria").on("keyup", function() {
		var g = $(this).val().toLowerCase();
		$(".item h3").each(function() {
			var s = $(this).text().toLowerCase();
			$(this).closest('.item')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
		});
	});

	
});
	function validateSupportForm ( form ) {
		if(form.email.value == '') {
		  alert('Please enter your email address');
		  form.email.focus();
		  return false;
		}
		return true;
	}


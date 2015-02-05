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
		if(form.name.value == '') {
		  alert('Please enter your Name');
		  form.name.focus();
		  return false;
		}else if(form.email.value == '') {
		  alert('Please enter your Email');
		  form.email.focus();
		  return false;
		}else if(form.company.value == '') {
		  alert('Please enter your Company');
		  form.commpany.focus();
		  return false;
		}else if(form.priority.value == '') {
		  alert('Please enter a Priority');
		  form.priority.focus();
		  return false;
		}else if(form.subject.value == '') {
		  alert('Please enter a Subject');
		  form.subject.focus();
		  return false;
		}else if(form.description.value == '') {
		  alert('Please enter a Description');
		  form.description.focus();
		  return false;
		}else{
		return true;
		}
	}


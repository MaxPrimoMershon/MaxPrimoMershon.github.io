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


				//Pagination			
				var show_per_page = 2;
				var number_of_items = $('#portfolio').children('.item').size();
				var number_of_pages = Math.ceil(number_of_items / show_per_page);

				$('body').append('<div class="controls"></div><input id="current_page" type="hidden"><input id="show_per_page" type="hidden">');
				$('#current_page').val(0);
				$('#show_per_page').val(show_per_page);

				var navigation_html = '<a class="prev" onclick="previous()">Prev</a>';
				var current_link = 0;
				while (number_of_pages > current_link) {
					navigation_html += '<a class="page" onclick="go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
					current_link++;
				}
				navigation_html += '<a class="next" onclick="next()">Next</a>';

				$('.controls').html(navigation_html);
				$('.controls .page:first').addClass('activePage');

				$('#portfolio').children().css('display', 'none');
				$('#portfolio').children().slice(0, show_per_page).css('display', 'block');


				function go_to_page(page_num) {
					var show_per_page = parseInt($('#show_per_page').val(), 0);

					start_from = page_num * show_per_page;

					end_on = start_from + show_per_page;

					$('#portfolio').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

					$('.page[longdesc=' + page_num + ']').addClass('activePage').siblings('.activePage').removeClass('activePage');

					$('#current_page').val(page_num);
				}


				function previous() {

				new_page = parseInt($('#current_page').val(), 0) - 1;
				    //if there is an item before the current active link run the function
				    if ($('.activePage').prev('.page').length == true) {
				    	go_to_page(new_page);
				    }

				}

				function next() {
					new_page = parseInt($('#current_page').val(), 0) + 1;
				    //if there is an item after the current active link run the function
				    if ($('.activePage').next('.page').length == true) {
				    	go_to_page(new_page);
				    }

				}

			});

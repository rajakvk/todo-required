define(['jquery', 'app/storage'], function($, storage) {
	var 
		sel = { 
			addMe: '#add-me',
			listMe: '#list-me',
			menu: '#menu',
			message: '.message'
		},
		classes = {
			message: 'message'
		}

	return {
		// call init after DOM ready
		init: function() {
			$(sel.menu).find('li').on('click', function(){
				if ( $(this).data('id') === 'home' ) {
					$(sel.listMe).show();
					$(sel.addMe).hide();
					$(sel.listMe)
						.find(sel.message)
						.empty()
						.removeClass()
						.addClass(classes.message);
					storage.listMe();
				} else if( $(this).data('id') === 'add' ) {
					$(sel.listMe).hide();
					$(sel.addMe).show();
					$(sel.addMe)
						.find(sel.message)
						.empty()
						.removeClass()
						.addClass(classes.message);
				}
			});
		}
	};
});
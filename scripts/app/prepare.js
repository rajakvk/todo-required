define( ['jquery', 'app/menu', 'app/storage'], function($, menu, storage) {
	var 
		sel = { 
			addMe: '#add-me',
			listMe: '#list-me',
			message: '.message',
			save: '.save'
		},

		content = {
			NoTask: 'No tasks found'
		},

		preparePage = function() {
			$(sel.addMe).hide();
			$(sel.listMe).find(sel.message).html(content.NoTask);
			$(sel.message).html('');
		},

		bindEvents = function(){			
			$(sel.addMe).find(sel.save).on('click', storage.saveMe);
			$(sel.listMe).on('click', 'li a', storage.deleteMe);
			storage.listMe();
		}

	return {

		init: function(){
			preparePage();
			menu.init();
			bindEvents();
		}
	};
});
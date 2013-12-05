define(['jquery'], function($){

	var 
		sel = {
			txtAdd: '.txt-add',
			save: '.save',
			addMe: '#add-me',
			listMe: '#list-me',
			message: '.message'
		},
		
		classes = {
			success: 'message success',
			error: 'message error'
		},

		content = {
			success: 'Task added successfully !',
			support: 'your browser not supporting localStorage',
			deleted: 'Task removed successfully !',
			empty: 'Please type some task',
			noTask: 'No task pending !'
		},

		store = window.localStorage,

		isLocalStorage = typeof store !== 'undefined',

		showNotSupportMessage = function() {
			$(sel.addMe)
				.find(sel.message)
				.html(content.support)
				.removeClass()
				.addClass(classes.error);
		};

	return {

		saveMe: function(){
			var 
				task = $(sel.addMe).find(sel.txtAdd),
				index;

			if(!isLocalStorage) {
				showNotSupportMessage();
			} else if(task.val()) {
				index = store.length;
				store.setItem('do'+index,task.val());
				task.val('');
				$(sel.addMe)
					.find(sel.message)
					.removeClass()
					.addClass(classes.success)
					.html(content.success);
			} else {
				$(sel.addMe).find(sel.message).html(content.empty);
			}	
		},

		listMe: function() {
			var 
				li,
				arr = [],
				$ul = $(sel.listMe).find('ul');
			$ul.empty();
			for(task in store) {
				arr.push('<li>'+store.getItem(task)+' <a href="#" data-id="'+ task +'">delete</a>'+'</li>');
			}
			$ul.append(arr.join(''));
			if(!store.length) {
				$(sel.message)
					.html(content.noTask)
					.removeClass()
					.addClass(classes.error);
			}
		},

		deleteMe: function() {
			var me;
			if(typeof event.target.dataset.id !== 'undefined') {
				store.removeItem(event.target.dataset.id);
				me = $(sel.listMe).find('li a').map(function() { 
					if($(this).data('id') == event.target.dataset.id) 
						return $(this) 
				});
				me[0].parent().remove();
				$(sel.message)
					.html(content.deleted)
					.removeClass()
					.addClass(classes.success);
			}
		}
	};

});

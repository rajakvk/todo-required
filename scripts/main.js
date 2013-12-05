require.config({
	//urlArgs: "bust=" +  (new Date()).getTime(),
	paths: {
		jquery: 'lib/jquery-1.10.2.min'
	}
});

require(['jquery', 'app/prepare'], function($, prepare){
	$(function(){
		prepare.init();		
	});
});
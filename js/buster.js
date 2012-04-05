// buster.js version 0.1
// Author: Rick Ford
// Website: http://www.spoontwisted.com
// Usage: ...

(function ($) {

	buster = {

		init: function () {
			buster.on();
			buster.watch("iframe");
		},

		// default events
		events: function () {
		},

		watch: function(id){
			$(id).bind("load",function(){
				buster.off();
			});
		},

		on: function(){
			console.log("buster on");
			window.onbeforeunload = function(e) {
				return "Warning: The page in the frame wants out. Should I let it take focus?";
			};
		},

		off: function(){
			console.log("buster off");
			window.onbeforeunload = null;
		}

	};
	$(function(){
		buster.init();
	});

})(jQuery);
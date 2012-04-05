// buster.js version 0.2
// Author: Rick Ford
// Website: http://www.spoontwisted.com

(function ($) {

	buster = {

		init: function () {
			buster.on();
		},

		// default events
		events: function () {
		},

		wait: function(id){
			buster.on();
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

})(jQuery);
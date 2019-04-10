google.load("jquery", "1.7.1");

google.setOnLoadCallback(function() {
	
	$(document).ready(function() {
		
		// callback function to bring a hidden box back
		function callback() {
			setTimeout(function() {
				$( "#effect" ).removeAttr( "style" ).hide().fadeIn();
			}, 1000 );
		};
		
		// set effect from select menu value
		$( "a#menu_left1" ).click(function() {
			runEffect();
			return false;
		});
		
		
		function runEffect() {
		
			var options = {};	
			// run the effect
			$("#effect").effect( "slide",options ,"normal",callback );
			//$("#main_right").effect( "slide",options ,"normal",callback );
		};

		
	});

});

		
		







		$("a#menu_left2").fancybox({ 
		    'width'				: '400px',
			'height'			: '400px',
			'onStart'           : function (){
			       $("#map_canvas2").removeClass('bigmap_hide').addClass('bigmap_show');
      			   initializeBigMapMock();
			  },
			'frameWidth': 500, 'frameHeight': 500,
			'hideOnContentClick': false,
			'onClosed': function() {
					   $("#map_canvas2").removeClass('bigmap_show').addClass('bigmap_hide');
				       $("#fancy_content").empty();
				       
       			} 
			});



	
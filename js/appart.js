

window.___gcfg = {lang: 'fr'};

(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

	

	
$(function() {
	
	

	// callback function to bring a hidden box back
	function callback() {
		/*
		setTimeout(function() {
			$( "#effect" ).removeAttr( "style" ).hide().fadeIn();
		}, 1000 );
		*/
	};
	
	
	// The root URL for the RESTful services
	var rootURL = "/rest/mail";	

	function sendMail() {
		console.log('sendMail');
		$.ajax({
			type: 'POST',
			contentType: 'application/json',
			url: rootURL,
			dataType: "json",
			data: formToJSON(),
			success: function(data, textStatus, jqXHR){
				console.log('success status:'+data.status);			
				if (data.status=='KO'){				
					console.log('KO');
					$("#dialogError").dialog( 
					          { buttons: { 
					                          "Ok": function() {
					                        	  $(this).dialog("close");
					                        	  //FIXME mettre en rouge					                        	  
					                        	  
					                          } 
					                      } ,
					            title: 'Alert',
					            closeText: 'hide',
					            dialogClass: 'alert',
					            draggable: false,
					            hide: 'slide',
					            resizable: false ,
					            modal: true					                      
					          });
					console.log('apres KO');
				}else{				
					// clean form
					console.log('clean:'+data.code);
					  $("#dialog").dialog( 
					          { buttons: { 
					                          "Ok": function() {
					                        	  $(this).dialog("close");
					                        	  $("#contact").hide();
					                        	  $('#destinataire').val('');
					                        	  $('#message').val('');
					                        	  $("#main_right").effect( "slide",{} ,"normal",callback );
					                          } 
					                      } ,
					            title: 'Confirmation',
					            closeText: 'hide',
					            dialogClass: 'shm_box',
					            draggable: false,
					            hide: 'slide',
					            resizable: false ,
					            modal: true
					                      
					          });
					
										
					console.log('home OK');
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				$("#dialog").dialog( 
				          { buttons: { 
				                          "Ok": function() {
				                        	  $(this).dialog("close");				             				                        	  
				                          } 
				                      } ,
				            title: 'Confirmation',
				            closeText: 'hide',
				            dialogClass: 'alert',
				            draggable: false,
				            hide: 'slide',
				            resizable: false ,
				            modal: true
				                      
				          });				
			}
		});
	}
		
	// Helper function to serialize all the form fields into a JSON string
	function formToJSON() {
			return JSON.stringify({
				"subject": $('#sujet').val(), 
				"destinataire": $('#destinataire').val(), 
				"msgBody": $('#message').val()			
				});
		}

	function renderErrorMessage(result) {
		$('#code').val(result.code);
		$('#message').val(result.message);	
		$('#status').val(result.status);
	}
	
		
		// set effect from select menu value
		$( "a#menu_left1" ).click(function() {
			var options = {};	
			$("#dossier").hide();
			$("#contact").hide();
			$("#location").hide();
			$("#gallerie").hide();
			$("#video").hide();
			$("#main_right").effect( "slide",options ,"normal",callback );
			_gaq.push(['_trackEvent', 'Menu', 'Home', 'Action sur le bouton home']);
			return false;
		});
		
		$( "a#menu_left1b" ).click(function() {
			var options = {};	
			$("#main_right").hide();
			$("#contact").hide();
			$("#location").hide();
			$("#dossier").hide();
			$("#video").hide();
			$("#gallerie").effect( "slide",options ,"normal",callback );
			_gaq.push(['_trackEvent', 'Menu', 'Gallerie', 'Action sur le bouton Gallerie']);
			return false;
		});
		
		$( "a#menu_left1c" ).click(function() {
			var options = {};	
			$("#main_right").hide();
			$("#contact").hide();
			$("#location").hide();
			$("#dossier").hide();			
			$("#gallerie").hide();
			$("#video").effect( "slide",options ,"normal",callback );
			_gaq.push(['_trackEvent', 'Menu', 'Video', 'Action sur le bouton Video']);
			return false;
		});
		
		$( "a#menu_left2" ).click(function() {
			var options = {};	
			$("#main_right").hide();
			$("#contact").hide();
			$("#location").hide();
			$("#gallerie").hide();
			$("#video").hide();
			$("#dossier").effect( "slide",options ,"normal",callback );			
			_gaq.push(['_trackEvent', 'Menu', 'Dossier', 'Action sur le bouton Dossier']);
			return false;
		});
		
		$( "a#menu_left3" ).click(function() {
			var options = {};	
			$("#main_right").hide();
			$("#dossier").hide();
			$("#location").hide();
			$("#gallerie").hide();
			$("#video").hide();
			$("#contact").effect( "slide",options ,"normal",callback );
			_gaq.push(['_trackEvent', 'Menu', 'Contact', 'Action sur le bouton Contact']);
			return false;
		});
		

		$( "a#menu_left4" ).click(function() {
			var options = {};	
			$("#dossier").hide();
			$("#main_right").hide();
			$("#contact").hide();
			$("#gallerie").hide();
			$("#video").hide();
			$("#location").effect( "slide",options ,"normal",callback );
			_gaq.push(['_trackEvent', 'Menu', 'Location', 'Action sur le bouton Location']);
			return false;
		});
		
		$("a#images").fancybox();
		
		$( "input#submit" ).click(function() {
			sendMail();
			_gaq.push(['_trackEvent', 'Formulaire', 'Send Mail', 'Action sur le bouton envoyer']);
			return false;
		});
		
		
});



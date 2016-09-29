var theForm = document.getElementById( 'theForm' );

			new stepsForm( theForm, {
				onSubmit : function( form ) {

					classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

					var messageEl = theForm.querySelector( '.final-message' );
					messageEl.innerHTML = 'Thank you! We\'ll be in touch.' + '<br />' + 'Let me redirect you to my blog.';
					classie.addClass( messageEl, 'show' );
                    
                    setTimeout(function() {
                    document.getElementById("theForm").submit();
                    }, 1000);
                    return false;
                    
				}
			} );
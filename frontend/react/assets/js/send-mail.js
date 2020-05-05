/* jQuery Ajax Mail Send Script */

(function ($) {
	
	$(function() {
		
		var contactForm = $( '#contact-form' );
		
		var $alert = $('.site-alert');
		
		contactForm.submit(function()
		{
			if (contactForm.valid())
			{
				NProgress.start();
				var formValues = $(this).serialize();
				
				$.post($(this).attr('action'), formValues, function(data)
				{
					if ( data == 'success' )
					{
						contactForm.clearForm();
					}
					else
					{
						$alert.addClass('error');
					}
					NProgress.done();
					$alert.removeClass('slideOutRight').show().addClass('slideInLeft');
					setTimeout(function() { $alert.removeClass('slideInLeft').addClass('slideOutRight'); },2000)
				});
			}
			
			return false
		});
	
	});
	
	
	$.fn.clearForm = function() {
	Â  return this.each(function() {
	Â  Â  var type = this.type, tag = this.tagName.toLowerCase();
	Â  Â  if (tag == 'form')
	Â  Â  Â  return $(':input',this).clearForm();
	Â  Â  if (type == 'text' || type == 'password' || tag == 'textarea')
	Â  Â  Â  this.value = '';
	Â  Â  else if (type == 'checkbox' || type == 'radio')
	Â  Â  Â  this.checked = false;
	Â  Â  else if (tag == 'select')
	Â  Â  Â  this.selectedIndex = -1;
	Â  });
	};

})(jQuery);
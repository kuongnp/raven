(function () {
	
	
    $('#content').summernote({height:300});
	
    var slug = function(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
      
        // remove accents, swap ñ for n, etc
        var from = "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ·/_,:;";
        var to   = "aaaaaaaaaaaaaaaaaaeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
    
        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes
    
        return str;
    }
    
	$('.active_theme').change(function() {
		console.log($(this).prop('checked'));
		var theme_title = $(this).val();
		$.ajax({
		  type: "POST",
		  url: '/theme',
		  data: {theme:theme_title},
		  success: function() {
		  	alert('New theme is set active!');
		  }
		});
		
	})
	
	$('#name').on('input', function() {
	  var slug_name = slug($(this).val());
	  $('#slug').val(slug_name);
	});
	
	$('#title').on('input', function() {
		var slug_name = slug($(this).val());
		$('#slug').val(slug_name);
	  
	});
	
	$('#slug').on('focusout', function() {
		var current_val = $(this).val();
		console.log(current_val);
		if(current_val != '') {
			var slug_name = slug($(this).val());
			$('#slug').val(slug_name);	
		}else {
			var slug_name = slug($('#title').val());
			$('#slug').val(slug_name);	
		}
		
	})
	
	
	//menu action
	$('.del_menu').on('click', function() {
		var cf = confirm('Are you sure?');
		if(cf) {
			var id = $(this).data('id');
			$.ajax({
			  type: "POST",
			  url: '/menu/delete',
			  data: {id:id},
			  success: function(response) {
			  	if(response.err) {
			  		alert(response.err);
			  		//$('#menu_'+id).remove();
			  	}
			  	location.reload();
			  }
			});
		}
	})
	
	$('.del_item').on('click', function() {
		var cf = confirm('Are you sure?');
		if(cf) {
			var id = $(this).data('id');
			$.ajax({
			  type: "POST",
			  url: '/menu/item/delete',
			  data: {id:id},
			  success: function(response) {
			  	if(response.err) {
			  		alert(response.err);
			  		//$('#item_'+id).remove();
			  	}
			  	location.reload();
			  }
			});
		}
	})
	
	$('#add_menu_item').on('click', function() {
		var html = '<div class="form-group m-form__group row">';
			html += '<input type="hidden" name="item_id" value="">';
			html += 	'<div>';
			html += 		'<button type="button" class="btn btn-secondary btn-sm m-btn m-btn--air m-btn--icon m-btn--icon-only m-btn--pill drag_item">';
			html += 			'<i class="la la-arrows"></i>';
			html += 		'</button>';
			html += 	'</div>';
			html +=		'<div class="col-lg-3">';
			html +=			'<input type="text" class="form-control m-input" name="item_name" placeholder="Item name">';
			html +=		'</div>';
			html +=		'<div class="col-lg-3">';
			html +=			'<input type="text" class="form-control m-input" name="item_link" placeholder="Item link">';
			html +=		'</div>';
			html +=		'<div class="col-lg-3">';
			html +=			'<button type="button" class="btn btn-secondary btn-sm m-btn m-btn--air m-btn--icon m-btn--icon-only m-btn--pill remove_item">';
			html +=				'<i class="la la-remove"></i>';
			html +=			'</button>';
			html +=		'</div>';
			html +=	'</div>';
			
		$('#list_item').append(html);
	})
	
	$('#add_contact_base').on('click', function() {
		var html = '<div class="form-group m-form__group row">';
			html += 	'<div>';
			html += 		'<button type="button" class="btn btn-secondary btn-sm m-btn m-btn--air m-btn--icon m-btn--icon-only m-btn--pill drag_item">';
			html += 			'<i class="la la-arrows"></i>';
			html += 		'</button>';
			html += 	'</div>';
			html +=		'<div class="col-lg-2">';
			html +=			'<input type="text" class="form-control m-input" name="base_item_name" placeholder="Item name">';
			html +=		'</div>';
			html +=		'<div class="col-lg-2">';
			html +=			'<input type="text" class="form-control m-input" name="base_item_value" placeholder="Item value">';
			html +=		'</div>';
			html +=		'<div class="col-lg-2">';
			html +=			'<input type="text" class="form-control m-input" name="base_item_class" placeholder="Item class">';
			html +=		'</div>';
			html +=		'<div class="col-lg-2">';
			html +=			'<button type="button" class="btn btn-secondary btn-sm m-btn m-btn--air m-btn--icon m-btn--icon-only m-btn--pill remove_item">';
			html +=				'<i class="la la-remove"></i>';
			html +=			'</button>';
			html +=		'</div>';
			html +=	'</div>';
			
		$('#list_contact_base').append(html);
	})
	$('#add_contact_social').on('click', function() {
		var html = '<div class="form-group m-form__group row">';
			html += 	'<div>';
			html += 		'<button type="button" class="btn btn-secondary btn-sm m-btn m-btn--air m-btn--icon m-btn--icon-only m-btn--pill drag_item">';
			html += 			'<i class="la la-arrows"></i>';
			html += 		'</button>';
			html += 	'</div>';
			html +=		'<div class="col-lg-2">';
			html +=			'<input type="text" class="form-control m-input" name="social_item_name" placeholder="Item name">';
			html +=		'</div>';
			html +=		'<div class="col-lg-2">';
			html +=			'<input type="text" class="form-control m-input" name="social_item_value" placeholder="Item value">';
			html +=		'</div>';
			html +=		'<div class="col-lg-2">';
			html +=			'<input type="text" class="form-control m-input" name="social_item_class" placeholder="Item class">';
			html +=		'</div>';
			html +=		'<div class="col-lg-2">';
			html +=			'<button type="button" class="btn btn-secondary btn-sm m-btn m-btn--air m-btn--icon m-btn--icon-only m-btn--pill remove_item">';
			html +=				'<i class="la la-remove"></i>';
			html +=			'</button>';
			html +=		'</div>';
			html +=	'</div>';
			
		$('#list_contact_social').append(html);
	})
		
	$(document).on('click','.remove_item',function() {
	    $(this).parent().parent().remove();
	});
	//end menu action
	
	var PortletDraggable = function () {

	    return {
	        //main function to initiate the module
	        init: function () {
	            $("#list_item,#list_contact_base,#list_contact_social").sortable({
	                connectWith: ".drag_item",
	                items: ".form-group", 
	                opacity: 0.8,
	                handle : '.drag_item',
	                coneHelperSize: true,
	                placeholder: 'm-portlet--sortable-placeholder',
	                forcePlaceholderSize: true,
	                tolerance: "pointer",
	                helper: "clone",
	                tolerance: "pointer",
	                forcePlaceholderSize: !0,
	                helper: "clone",
	                cancel: ".m-portlet--sortable-empty", // cancel dragging if portlet is in fullscreen mode
	                revert: 250, // animation in milliseconds
	                update: function(b, c) {
	                    if (c.item.prev().hasClass("m-portlet--sortable-empty")) {
	                        c.item.prev().before(c.item);
	                    }                    
	                }
	            });
	        }
	    };
	}();
	
	jQuery(document).ready(function() {
	    PortletDraggable.init();
	});
	
	
}());
$(document).ready(function() {

	$.get("api/method/frappe.desk.moduleview.get_desktop_settings", function(data, status){
		console.log(data.message);
		$('header').prepend(frappe.render_template("logo"));
		$('header .navbar .container').prepend(frappe.render_template("sidebar-toggle"));
		$('.main-section').append(frappe.render_template("main-sidebar", {
			data: data.message
		}));

		$('header').addClass('main-header');
		$('header .navbar').removeClass('navbar-fixed-top');
		$('body').addClass('skin-blue sidebar-mini sidebar-collapse');	
		$('#body_div').addClass('content-wrapper');	
		
		bdtheme.set_user_background();
	});

	
	
});

frappe.provide("bdtheme");

// add toolbar icon
$(document).bind('toolbar_setup', function() {
	frappe.app.name = "bdoop Erp";
	$('.navbar-home').html(frappe._('Home'));

});
// customize script:
// console.log(frappe.get_doc(doctype='Product'));


bdtheme.set_user_background = function(src, selector, style){
	if(!selector) selector = "#page-desktop";
	if(!style) style = "Fill Screen";
	if(src) {
		if (window.cordova && src.indexOf("http") === -1) {
			src = frappe.base_url + src;
		}
		var background = repl('background: url("%(src)s") center center;', {src: src});
	} else {
		var background = "background-color: #FFFFFF;";
	}

	frappe.dom.set_style(repl('%(selector)s { \
		%(background)s \
		%(style)s \
	}', {
		selector:selector,
		background:background,
		style: ""
	}));
}

frappe.templates["logo"] = '<a href="/desk" class="navbar-brand nuxt-link-exact-active hide-on-small" target="_self">'
+     '<div class="logo-container"><img src="/assets/bdtheme/images/tireboss-logo.png" height="35" alt="Frontech Solution" class="navbar-brand-full"> '
+	'<div class="logo-version">V1.14</div></div>'
+'    </a>';


frappe.templates["sidebar-toggle"] = '<a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">'
+	        '<span class="sr-only">Toggle navigation</span>'
+	    '</a>';



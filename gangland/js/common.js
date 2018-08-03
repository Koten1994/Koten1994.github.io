$(document).ready(function(){
		var $menu = $("#my-menu").mmenu({
			extensions: [
				"position-right",
				"fx-menu-zoom",
				"border-full",
				"theme-white",
				"listview-50",
				"shadow-panels"
			],
			navbar: {
				title: "GANGLAND CONSTRUCTION"
			  }
		});
		var $icon = $("#my-icon");
		var API = $menu.data( "mmenu" );

		$icon.on( "click", function() {
		API.open();
		});

		API.bind( "open:finish", function() {
		setTimeout(function() {
			$icon.addClass( "is-active" );
		}, 100);
		});
		API.bind( "close:finish", function() {
		setTimeout(function() {
			$icon.removeClass( "is-active" );
		}, 100);
		});

		$(".pop_up_link").magnificPopup({
			type:"image",
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

		new WOW().init();
});


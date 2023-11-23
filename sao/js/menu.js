
// document.addEventListener("DOMContentLoaded", function (event) {
// 	/**
// 	 * OPEN MAIN MENU
// 	 */
// 	var startY = 0;
// 	var endY = 0;

// 	var dragArea = document.getElementById('nav-detect-drag');
// 	dragArea.addEventListener("mousedown", function (e) {
// 		startY = e.clientY;
// 	}, false);
// 	dragArea.addEventListener("mouseup", function (e) {
// 		endY = e.clientY;
// 		activateNavigation(startY, endY);
// 	}, false);


// 	var active = false;
// 	function activateNavigation(sY, eY) {
// 		var options = document.getElementById('floating-nav');
// 		var dragDistance = 50;

// 		if ((sY + dragDistance) < eY) {

// 			if (active == false) {
// 				options.className = 'active';
// 				active = true;
// 			}

// 		} else if ((sY - dragDistance) > eY) {
// 			if (active == true) {
// 				options.className = '';
// 				active = false;
// 			}
// 		}
// 	}


// });

$(document).ready(function () {
	/**
	 * OPEN MAIN MENU
	 */
	// var startY = 0;
	// var endY = 0;

	// $('#nav-detect-drag').mousedown(function (e) {
	// 	startY = e.clientY;
	// 	console.log("StartY: " + startY);
	// });
	// $('#nav-detect-drag').mouseup(function (e) {
	// 	endY = e.clientY;
	// 	console.log("endY: " + endY );

	// 	activateNavigation(startY, endY);
	// });


	// (function( $ ){
	// 	$.fn.activateNavigation = function(sY, eY) {
	// 		var options = $('#floating-nav');
	// 		var dragDistance = 50;

	// 		if ((sY + dragDistance) < eY) {
	// 			if (!options.hasClass('active')) {
	// 				options.addClass('active');
	// 			}

	// 		} else if ((sY - dragDistance) > eY) {
	// 			if (options.hasClass('active')) {
	// 				options.removeClass('active');
	// 			}
	// 		}
	// 	   return this;
	// 	}; 
	//  })( jQuery );
	// $( "#nav-detect-drag" ).draggable({
	// 	drag: function( event, ui ) {}
	//   });

	let isDragging = false, startY;

	$('#nav-detect-drag').on('mousedown', function (e) {
		isDragging = true;
		startY = e.clientY;
	});

	$(document).on('mousemove', function (e) {
		if (isDragging) {
			const deltaY = e.clientY - startY;
			const newTop = $('#nav-detect-drag').offset().top + deltaY;

			deltaY > 0 ? $('#floating-nav').addClass('active') : $('#floating-nav').removeClass('active');

			$('#nav-detect-drag').css('top', newTop + 'px');
			startY = e.clientY;
		}
	});

	$(document).on('mouseup', function () {
		isDragging = false;
	});
	/**
	 * ACTIVATE SUBMENU
	 */
	let $mainmenu = $('#nav-options li')

	$mainmenu.click(function (e) {
		$('.nav-item.active').removeClass('active');
		let $li = $(this).parent();
		$li.addClass('active');
		$.load_page($li.data('location'));
		e.preventDefault();

	});


});


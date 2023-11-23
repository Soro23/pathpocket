
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
	var startY = 0;
	var endY = 0;

	var dragArea = $('#nav-detect-drag');
	dragArea.mousedown(function (e) {
		startY = e.clientY;
	}, false);
	dragArea.mouseup(function (e) {
		endY = e.clientY;
		activateNavigation(startY, endY);
	}, false);


	function activateNavigation(sY, eY) {
		var options = $('#floating-nav');
		var dragDistance = 50;

		if ((sY + dragDistance) < eY) {
			if (!options.hasClass('active')) {
				options.addClass('active');
			}

		} else if ((sY - dragDistance) > eY) {
			if (options.hasClass('active')) {
				options.removeClass('active');
			}
		}
	}

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


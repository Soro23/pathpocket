
document.addEventListener("DOMContentLoaded", function (event) {
	/**
	 * OPEN MAIN MENU
	 */
	var startY = 0;
	var endY = 0;

	var dragArea = document.getElementById('nav-detect-drag');
	dragArea.addEventListener("mousedown", function (e) {
		startY = e.clientY;
	}, false);
	dragArea.addEventListener("mouseup", function (e) {
		endY = e.clientY;
		activateNavigation(startY, endY);
	}, false);


	var active = false;
	function activateNavigation(sY, eY) {
		var options = document.getElementById('floating-nav');
		var dragDistance = 50;

		if ((sY + dragDistance) < eY) {

			if (active == false) {
				options.className = 'active';
				active = true;
			}

		} else if ((sY - dragDistance) > eY) {
			if (active == true) {
				options.className = '';
				active = false;
			}
		}
	}

});
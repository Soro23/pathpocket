$(document).ready(function () {
  /**
   * OPEN MAIN MENU
   */
  let isDragging = false,
    minDrag = 10,
    startY;

  $("#nav-detect-drag").on("mousedown", function (e) {
    isDragging = true;
    startY = e.clientY;
  });

  $(document).on("mousemove", function (e) {
    if (isDragging) {
      const deltaY = e.clientY - startY;
      const newTop = $("#nav-detect-drag").offset().top + deltaY;

      if (deltaY > minDrag) {
        $("#floating-nav").addClass("active");
      } else if (deltaY < minDrag * -1) {
        $("#floating-nav").removeClass("active");
      }

      startY = e.clientY;
    }
  });

  $(document).on("mouseup", function () {
    isDragging = false;
  });
  /**
   * ACTIVATE SUBMENU
   */
  let $mainmenu = $("#nav-options li");

  $mainmenu.click(function (e) {
    $(this).toggleClass("active");
  });
});

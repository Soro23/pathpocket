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
   * SUBMENU FUNCTIONALLITY
   */
  $(document).on("click", function (e) {
    if (
      $(e.target).is($("#nav-options")) ||
      $.contains($("#nav-options")[0], e.target)
    ) {
      //Se clicka en el menu
      $("#nav-options li").click(function (e) {
        $("#nav-options li").removeClass("active");
        $(this).toggleClass("active");
      });
    } else {
      //Se clica fuera
      $("#nav-options li.active").removeClass("active");
    }
  });
});

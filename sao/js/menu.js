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
    // Si se hace clic fuera del menú
    if (!$(e.target).closest("#nav-options").length) {
      $("#nav-options li.active").removeClass("active");
      $('#submenu0counter').remove();
    }
  });

  $("#nav-options li").click(function (e) {
    // Elimina el antiguo #submenu0counter y agrega la clase "active"
    $('#submenu0counter').remove();
    $(this).toggleClass('active');

    // Si hay algún elemento activo, añade #submenu0counter
    if ($("#nav-options li.active").length) {
      $('<style id="submenu0counter">#nav-options > li.active ul.floating.submenu0 { height: ' + $('#nav-options > li.active ul.floating.submenu0').children().length * 60 + '; }</style>').appendTo('body');
    }
  });
});

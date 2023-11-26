$(document).ready(function () {
  /**
   * OPEN MAIN MENU
   */
  let isDragging = false,
  startY,
  touchStartTimestamp;
  const minDrag = 10;
  const doubleTapThreshold = 300;

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Gestionar doble toque para abrir el menú
    // TODO: No funciona okay los index
    $("#nav-detect-drag").on("touchstart", function (e) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - touchStartTimestamp;

      if (elapsedTime <= doubleTapThreshold) {
        // Doble toque detectado, realiza la acción deseada (abrir el menú)
        // Aquí puedes agregar la lógica para abrir el menú, por ejemplo, toggleClass("menu-abierto")
        $("#floating-nav").toggleClass("active");
        $('#floating-nav').css('z-index','999');
        // Restablece el temporizador
        touchStartTimestamp = null;
      } else {
        // Primer toque, inicia el temporizador
        touchStartTimestamp = currentTime;
      }
    });
  } else {
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
          $('#floating-nav').css('z-index','900');
        } else if (deltaY < minDrag * -1) {
          $("#floating-nav").removeClass("active");
          $('#floating-nav').css('z-index','');
        }

        startY = e.clientY;
      }
    });

    $(document).on("mouseup", function () {
      isDragging = false;
    });

  }
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
    // Elimina el antiguo #submenu0counter, elimina el elemento "active" actual y agrega la clase "active" nueva
    $('#submenu0counter').remove();
    $("#nav-options li.active").removeClass("active");
    $(this).toggleClass('active');

    // Si hay algún elemento activo, añade #submenu0counter
    if ($("#nav-options li.active").length) {
      $('<style id="submenu0counter">#nav-options > li.active ul.floating.submenu0 { height: ' + $('#nav-options > li.active ul.floating.submenu0').children().length * 60 + '; }</style>').appendTo('body');
    }
  });
});

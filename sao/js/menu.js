$(document).ready(function () {
  /**
   * OPEN MAIN MENU
   */
  let isDragging = false,
    minDrag = 10,
    startY;

  // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //   // You are in mobile browser
  //   alert('mobil');
  // }else{
  $("#nav-detect-drag").on("mousedown touchstart", function (e) {
    // Utiliza 'e.originalEvent.touches[0]' para obtener la posición del primer dedo en dispositivos táctiles
    startY = e.type === 'mousedown' ? e.clientY : e.originalEvent.touches[0].clientY;
    isDragging = true;
  });

  $(document).on("mousemove touchmove", function (e) {
    if (isDragging) {
      // Utiliza 'e.originalEvent.touches[0]' para obtener la posición del primer dedo en dispositivos táctiles
      const deltaY = (e.type === 'mousemove' ? e.clientY : e.originalEvent.touches[0].clientY) - startY;
      const newTop = $("#nav-detect-drag").offset().top + deltaY;

      if (deltaY > minDrag) {
        $("#floating-nav").addClass("active");
      } else if (deltaY < minDrag * -1) {
        $("#floating-nav").removeClass("active");
      }

      startY = e.type === 'mousemove' ? e.clientY : e.originalEvent.touches[0].clientY;
    }
  });

  $(document).on("mouseup touchend", function () {
    isDragging = false;
  });

  // Cancela el desplazamiento predeterminado en dispositivos táctiles para evitar comportamientos no deseados
  $("#nav-detect-drag").on("touchstart touchmove", function (e) {
    e.preventDefault();
  });

  // }
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

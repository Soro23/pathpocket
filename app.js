$(document).ready(function(){
  // Cargar la home al cargar la app
  $.load_page('home');

  // Funcion de menu
  $('.nav-item a').click(function(e) {
    $('.nav-item.active').removeClass('active');
    let $li = $(this).parent();
    $li.addClass('active');
    $.load_page($li.data('location'));
    e.preventDefault();
  });


});




/**
 * Funciones generales
 */
$.load_page = function(pagename) {
  $("#content").load('page/'+pagename+'.html');
}

function load_page(pagename) {
  $.load_page(pagename);
}
$(document).ready(function(){
  // Cargar la home al cargar la app
  $.load_page('home');

  $('.navbar-nav').click(function(e) {
    $('.navbar-nav.active').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });


});

// const navItems = document.querySelectorAll(".nav-item");

// navItems.forEach((navItem, i) => {
//   navItem.addEventListener("click", () => {
//     navItems.forEach((item, j) => {
//       item.className = "nav-item";
//     });  
//     navItem.className = "nav-item active";
//   });  
// });  





/**
 * Funciones generales
 */
$.load_page = function(pagename) {
  $("#content").load('page/'+pagename+'.html');
}

function load_page(pagename) {
  $.load_page(pagename);
}
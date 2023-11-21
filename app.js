const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});



$(document).ready(function(){
  load_page('home');






  function load_page(pagename) {
    $("#content").load('page/'+pagename+'.html');
  }
});

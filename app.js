window.addEventListener("load", (event) => {
  load_page('home');
});

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});


function load_page(pagename) {
  document.getElementById("content").innerHTML='<object type="text/html" data="page/'+pagename+'.html"></object>';
}
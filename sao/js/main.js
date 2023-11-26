$(document).ready(function () {
  console.log(navigator.userAgent);
  // Bloquear el uso de web 10 segundos
  setTimeout(function () {
    $('css-doodle').css('box-shadow', 'inset 0px 0px 200px -200px #000');
    loadJS("js/menu.js", true);
    loadJS("js/modal-append", true);
    loadJS("js/modal.js", true);
  }, 5000);


});


function loadJS(FILE_URL, async = true) {
  let scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);

  document.body.appendChild(scriptEle);

  // success event 
  scriptEle.addEventListener("load", () => {
    console.log("File loaded")
  });
   // error event
  scriptEle.addEventListener("error", (ev) => {
    console.log("Error on loading file", ev);
  });
}
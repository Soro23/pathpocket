$(document).ready(function () {
  // Cargar BG
  $('<div class="bg"></div><div class="bg bg2"></div><div class="bg bg3"></div><div class="bgv bg"></div><div class="bgv bg2"></div><div class="bgv bg3"></div>').prependTo('body');
  // Bloquear el uso de web Loader 5 segundos
  setTimeout(function () { 

    // $('css-doodle').css('box-shadow', 'inset 0px 0px 200px -200px #000');
    $('css-doodle').css('width', '0').css('height', '0');
    setTimeout(function () {
      $('css-doodle').remove();
    }, 5000);

  }, 5000);
  loadJS("js/menu.js", true);
  loadJS("js/modal-append.js", true);
  loadJS("js/modal.js", true);


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
    return true;
  });
  // error event
  scriptEle.addEventListener("error", (ev) => {
    console.log("Error on loading file", ev);
    return false;
  });
}

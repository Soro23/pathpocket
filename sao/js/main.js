$(document).ready(function () {
  // Cargar BG
  $('<div class="lines"></div>').prependTo('body');
  $('<div class="bg"><div class="bg bg2"><div class="bg bg3"></div></div></div><div class="bgv bg"><div class="bgv bg2"><div class="bgv bg3"></div></div></div>').prependTo('.lines');
  var numeroElementos = Math.floor(Math.random() * 10) + 1;
  // Selecciona el contenedor con la clase "lines"
  var linesContainer = $(".lines");
  // Crea los elementos div con la clase "line" y los agrega al contenedor
  for (var i = 0; i < numeroElementos; i++) {
    var nuevaLinea = $("<div>").addClass("line");
    linesContainer.append(nuevaLinea);
  }
  numeroElementos = Math.floor(Math.random() * 10) + 1;

  for (var i = 0; i < numeroElementos; i++) {
    var nuevaLinea = $("<div>").addClass("linev");
    linesContainer.append(nuevaLinea);
  }

  // Bloquear el uso de web Loader 5 segundos
  setTimeout(function () {

    // $('css-doodle').css('box-shadow', 'inset 0px 0px 200px -200px #000');
    // $('css-doodle').css('width', '0').css('height', '0');
    $('.line').each((i, e) => {
      $(e).css('margin-left', Math.random() * 200 - 100 + '%');
      $(e).css('--animation', 'drop' + Math.round(Math.random() + 1) + ' 3s 0s infinite');
      $(e).css('--animation-delay', Math.random() * 2 - 1 + 's');
    });

    $('.linev').each((i, e) => {
      $(e).css('margin-top', Math.random() * 200 - 100 + '%');
      $(e).css('--animation', 'pord' + Math.round(Math.random() + 1) + ' 3s 0s infinite');
      $(e).css('--animation-delay', Math.random() * 2 - 1 + 's');
    });
    // setTimeout(function () {
      // $('css-doodle').remove();
    // }, 5000);


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

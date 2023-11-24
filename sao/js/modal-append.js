// Función principal para mostrar el mensaje
function displayMessage(headerContent, messageContent, o = true, x = true) {
  // Verifica si el elemento ya existe
  if (!$("#sao-popup").length) {
    // Crea el elemento de mensaje
    var message = $("<div>").attr("id", "sao-popup");

    // Agrega el encabezado, cuerpo y pie al mensaje
    appendHeader(message, headerContent);
    appendBody(message, messageContent);
    appendFooter(message, o, x);

    // Añade el mensaje al cuerpo del documento
    $("body").append(message);

    // Activa los botones
    activateButtons();

    // Establece una clase 'active' después de un breve retraso
    setTimeout(function () {
      $("#sao-popup").addClass("active");
      $('#sao-popup').draggable();
    }, 100);
  }
}

// Función para agregar el encabezado al mensaje
function appendHeader(message, text) {
  var newHeader = $("<header>").text(text);
  message.append(newHeader);
}

// Función para agregar el cuerpo al mensaje
function appendBody(message, textArray) {
  var newBody = $("<section>");
  for (var index = 0; index < textArray.length; ++index) {
    var paragraph = $("<p>").text(textArray[index]);
    newBody.append(paragraph);
  }
  message.append(newBody);
}

// Función para agregar el pie al mensaje
function appendFooter(message, o, x) {
  var newFooter = $("<footer>");

  // Botón O
  if (o) {
    var newOButton = $("<div>").attr("id", "sao-o");
    var newOButtonInner = $("<div>");
    var newOButtonSymbol = $("<div>");
    newOButtonInner.append(newOButtonSymbol);
    newOButton.append(newOButtonInner);
    newFooter.append(newOButton);

  }

  // Botón X
  if (x) {
    var newXButton = $("<div>").attr("id", "sao-x");
    var newXButtonInner = $("<div>");
    var newXButtonSymbol1 = $("<div>");
    var newXButtonSymbol2 = $("<div>");
    newXButtonInner.append(newXButtonSymbol2);
    newXButtonInner.append(newXButtonSymbol1);
    newXButton.append(newXButtonInner);
    newFooter.append(newXButton);

  }

  // Agrega el pie al mensaje
  message.append(newFooter);
}

// Función para activar los botones
function activateButtons() {
  // Agrega un evento de clic al botón X
  $("#sao-x").on("click", function () {
    var popup = $("#sao-popup");

    // Remueve la clase 'active' y elimina el elemento después de un breve retraso
    popup.removeClass("active");
    setTimeout(function () {
      popup.remove();
    }, 500);
  });
}

$(document).ready(function () {
  $("#sao-x").on("click", function () {

  });

});

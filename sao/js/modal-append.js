$(document).ready(function () {
  // Función principal para mostrar el mensaje
  function displayMessage(messageContent) {
    // Verifica si el elemento ya existe
    if (!$("#sao-popup").length) {
      // Crea el elemento de mensaje
      var message = $("<div>").attr("id", "sao-popup");

      // Obtiene el texto del primer elemento del array
      var text = messageContent[0];

      // Agrega el encabezado, cuerpo y pie al mensaje
      appendHeader(message, text);
      appendBody(message, messageContent);
      appendFooter(message);

      // Añade el mensaje al cuerpo del documento
      $("body").append(message);

      // Activa los botones
      activateButtons();

      // Establece una clase 'active' después de un breve retraso
      setTimeout(function () {
        $("#sao-popup").addClass("active");
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
    for (var index = 1; index < textArray.length; ++index) {
      var paragraph = $("<p>").text(textArray[index]);
      newBody.append(paragraph);
    }
    message.append(newBody);
  }

  // Función para agregar el pie al mensaje
  function appendFooter(message) {
    var newFooter = $("<footer>");

    // Botón O
    var newOButton = $("<div>").attr("id", "sao-o");
    var newOButtonInner = $("<div>");
    var newOButtonSymbol = $("<div>");
    newOButtonInner.append(newOButtonSymbol);
    newOButton.append(newOButtonInner);

    // Botón X
    var newXButton = $("<div>").attr("id", "sao-x");
    var newXButtonInner = $("<div>");
    var newXButtonSymbol1 = $("<div>");
    var newXButtonSymbol2 = $("<div>");
    newXButtonInner.append(newXButtonSymbol2);
    newXButtonInner.append(newXButtonSymbol1);
    newXButton.append(newXButtonInner);

    // Agrega los botones al pie
    newFooter.append(newOButton);
    newFooter.append(newXButton);

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
});

// function displayMessage(messageTextArray) {
// 	if ( !(document.getElementById('sao-popup')) ) {
// 		var message = document.createElement('div');
// 		message.id = 'sao-popup';

// 		var text = messageContent[0];
// 		appendHeader(message, text);
// 		appendBody(message, messageContent);
// 		appendFooter(message);

// 		document.body.appendChild(message);
// 		activateButtons();

// 		setTimeout(function() {document.getElementById('sao-popup').className = 'active';}, 100);
// 	}
// }

// function appendHeader(message, text) {
// 	var newHeader = document.createElement('header');
// 	var textNode = document.createTextNode(text);
// 	newHeader.appendChild(textNode);
// 	message.appendChild(newHeader);
// }
// function appendBody(message, textArray) {
// 	var newBody = document.createElement('section');
// 	for (index = 1; index < textArray.length; ++index) {
// 		var paragraph = document.createElement('p');
// 		var textNode = document.createTextNode(textArray[index]);
// 		paragraph.appendChild(textNode);
// 		newBody.appendChild(paragraph);
// 		message.appendChild(newBody);
// 	}
// }
// function appendFooter(message) {
// 	var newFooter = document.createElement('footer');
// 	var newOButton = document.createElement('div');
// 	newOButton.id = 'sao-o';
// 	var newOButtonInner = document.createElement('div');
// 	var newOButtonSymbol = document.createElement('div');
// 	newOButtonInner.appendChild(newOButtonSymbol);
// 	newOButton.appendChild(newOButtonInner);
// 	var newXButton = document.createElement('div');
// 	newXButton.id = 'sao-x';
// 	var newXButtonInner = document.createElement('div');
// 	var newXButtonSymbol1 = document.createElement('div');
// 	var newXButtonSymbol2 = document.createElement('div');
// 	newXButtonInner.appendChild(newXButtonSymbol2);
// 	newXButtonInner.appendChild(newXButtonSymbol1);
// 	newXButton.appendChild(newXButtonInner);

// 	newFooter.appendChild(newOButton);
// 	newFooter.appendChild(newXButton);
// 	message.appendChild(newFooter);
// }
// function activateButtons() {
// 	var xButton = document.getElementById('sao-x');

// 	xButton.addEventListener('click', function(){
// 		popup = document.getElementById('sao-popup');
// 		document.getElementById('sao-popup').className = '';
// 		setTimeout(function() {popup.parentNode.removeChild(popup);}, 500);

// 	});
// }

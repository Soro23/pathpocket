$(document).ready(function () {
  $("#message-icon").on("click", function () {
    $.displayMessage([
      "Notification",
      "Heathcliff has challenged you to a duel.",
      "Type: 1 vs 1",
    ]);
  });
});

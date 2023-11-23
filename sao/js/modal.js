$(document).ready(function () {
  $("#message-icon").addEventListener("click", function () {
    displayMessage([
      "Notification",
      "Heathcliff has challenged you to a duel.",
      "Type: 1 vs 1",
    ]);
  });
});

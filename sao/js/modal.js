$(document).ready(function () {
  // $("#message-icon").on("click", function () {
  //   dNotification("Notification", [
  //     "You gonna load Projects Section",
  //   ]);
  // });

  $("#privatearealogin").on("click", function () {
    dForm("Login Area", [{ label: "Username: ", id: "uname" },{ label: "Password: ", id: "pword" }]);
  });
});

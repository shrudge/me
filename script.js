window.addEventListener("DOMContentLoaded", function() {
  var refreshButton = document.getElementById("refreshButton");

  refreshButton.addEventListener("click", function(e) {
    e.preventDefault();
    window.location.reload();
  });
});

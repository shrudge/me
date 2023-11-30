function toggleMenu() {
  const menu = document.querySelector('.menu');
  const ham = document.querySelector('.hamRotate180');
  const refreshButton = document.getElementById('refreshButton');


  ham.classList.toggle('active');
  menu.style.left = ham.classList.contains('active') ? '0' : '-50vh';
  if (!ham.classList.contains('active')) {
    // If menu is closing, remove the fragment identifier and scroll to the top
    window.history.replaceState({}, document.title, window.location.pathname);
    window.scrollTo(0, 0);
}
}
window.addEventListener("DOMContentLoaded", function () {
  var refreshButton = document.getElementById("refreshButton");

  refreshButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.reload();
  });
});

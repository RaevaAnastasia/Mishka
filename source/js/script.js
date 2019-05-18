var mainNavigation = document.querySelector(".main-navigation");
var navToggle = document.querySelector(".main-navigation__toggle");
var modalUp = document.querySelectorAll(".modal-up");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");

mainNavigation.classList.remove("main-navigation--nojs");
mainNavigation.classList.remove("main-navigation--opened");
mainNavigation.classList.add("main-navigation--closed");

navToggle.addEventListener("click", function() {
  if (mainNavigation.classList.contains("main-navigation--closed")) {
    mainNavigation.classList.remove("main-navigation--closed");
    mainNavigation.classList.add("main-navigation--opened");
  } else {
    mainNavigation.classList.add("main-navigation--closed");
    mainNavigation.classList.remove("main-navigation--opened")
  }
});

if (modal) {
  for (var i = 0; i < modalUp.length; i++) {
    modalUp[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modal.classList.add("modal--show");
      modalOverlay.classList.add("modal-overlay--show");
    });
  }

  modalOverlay.addEventListener("click", function(evt) {
      evt.preventDefault();
      modal.classList.remove("modal--show");
      modalOverlay.classList.remove("modal-overlay--show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal--show")) {
        evt.preventDefault();
        modal.classList.remove("modal--show");
        modalOverlay.classList.remove("modal-overlay--show");
      }
    }
  });
}

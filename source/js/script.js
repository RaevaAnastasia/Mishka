var mainNavigation = document.querySelector(".main-navigation");
var navToggle = document.querySelector(".main-navigation__toggle");

mainNavigation.classList.remove("main-navigation--nojs");

navToggle.addEventListener("click", function() {
  if (mainNavigation.classList.contains("main-navigation--closed")) {
    mainNavigation.classList.remove("main-navigation--closed");
    mainNavigation.classList.add("main-navigation--opened");
  } else {
    mainNavigation.classList.add("main-navigation--closed");
    mainNavigation.classList.remove("main-navigation--opened")
  }
});

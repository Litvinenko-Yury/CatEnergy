"use strict"

var burger = document.querySelector(".burger");
var mainNav = document.querySelector(".main-nav__list");

/*=====*/
/*если JS есть, для mob свернуть меню и показать бургер*/
mainNav.classList.add("main-nav__list--js");
burger.classList.remove("burger--no-js");

/*=====*/
/*вкл/выкл анимации меню и бугера*/
burger.addEventListener("click", function () {
  burger.classList.toggle("burger--close");
  mainNav.classList.toggle("main-nav__list--show");
});

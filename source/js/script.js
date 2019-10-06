"use strict"

var burger = document.querySelector(".burger");
var mainNav = document.querySelector(".main-nav__list");
/*===*/
var btnBeforeMob = document.querySelector(".field-range-mob__btn-before");
var btnAfterMob = document.querySelector(".field-range-mob__btn-after");
var imgSubContainer1 = document.querySelector(".compare__img-subcontainer-1");
var imgSubContainer2 = document.querySelector(".compare__img-subcontainer-2");
var runnable = document.querySelector(".field-range-mob__wrap");

/*если JS есть, для mob свернуть меню и показать бургер*/
mainNav.classList.add("main-nav__list--js");
burger.classList.remove("burger--no-js");

/*вкл/выкл анимации меню и бугера*/
burger.addEventListener("click", function () {
  burger.classList.toggle("burger--close");
  mainNav.classList.toggle("main-nav__list--show");
});

/*Сравнение изображения (вкл/выкл) для mob*/
btnBeforeMob.addEventListener("click", function () {
  console.log("клик Было");

  imgSubContainer2.classList.add("compare__overlay");
  imgSubContainer2.classList.remove("compare__opacity0", "compare__opacity1");

  imgSubContainer1.classList.remove("compare__overlay");
  imgSubContainer1.classList.add("compare__opacity0");

  runnable.classList.remove("field-range-mob__wrap--width-runnable");

  function opac() {
    imgSubContainer1.classList.add("compare__opacity1");
  };
  setTimeout(opac, 5);
});

btnAfterMob.addEventListener("click", function () {
  console.log("клик Стало");

  imgSubContainer1.classList.add("compare__overlay");
  imgSubContainer1.classList.remove("compare__opacity0", "compare__opacity1");

  imgSubContainer2.classList.remove("compare__overlay");
  imgSubContainer2.classList.add("compare__opacity0");

  runnable.classList.add("field-range-mob__wrap--width-runnable");

  function opac() {
    imgSubContainer2.classList.add("compare__opacity1");
  };
  setTimeout(opac, 5);
});

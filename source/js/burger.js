"use strict"

var burger=document.querySelector(".burger");


/*анимация переключения состояния бугера*/
burger.addEventListener("click", function () {
  burger.classList.toggle("burger--close");
});


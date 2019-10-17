"use strict"

/*=====*/
/*валидация отправки формы*/
var form = document.querySelector(".form");
var input1 = document.querySelector(".field-text__input--1");
var input2 = document.querySelector(".field-text__input--2");
var input3 = document.querySelector(".field-text__input--3");
var email = document.querySelector("input[type=email]");
var tel = document.querySelector("input[type=tel]");
var svgEmail = document.querySelector(".field-text__input-svg--email");
var svgTel = document.querySelector(".field-text__input-svg--tel");
var fieldText = document.querySelector(".field-text__input");

/*=========================*/
/*проверка валидности формы*/
form.addEventListener("submit", function (event) {
  //Каждый раз, когда пользователь пытается отправить данные, проверяем правильность поля ".field-text__input--1".
  if (!input1.value) {
    // Если поле пустое или не-валидно, добавляемм класс ошибки:
    input1.classList.add("field-text__input--error");

    //отменяем отправку формы
    event.preventDefault();
  }

  //Каждый раз, когда пользователь пытается отправить данные, проверяем правильность поля ".field-text__input--2".
  if (!input2.value) {
    // Если поле пустое или не-валидно, добавляемм класс ошибки:
    input2.classList.add("field-text__input--error");

    //отменяем отправку формы
    event.preventDefault();
  }

  //Каждый раз, когда пользователь пытается отправить данные, проверяем правильность поля ".field-text__input--3".
  if (!input3.value) {
    // Если поле "пустое или не-валидно, добавляемм класс ошибки:
    input3.classList.add("field-text__input--error");

    //отменяем отправку формы
    event.preventDefault();
  }

  //Каждый раз, когда пользователь пытается отправить данные, проверяем правильность поля "email".
  if (!email.value || !email.validity.valid) {
    // Если поле "name" не-валидно, добавляемм класс ошибки:
    email.classList.add("field-text__input--error");
    svgEmail.classList.add("field-text__input-svg--error");

    //отменяем отправку формы
    event.preventDefault();
  }

  //Каждый раз, когда пользователь пытается отправить данные, проверяем правильность поля "tel".
  if (!tel.value || !email.validity.valid) {
    // Если поле "tel" не-валидно, добавляемм класс ошибки:
    tel.classList.add("field-text__input--error");
    svgTel.classList.add("field-text__input-svg--error");

    //отменяем отправку формы
    event.preventDefault();
  }
}, false);


/*=========================*/
/*удаление индикатора ошибки на поле, в котором находится пользователь*/
input1.onfocus = function () {
  if (this.classList.contains("field-text__input--error")) {
    //удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("field-text__input--error");
  }
};

input2.onfocus = function () {
  if (this.classList.contains("field-text__input--error")) {
    //удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("field-text__input--error");
  }
};

input3.onfocus = function () {
  if (this.classList.contains("field-text__input--error")) {
    //удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("field-text__input--error");
  }
};

email.onfocus = function () {
  if (this.classList.contains("field-text__input--error")) {
    //удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("field-text__input--error");
    svgEmail.classList.remove("field-text__input-svg--error");
  }
};


tel.onfocus = function () {
  if (this.classList.contains("field-text__input--error")) {
    //удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("field-text__input--error");
    svgTel.classList.remove("field-text__input-svg--error");
  }
};

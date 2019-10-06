ymaps.ready(init);
var myMap;
var myPlacemark;
var $zoom;
var $center;
var $iconImage;
var $iconImageSize;
var $iconImageOffset;
var $width = window.innerWidth;
console.log($width);

//задание масштаба для mob/tab/desk
if ($width < 768) {
  $zoom = 17;
} else if ($width < 1300) {
  $zoom = 19;
} else {
  $zoom = 17;
}
console.log("zoom = " + $zoom);

//задание центра карты для mob/tab/desk
if ($width < 1300) {
  $center = [59.938631, 30.323055];
} else {
  $center = [59.939003, 30.319332];
}
console.log("center = " + $center);

//задание изображения маркера для mob/tab/desk
if ($width < 768) {
  $iconImage = "img/icon-map-pin-mob@1x.png";
} else {
  $iconImage = "img/icon-map-pin-tab@1x.png";
}
console.log("icon = " + $iconImage);

//задание размеров маркера для mob/tab/desk
if ($width < 768) {
  $iconImageSize = [55, 53];
} else {
  $iconImageSize = [113, 106];
}
console.log("iconSize = " + $iconImageSize);

//задание смещения иконки маркера для mob/tab/desk
if ($width < 768) {
  $iconImageOffset = [-25, -55];
} else {
  $iconImageOffset = [-35, -106];
}
console.log("iconOffset = " + $iconImageOffset);


//=========================
// Создание экземпляра карты и его привязка к контейнеру с заданным id ("map").
function init() {
  myMap = new ymaps.Map("map", {
    center: $center,
    zoom: $zoom,
    controls: []
  }, {
    // Скрыть "Как добраться"/"открыть в Яндекс картах".
    suppressMapOpenBlock: true
  });


  // Создание метки
  myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: 'Cat Energy',
    balloonContent: 'Cat Energy-лучшее питание',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: "default#image",

    // Своё изображение иконки метки.
    iconImageHref: $iconImage,

    // Размеры метки.
    iconImageSize: $iconImageSize,

    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    //iconImageOffset: [-25, -55]
    iconImageOffset:  $iconImageOffset
  });

  // Добавление метки на карту
  myMap.geoObjects.add(myPlacemark);
}

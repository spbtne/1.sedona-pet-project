ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [34.909352, -111.753791],
    zoom: 10,
    controls: [],
  });
  var myPlacemark = new ymaps.Placemark(
    [34.909352, -111.753791],
    {},
    {
      preset: "islands#redDotIcon",
    }
  );

  myMap.geoObjects.add(myPlacemark);
}

var circle = document.querySelector('.circle');
var itemCount = 5; // Количество элементов
var radius = 100; // Радиус окружности

for (var i = 0; i < itemCount; i++) {
  var angle = (360 / itemCount) * i;
  var item = document.createElement('div');
  item.className = 'circle-item';
  item.style.transform = 'rotate(' + angle + 'deg) translate(' + radius + 'px) rotate(-' + angle + 'deg)';
  circle.appendChild(item);
}

const dropdownButton = document.querySelector('.dropdown-button');
const dropdownList = document.querySelector('.dropdown-list');
const dropdownItems = document.querySelectorAll('.dropdown-list li');

dropdownButton.addEventListener('click', function() {
  dropdownList.classList.toggle('active');
});

dropdownItems.forEach(function(item) {
  item.addEventListener('click', function() {
    dropdownButton.textContent = item.textContent;
    dropdownList.classList.remove('active');
  });
});

document.addEventListener('click', function(event) {
  if (!dropdownButton.contains(event.target) && !dropdownList.contains(event.target)) {
    dropdownList.classList.remove('active');
  }
});

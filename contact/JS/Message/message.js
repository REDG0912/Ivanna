const buttonContact = document.querySelector('.button-contact');
const formContact = document.querySelector('.form-contact');
const thankYouSection = document.querySelector('.thank-you-section');

buttonContact.addEventListener('click', function() {
  formContact.style.display = 'none';
  thankYouSection.style.display = 'block';
});

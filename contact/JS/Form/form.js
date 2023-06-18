var emailInput = document.getElementById('emailInput');
var phoneInput = document.getElementById('phoneInput');
var submitButton = document.getElementById('submitButton');
var form = document.querySelector('.form-contact');

emailInput.addEventListener('input', function() {
    var emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
        emailInput.classList.remove('success');
        emailInput.classList.add('error');
    } else {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
    }
    checkFormValidity();
});

phoneInput.addEventListener('input', function() {
    var phoneValue = phoneInput.value;
    phoneValue = phoneValue.slice(0, 13);
    phoneInput.value = phoneValue;
    if (!validatePhone(phoneValue)) {
        phoneInput.classList.remove('success');
        phoneInput.classList.add('error');
    } else {
        phoneInput.classList.remove('error');
        phoneInput.classList.add('success');
    }
    checkFormValidity();
});

function validatePhone(phone) {
    var regex = /^[0-9+]+$/;
    var phoneLength = phone.replace(/\D/g, '').length;
    return regex.test(phone) && phoneLength >= 11 && phoneLength <= 13;
}

function validateEmail(email) {
    var regex = /^[a-zA-Z0-9.@]+$/;
    return regex.test(email);
}

function validatePhone(phone) {
    var regex = /^[0-9+]+$/;
    var phoneLength = phone.replace(/\D/g, '').length;
    return regex.test(phone) && phoneLength >= 11 && phoneLength <= 13;
}

function checkFormValidity() {
    if (emailInput.value.trim() !== '' && phoneInput.value.trim() !== '' && !emailInput.classList.contains('error') && !phoneInput.classList.contains('error')) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

checkFormValidity();

form.addEventListener('submit', function(event) {
    if (emailInput.value.trim() === '' || phoneInput.value.trim() === '' || emailInput.classList.contains('error') || phoneInput.classList.contains('error')) {
        event.preventDefault();
        alert('Вы должны заполнить обе формы правильно.');
    }
});
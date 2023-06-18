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

phoneInput.addEventListener('input', function(event) {
    var phoneValue = phoneInput.value;
    if (event.inputType === 'insertText' && !/^\d$/.test(event.data)) {
        phoneInput.value = phoneValue.replace(event.data, '');
        return;
    }
    if (event.inputType !== 'deleteContentBackward' && /^\d$/.test(event.data) && !phoneValue.startsWith('+')) {
        phoneInput.value = "+" + phoneValue;
    }
    var truncatedPhoneValue = phoneInput.value.replace(/[^+\d-]/g, '').slice(0, 13);
    if (phoneInput.value !== truncatedPhoneValue) {
        phoneInput.value = truncatedPhoneValue;
    }
    if (!validatePhone(truncatedPhoneValue)) {
        phoneInput.classList.remove('success');
        phoneInput.classList.add('error');
    } else {
        phoneInput.classList.remove('error');
        phoneInput.classList.add('success');
    }
    checkFormValidity();
});

form.addEventListener('focusin', function(event) {
    if (event.target === phoneInput && !phoneInput.value.startsWith("+")) {
        phoneInput.value = "+" + phoneInput.value;
    }
});

function validatePhone(phone) {
    var regex = /^[+\d-]+$/;
    var phoneLength = phone.replace(/[-]/g, '').length;
    return regex.test(phone) && phoneLength >= 11 && phoneLength <= 13;
}

function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function checkFormValidity() {
    if (emailInput.value.trim() !== '' && phoneInput.value.trim() !== '' && !emailInput.classList.contains('error') && !phoneInput.classList.contains('error')) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

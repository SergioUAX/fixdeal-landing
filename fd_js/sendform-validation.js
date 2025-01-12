const formContainer = document.querySelector('.contactus-formcontainer');
const userName = document.querySelector('#user-name');
const userEmail = document.querySelector('#user-email');
const userSubject = document.querySelector('#user-subject');
const userMessage = document.querySelector('#user-message');
const submitButton = document.querySelector('.contactus-form-button-submit');

function showError(input, message) {
  const errorElement = document.createElement('div');
  errorElement.classList.add('error-message');
  errorElement.textContent = message;
  input.classList.add('input-error');
  input.parentNode.appendChild(errorElement);
}

function clearErrors() {
  document.querySelectorAll('.error-message').forEach((el) => el.remove());
  document.querySelectorAll('.input-error').forEach((el) => el.classList.remove('input-error'));
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isNotEmpty(input, fieldName) {
  if (!input.value.trim()) {
    showError(input, `${fieldName} is required.`);
    return false;
  }
  return true;
}

function validateCaptcha() {
  const captchaResponse = grecaptcha.getResponse();
  if (!captchaResponse) {
    showError(submitButton, 'Please complete the captcha.');
    return false;
  }
  return true;
}

function validateForm(event) {
  event.preventDefault();
  clearErrors();
  let isValid = true;
  if (!isNotEmpty(userName, 'Your name')) {
    isValid = false;
  }
  if (!isNotEmpty(userEmail, 'Your email') || !validateEmail(userEmail.value)) {
    showError(userEmail, 'Please enter a valid email address.');
    isValid = false;
  }
  if (!isNotEmpty(userSubject, 'Subject')) {
    isValid = false;
    }
  // if (!validateCaptcha()) {
  //   isValid = false;
  // }
  if (isValid) {
    console.log('Form submitted successfully!');
    formContainer.reset();
  }
}

submitButton.addEventListener('click', validateForm);

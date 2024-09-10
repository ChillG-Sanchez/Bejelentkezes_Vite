import 'bootstrap/dist/css/bootstrap.min.css';

function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessages = document.getElementById('errorMessages');
  errorMessages.innerHTML = '';


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!name || !email || !password) {
    let errorMessage = '<div class="alert alert-danger" role="alert">';
    errorMessage += 'Kérjük, töltsd ki az összes mezőt!';
    errorMessage += '</div>';
    errorMessages.innerHTML = errorMessage;
  } else if (!emailPattern.test(email)) {
    let errorMessage = '<div class="alert alert-danger" role="alert">';
    errorMessage += 'Kérjük, érvényes email címet adj meg!';
    errorMessage += '</div>';
    errorMessages.innerHTML = errorMessage;
  } else {
    let successMessage = '<div class="alert alert-success" role="alert">';
    successMessage += 'Minden adat megadva!';
    successMessage += '</div>';
    errorMessages.innerHTML = successMessage;
  }
}

window.validateForm = validateForm;
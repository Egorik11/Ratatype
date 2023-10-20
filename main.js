const submit = document.querySelector('#submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
});

function checkInputEmail() {
  const emailInput = document.querySelector('#email');
  check(emailInput, validationEmail);
}

function check(input, fn) {
  const hidden = document.querySelector('#hidden');
  input.addEventListener('keyup', (e) => {
    if (fn(input.value)) {
      hidden.classList.add('hidden');
      input.classList.remove('border-error');
    } else {
      hidden.classList.remove('hidden');
      input.classList.add('border-error');
    }
  });
}

function validationEmail(inputEmail) {
  const email = inputEmail;
  const emailRegexp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return validation(email, emailRegexp);
}

function validation(input, regexp) {
  if (regexp.test(input)) {
    return true;
  } else {
    return false;
  }
}

checkInputEmail();

const form = document.querySelector('.login-form');

const onSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === '' || password.value.trim() === '') {
    return alert('All form fields must be filled in');
  }

  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(formData);
  event.currentTarget.reset();
};

form.addEventListener('submit', onSubmit);
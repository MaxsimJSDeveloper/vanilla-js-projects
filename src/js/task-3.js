import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const nameRef = document.querySelector('#name-output');
const form = document.querySelector('.feedback-form');

function getInputValue(name) {
  if (name.trim() !== '') {
    nameRef.textContent = `Hello ${name} !!!`;
    nameRef.classList.remove('visually-hidden');
    return;
  } else {
    return (nameRef.textContent = 'Anonymous');
  }
}

form.addEventListener('input', saveFormData);

function saveFormData(event) {
  const formData = {};
  new FormData(event.currentTarget).forEach((value, key) => {
    formData[key] = value;
  });

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

window.addEventListener('load', loadFormData);

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { name, email, message } = JSON.parse(savedData);
    form.elements.email.value = email;
    form.elements.message.value = message;
    form.elements.name.value = name;
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');

  const nameValue = form.elements.name.value.trim();
  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (emailValue === '' || messageValue === '' || nameValue === '') {
    iziToast.error({
      title: 'Error',
      message: `'Please enter your email and message!'`,
      position: 'topRight',
    });
    return;
  }
  getInputValue(nameValue);

  console.log({ name: nameValue, email: emailValue, message: messageValue });

  form.reset();
}

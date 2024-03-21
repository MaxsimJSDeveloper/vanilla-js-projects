import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', getValues);

function getValues(event) {
  event.preventDefault();

  const state = form.elements.state.value.toLowerCase();
  const delay = form.elements.delay.value;
  const promise = createPromise(state, delay);

  promise
    .then(() => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay} ms`,
        position: 'topRight',
      });
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay} ms`,
        position: 'topRight',
      });
    });

  form.reset();
}

function createPromise(state, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

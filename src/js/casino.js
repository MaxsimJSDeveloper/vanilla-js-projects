import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.playing-field');

startBtn.addEventListener('click', () => {
  const promises = [];
  for (let i = 0; i < 3; i += 1) {
    container.children[i].textContent = '';
    const promise = createPromise((i + 1) * 100);
    promise
      .then(smile => {
        container.children[i].textContent = smile;
      })
      .catch(smile => {
        container.children[i].textContent = smile;
      });

    promises.push(promise);
  }

  Promise.allSettled(promises).then(result => {
    const isWon = result.map(el => {
      return el.reason || el.value;
    });

    if (isWon.every(el => el === '🤑') || isWon.every(el => el === '😍')) {
      iziToast.success({
        message: 'Win',
        position: 'topRight',
      });
    } else {
      iziToast.error({
        message: 'Lose',
        position: 'topRight',
      });
    }
  });
});

function createPromise(delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.3) {
        resolve('🤑');
      } else {
        reject('😍');
      }
    }, delay);
  });

  return promise;
}

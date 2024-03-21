import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const timeInFuture = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    currentDifferenceDate(selectedDates[0]);
  },
};

flatpickr(timeInFuture, options);

const btnStartRef = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

let timerId = null;

btnStartRef.setAttribute('disabled', true);
btnStartRef.classList.add('start-button-dis');
btnStartRef.addEventListener('click', onBtnStart);

function onBtnStart() {
  const futureTime = new Date(timeInFuture.value).getTime();
  startTimer(futureTime);
}

function startTimer(futureTime) {
  btnStartRef.setAttribute('disabled', true);
  btnStartRef.classList.add('start-button-dis');
  timeInFuture.setAttribute('disabled', true);

  const currentTime = Date.now();
  const diff = futureTime - currentTime;

  if (diff <= 0) {
    iziToast.success({
      title: 'OK',
      message: 'Successfully inserted record!',
      position: 'topRight',
    });
    clearTimeout(timerId);
    return;
  }

  renderDate(convertMs(diff));

  timerId = setTimeout(() => {
    startTimer(futureTime);
  }, 1000);
}

function currentDifferenceDate(selectedDate) {
  const currentDate = Date.now();

  if (selectedDate < currentDate) {
    btnStartRef.setAttribute('disabled', true);
    btnStartRef.classList.add('start-button-dis');
    clearTimeout(timerId);
    return iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
      position: 'topRight',
    });
  }

  const timeDifference = selectedDate.getTime() - currentDate;
  const formatDate = convertMs(timeDifference);

  renderDate(formatDate);
  btnStartRef.removeAttribute('disabled');
  btnStartRef.classList.remove('start-button-dis');
}

function renderDate(formatDate) {
  secondsRef.textContent = formatDate.seconds;
  minutesRef.textContent = formatDate.minutes;
  hoursRef.textContent = formatDate.hours;
  daysRef.textContent = formatDate.days;
}

function convertMs(ms) {
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / (1000 * 60)) % 60;
  const hours = Math.floor(ms / (1000 * 60 * 60)) % 24;
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  return {
    days: days < 10 ? '0' + days : days,
    hours: hours < 10 ? '0' + hours : hours,
    minutes: minutes < 10 ? '0' + minutes : minutes,
    seconds: seconds < 10 ? '0' + seconds : seconds,
  };
}

import './sass/main.scss';

let timerId = null;
let rendomColor = null;
const IS_ACTIVE = 'is-active;'

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
}
refs.btnStart.classList.add(IS_ACTIVE)

savedBodyColor()

refs.btnStart.addEventListener('click', onBtnStartClick)
refs.btnStop.addEventListener('click', onBtnStopClick)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnStartClick() {
  timerId = setInterval(() => {
    rendomColor = getRandomHexColor()
    refs.body.style.backgroundColor = rendomColor
  }, 1000);

  refs.btnStart.removeEventListener('click', onBtnStartClick)
}

function onBtnStopClick() {
  clearInterval(timerId);
  refs.btnStart.classList.remove(IS_ACTIVE)

  localStorage.setItem(IS_ACTIVE, rendomColor)

  refs.btnStart.addEventListener('click', onBtnStartClick)
}

function savedBodyColor() {
  const savedBodyColor = localStorage.getItem(IS_ACTIVE);

  if (savedBodyColor) {
    refs.body.style.backgroundColor = savedBodyColor;
  }
}

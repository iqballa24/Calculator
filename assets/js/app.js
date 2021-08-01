/* eslint-disable no-loop-func */
/* eslint-disable import/extensions */
import {
  updateDisplay, clearDisplay, inputDigit, inverseNumber, handleOperator, calculation, calculator, percenNumber,
} from './calc.js';
import registerServiceWorker from './registerServiceWorker.js';
import { switchTheme, themeOnStorage } from './theme.js';

// Config theme
const btnTheme = document.querySelector('.theme');
btnTheme.addEventListener('click', () => {
  switchTheme();
});
themeOnStorage();

// Calculation
const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
  button.addEventListener('click', (event) => {
    // mendapatkan objek elemen yang diklik
    const { target } = event;

    if (target.classList.contains('clear')) {
      clearDisplay();
      updateDisplay();
      return;
    }

    if (target.classList.contains('negative')) {
      inverseNumber();
      updateDisplay();
      return;
    }

    if (target.classList.contains('equals')) {
      calculation();
      updateDisplay();
      return;
    }

    if (target.classList.contains('operator')) {
      handleOperator(target.innerText);
      return;
    }

    if (target.classList.contains('decimals')) {
      if (calculator.displayNumber.includes('.')) {
        document.querySelector('#displayNumber').innerHTML = `${calculator.displayNumber}`;
      }
    }

    if (target.classList.contains('percen')) {
      percenNumber();
      updateDisplay();
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
}

const btnDel = document.querySelector('.button__del');
btnDel.addEventListener('click', () => {
  const numbers = calculator.displayNumber.split('').slice(0, -1);
  if (numbers.length === 0) {
    calculator.displayNumber = '0';
  } else {
    calculator.displayNumber = numbers.join('');
  }

  updateDisplay();
});

// SERVICE WORKER
if (!('serviceWorker' in navigator)) {
  console.error('ServiceWorker: Browser tidak mendukung.');
} else {
  registerServiceWorker();
}

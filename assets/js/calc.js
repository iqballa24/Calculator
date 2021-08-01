const calculator = {
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  secondNumber: false,
};

const prevNumber = document.querySelector('#prevNumber');

function updateDisplay() {
  document.querySelector('#displayNumber').innerHTML = calculator.displayNumber;
}

function clearDisplay() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.secondNumber = false;
}

function inputDigit(digit) {
  if (calculator.displayNumber === '0') {
    calculator.displayNumber = digit;
  } else if (calculator.displayNumber === 'Infinity' || calculator.displayNumber === 'Nan') {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}

function inverseNumber() {
  if (calculator.displayNumber === '0') {
    return;
  }
  calculator.displayNumber *= -1;
}

function handleOperator(operator) {
  if (!calculator.secondNumber) {
    calculator.operator = operator;
    calculator.secondNumber = true;
    calculator.firstNumber = calculator.displayNumber;

    // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
    calculator.displayNumber = '0';

    // mengubah display pada previous number
    prevNumber.innerHTML = `${calculator.firstNumber} <span style="color: #DC7A7B">${calculator.operator}</span>`;
  } else {
    alert('Operator sudah ditetapkan');
  }
}

function calculation() {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert('Anda belum menetapkan operator');
  }

  let result = 0;
  switch (calculator.operator) {
    case '+':
      result = Number(calculator.firstNumber) + Number(calculator.displayNumber);
      break;
    case '-':
      result = Number(calculator.firstNumber) - Number(calculator.displayNumber);
      break;
    case '/':
      result = Number(calculator.firstNumber) / Number(calculator.displayNumber);
      break;
    case 'x':
      result = Number(calculator.firstNumber) * Number(calculator.displayNumber);
      break;
    default:
      return;
  }

  // mengubah display pada previous number
  prevNumber.innerHTML = `${calculator.firstNumber} <span style="color: #DC7A7B">${calculator.operator}</span> ${calculator.displayNumber}`;

  calculator.displayNumber = String(result);
  calculator.secondNumber = false;
  calculator.operator = null;
}

function percenNumber() {
  if (calculator.displayNumber === '0') {
    return;
  }
  calculator.displayNumber /= 100;
}

export {
  updateDisplay, clearDisplay, inputDigit, inverseNumber, handleOperator, calculator, calculation, percenNumber,
};

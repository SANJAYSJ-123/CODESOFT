let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  firstOperand = '';
  secondOperand = '';
  operator = '';
  document.getElementById('display').value = '';
}

function setOperator(op) {
  if (firstOperand === '') {
    firstOperand = currentInput;
    operator = op;
    currentInput = '';
  } else if (currentInput !== '') {
    secondOperand = currentInput;
    calculate();
    operator = op;
    firstOperand = document.getElementById('display').value;
    currentInput = '';
  }
}

function calculate() {
  if (firstOperand === '' || currentInput === '') return;

  secondOperand = currentInput;
  let result = 0;

  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }

  document.getElementById('display').value = result;
  firstOperand = result;
  currentInput = '';
  operator = '';
}
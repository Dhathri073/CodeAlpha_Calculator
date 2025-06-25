
const display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value === '') return;
  const lastChar = display.value.slice(-1);
  if ('+-*/%'.includes(lastChar)) return;
  display.value += operator;
}

function appendDot() {
  const lastNumber = display.value.split(/[\+\-\*\/\%]/).pop();
  if (!lastNumber.includes('.')) {
    display.value += '.';
  }
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace('%', '/100'));
  } catch {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', function(e) {
  const key = e.key;
  if (!isNaN(key)) appendNumber(key);
  if ('+-*/%'.includes(key)) appendOperator(key);
  if (key === '.') appendDot();
  if (key === 'Enter') calculate();
  if (key === 'Backspace') backspace();
  if (key === 'Escape') clearDisplay();
});

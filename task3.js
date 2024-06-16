let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let operand1 = null;

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = null;
    display.innerText = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput;
}

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (operand1 !== null) {
        calculateResult();
    }
    operand1 = parseFloat(currentInput);
    operator = op;
    currentInput = '';
}

function calculateResult() {
    if (operand1 === null || currentInput === '') return;
    let operand2 = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            return;
    }
    display.innerText = result;
    currentInput = result;
    operand1 = null;
    operator = '';
}

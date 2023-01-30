const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.button-equals');
const clearButton = document.querySelector('.button-clear');
const deleteButton = document.querySelector('.button-delete');
const decimalButton = document.querySelector('.button-decimal');

let firstNumber = '';
let secondNumber = '';
let currentOperation = null;
let isClearable = false;

function updateDisplay(number){
    if(display.textContent === '0' || isClearable){
        resetScreen();
    }
    display.textContent += number;
}

function clearDisplay(){  
    firstNumber = '';
    secondNumber = '';
    currentOperation = null;
    display.textContent = '0';
}

function resetScreen(){
    display.textContent='';
    isClearable = false;
}

function evaluate(){
    if (currentOperation === null || isClearable){
        return;
    } 

    if (currentOperation === '÷' && display.textContent === '0') {
        alert("You can't divide by 0!");
        return;
    }

    secondNumber = display.textContent;
    display.textContent = roundResult(operate(currentOperation, firstNumber, secondNumber));
    currentOperation = null;

}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
  }

function deleteDisplay(){
    display.textContent = display.textContent.toString().slice(0, -1);
}

function addDecimal() {
    if (isClearable){
        resetScreen();
    } 
    if (display.textContent === ''){
        display.textContent = '0';
    }
    if (display.textContent.includes('.')){
        return;
    } 

    display.textContent += '.'
}

function setOperation(operator) {
    if (currentOperation !== null){
        evaluate();
    } 

    firstNumber = display.textContent;
    currentOperation = operator;
    display.textContent = `${firstNumber}`;
    isClearable = true;
    
}

function add(x, y){
    return x+y;
}

function subtract(x, y){
    return x-y;
}

function multiply(x, y){
    return x*y;
}

function divide(x, y){
    return x/y;
}

function operate(operator, x, y){
    x = Number(x)
    y = Number(y)
        if(operator == '+'){
            return add(x, y);
        }else if(operator == '-'){
            return subtract(x,y);
        }else if(operator == '*'){
            return multiply(x, y);
        }else if(operator == '÷'){
            return divide(x, y);
        }else{
            return null;
        }
    return;
}

buttons.forEach(button => button.addEventListener('click', () => updateDisplay(button.textContent)));
operatorButtons.forEach((button) => button.addEventListener('click',  () => setOperation(button.textContent)));

equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clearDisplay)
deleteButton.addEventListener('click', deleteDisplay)
decimalButton.addEventListener('click', addDecimal)
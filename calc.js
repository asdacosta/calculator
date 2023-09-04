function operate(num1, num2, sign) {
    switch (sign) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 === 0 ? "Absurd" : num1 / num2;
        default:
            return num2;
    }
}

let  currentValue = 0,
    firstOperand = null,
    secondOperand = null,
    firstOperator = null,
    secondOperator = null,
    result = null;

const buttons = document.querySelectorAll('button');

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.key}']`);
    key.click();
});

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = currentValue;
    if(currentValue.length > 9) {
        display.innerText = currentValue.substring(0, 9);
    }
}
  
updateDisplay();

function clickButton() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('operand')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            } else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if(buttons[i].classList.contains('decimal')) {
                inputDecimal(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('percent')) {
                inputPercent(currentValue);
                updateDisplay();
            } else if(buttons[i].classList.contains('sign')) {
                inputSign(currentValue);
                updateDisplay();
            } else if(buttons[i].classList.contains('clear'))
                clearDisplay();
                updateDisplay();
        }
    )}
}

clickButton();

function inputOperand(operand) {
    if(firstOperator === null) {
        if(currentValue === '0' || currentValue === 0) {
            currentValue = operand;
        } else if(currentValue === firstOperand) {
            currentValue = operand;
        } else {
            currentValue += operand;
        }
    } else {
        if(currentValue === firstOperand) {
            currentValue = operand;
        } else {
            currentValue += operand;
        }
    }
}

function inputOperator(operator) {
    if(firstOperator != null && secondOperator === null) {
        secondOperator = operator;
        secondOperand = currentValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        currentValue = roundAccurately(result, 15).toString();
        firstOperand = currentValue;
        result = null;
    } else if(firstOperator != null && secondOperator != null) {
        secondOperand = currentValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        secondOperator = operator;
        currentValue = roundAccurately(result, 15).toString();
        firstOperand = currentValue;
        result = null;
    } else { 
        firstOperator = operator;
        firstOperand = currentValue;
    }
}

function inputEquals() {
    if(firstOperator === null) {
        currentValue = currentValue;
    } else if(secondOperator != null) {
        secondOperand = currentValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        if(result === 'Absurd') {
            currentValue = 'Absurd';
        } else {
            currentValue = roundAccurately(result, 15).toString();
            firstOperand = currentValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        secondOperand = currentValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        if(result === 'Absurd') {
            currentValue = 'Absurd';
        } else {
            currentValue = roundAccurately(result, 15).toString();
            firstOperand = currentValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
}

function inputDecimal(dot) {
    if(currentValue === firstOperand || currentValue === secondOperand) {
        currentValue = '0';
        currentValue += dot;
    } else if(!currentValue.includes(dot)) {
        currentValue += dot;
    } 
}

function inputPercent(num) {
    currentValue = (num/100).toString();
}

function inputSign(num) {
    currentValue = (num * -1).toString();
}

function clearDisplay() {
    currentValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

function inputBackspace() {
    if(firstOperand != null) {
        firstOperand = null;
        updateDisplay();
    }
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}











// First Approach

// function add(num1, num2) {
//     return num1 + num2;
// }

// function sub(num1, num2) {
//     return num1 - num2;
// }

// function times(num1, num2) {
//     return num1 * num2;
// }

// function div(num1, num2) {
//     return num2 === 0 ? "Absurd" : num1 / num2;
// }

// function operate(num1, sign, num2) {
//     switch (sign) {
//         case '+':
//             return add(num1, num2);
//         case '-':
//             return sub(num1, num2);
//         case '*':
//             return times(num1, num2);
//         case '/':
//             return div(num1, num2);
//     }
// }

// let  currentValue = 0;
// let box = document.querySelector('.result');
// let numButtons = document.querySelectorAll('.light button, .light2 button');
// let firstClickNum = true;

// function setupNumButtonClick () {
//     numButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             if (firstClickNum) {
//                 box.innerHTML = '';
//                 firstClickNum = false;
//             }
//             if (button.textContent === '.') {
//                 button.disabled = true;
//             }

//             if (firstClickSign) {
//                 if (secNum === null) {
//                     box.innerHTML = '';
//                 }
//                 secNum = +(box.textContent + button.textContent);
//             }
                
//             currentValue = button.textContent;
//             box.textContent += currentValue;
//         })
//     })
// }

// let firstNum = null,
//     operator = '',
//     secNum = null;

// setupNumButtonClick();
// firstClickSign = false;

// let signButtons = document.querySelectorAll('.right button:not(.equals)');
// signButtons.forEach(sign => {
//     sign.addEventListener('click', () => {
//         signButtons.forEach(signs => {
//         signs.style.backgroundColor = '';
//         signs.style.color = '';
//         signs.style.fontWeight = '';
//         })

//         sign.style.backgroundColor = 'white';
//         sign.style.color = 'orange';
//         sign.style.fontWeight = 'bold';

//         if (!firstClickSign) {
//             firstNum = +box.textContent;
//             firstClickSign = true;
//         } else {
//             if (box.textContent !== '') {
//                 secNum = +box.textContent;
//             } else {
//                 firstNum = null;
//             }
            
//         }

//         operator = sign.textContent;
//     })
// })

// let result = 0;
// let equals = document.querySelector('.equals');

// equals.addEventListener('click', () => {
//     let fNum = +firstNum;
//     let sNum = +secNum;

//     if (firstNum !== null && secNum !== null && operator !== '') {
//         result = operate(fNum, operator, sNum);
//         box.textContent = result;
//     }
//     firstNum = result;
//     secNum = null;
// })

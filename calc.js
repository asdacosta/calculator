function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function times(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num2 === 0 ? "Impossible!" : num1 / num2;
}

let firstNum = 0,
    operator = '',
    secNum = 0;

function operate(num1, sign, num2) {
    if (sign === '+') {
        return add(num1, num2);
    } else if (sign === '-') {
        return sub(num1, num2);
    } else if (sign === '*') {
        return times(num1, num2);
    } else if (sign === '/') {
        return div(num1, num2);
    }
}

let  currentValue = 0;
let box = document.querySelector('.result');

let firstClick = true;
let numButtons = document.querySelectorAll('.light button, .light2 button');
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstClick) {
            box.innerHTML = '';
            firstClick = false;
        }
        if (numButtons[10].textContent === '.') {
            numButtonsArray = Array.from(numButtons);
            numButtonsArray.splice(10, 1);
        }

        currentValue = button.textContent;
        box.textContent += currentValue;
    })
})


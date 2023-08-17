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
let numButtons = document.querySelectorAll('.light button');
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentValue = button.textContent;
    })
})

let box = document.querySelector('.result');
box.textContent = '';
box.textContent = currentValue;
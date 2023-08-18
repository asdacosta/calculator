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

let firstClickNum = true;
let numButtons = document.querySelectorAll('.light button, .light2 button');
firstNum = numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstClickNum) {
            box.innerHTML = '';
            firstClickNum = false;
        }
        if (button.textContent === '.') {
            button.disabled = true;
        }

        currentValue = button.textContent;
        box.textContent += currentValue;
    })
})

let signButtons = document.querySelectorAll('.right button');
operator = signButtons.forEach(sign => {
    sign.addEventListener('click', () => {
        signButtons.forEach(signs => {
        signs.style.backgroundColor = '';
        signs.style.color = '';
        signs.style.fontWeight = '';
        })
        sign.style.backgroundColor = 'white';
        sign.style.color = 'orange';
        sign.style.fontWeight = 'bold';
    })
})

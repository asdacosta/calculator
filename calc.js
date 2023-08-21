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

function operate(num1, sign, num2) {
    switch (sign) {
        case '+':
            return add(num1, num2);
        case '-':
            return sub(num1, num2);
        case '*':
            return times(num1, num2);
        case '/':
            return div(num1, num2);
    }
}

let  currentValue = 0;
let box = document.querySelector('.result');

let numButtons = document.querySelectorAll('.light button, .light2 button');
let firstClickNum = true;

function setupNumButtonClick () {
    numButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (firstClickNum) {
                box.innerHTML = '';
                firstClickNum = false;
            }
            if (button.textContent === '.') {
                button.disabled = true;
            }

            if (firstClickSign) {
                if (secNum === null) {
                    box.innerHTML = '';
                }
                secNum = box.textContent + button.textContent;
            }
                
            currentValue = button.textContent;
            box.textContent += currentValue;
        })
    })
}

let firstNum = null,
    operator = '',
    secNum = null;

setupNumButtonClick();
firstClickSign = false;

let signButtons = document.querySelectorAll('.right button:not(.equals)');
signButtons.forEach(sign => {
    sign.addEventListener('click', () => {
        signButtons.forEach(signs => {
        signs.style.backgroundColor = '';
        signs.style.color = '';
        signs.style.fontWeight = '';
        })

        sign.style.backgroundColor = 'white';
        sign.style.color = 'orange';
        sign.style.fontWeight = 'bold';

        if (!firstClickSign) {
            firstNum = box.textContent;
            firstClickSign = true;
        } else {
            if (box.textContent !== '') {
                secNum = box.textContent;
            } else {
                firstNum = null;
            }
            
        }

        operator = sign.textContent;
    })
})

let result = 0;
let equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
    let fNum = +firstNum;
    let sNum = +secNum;

    if (firstNum !== null && secNum !== null && operator !== '') {
        operate(fNum, operator, sNum);
        box.textContent = result;
    }
    secNum = null;
    firstNum = result;
})

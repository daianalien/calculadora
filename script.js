let display = document.getElementById('result_display');
let decimalSeparator = '.';

function calculate(value) {
    let text = display.textContent;
    if (text === '0' || text === 'Erro') {
        display.innerHTML = value;
    } else {
        display.innerHTML += value;
    }
}

function result() {
    let text = display.textContent;

    // Substitua vírgulas por pontos
    text = text.replace(/,/g, decimalSeparator);

    try {
        const result = eval(text);
        display.innerHTML = result;
    } catch (err) {
        display.innerHTML = 'Erro';
    }
}

function clr() {
    display.innerHTML = '0';
}

function del() {
    let text = display.textContent;
    if (text.length > 0) {
        display.innerHTML = text.slice(0, -1);
        if (display.innerHTML === '') {
            display.innerHTML = '0';
        }
    }
}

function toggleDecimalSeparator() {
    if (decimalSeparator === '.') {
        decimalSeparator = ',';
    } else {
        decimalSeparator = '.';
    }
}

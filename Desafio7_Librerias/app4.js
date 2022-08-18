//Primer acumulador
let firstNumber = [];
//Resultado
let result = [];

//Tomo del html el display donde van a aparecer los numeros
const display = document.getElementById('calc__display');

//Tomo la operacion equal que me devuelve el resultado con un evento
const btnResult = document.getElementById('calc__result');
btnResult.addEventListener('click', () => {
    calculator();
});
function calculator() { //funcion que hace el calculo
    result.push(firstNumber.join(''));
    display.innerText = eval(result.join(''));
};

//Tomamos los operadores y le agregamos el evento
const btnOperations = document.querySelectorAll('#calc__operations');
btnOperations.forEach((btn) => {
    btn.addEventListener('click', () => {
        operation(btn.innerText);
    });
});
//Funcion que guarda el calculo y devuelve el resultado
function operation(operation) {
    result.push(firstNumber.join(''), operation);
    firstNumber = [];
    display.innerText = 0;
};

//Tomamos botones de los numeros y le agregamos el evento de ver en pantalla
const btnNumbers = document.querySelectorAll('#calc__numbers');
btnNumbers.forEach((btn) => {
    btn.addEventListener('click', () => {
        addNumber(btn.innerText);
    });
});
//Funcion que muestra los numeros en pantalla y guarda en mi primer acumulador
function addNumber(number){
    display.innerText === '0' ? display.innerText = number : display.innerText += number;
    firstNumber.push(number);
};

//Boton y funcion para dejar el display en blanco
const btnClear = document.getElementById('calc__clear');
btnClear.addEventListener('click', () => {
    clearDisplay();
});
function clearDisplay() { //funcion que deja en cero el display
    display.innerText = 0;
    firstNumber = [];
    result = [];
};

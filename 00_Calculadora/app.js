let display = document.getElementById("display");
let operacion = "";
let resultado = 0;

const agregarNumero = (num) => {
    display.value += num;
};

const operar = (op) => {
    operacion = op;
    resultado = parseFloat(display.value);
    display.value = "";
};

const calcular = (op) => {
    let segundoNumero = parseFloat(display.value);

    switch (operacion) {
        case '+':
            resultado += segundoNumero;
            break;
        case '-':
            resultado -= segundoNumero;
            break;
        case '*':
            resultado *= segundoNumero;
            break;
        case '/':
            resultado /= segundoNumero;
            break;
    }

    display.value = resultado;
}

const limpiar = (op) => {
    display.value = "";
    operacion = "";
    resultado = 0;
}
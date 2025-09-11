// 02-operadores.js Operadores Logicos

function operadoresLogicos() {
    const output = document.getElementById('output');

    let num1 = prompt("Ingresa el primer número:");
    let num2 = prompt("Ingresa el segundo número:");

    // Convertir las entradas a números
    num1 =Number(num1);
    num2 =Number(num2);

    // Validar que las entradas sean números
    if (isNaN(num1) || isNaN(num2)) {
        output.textContent = "Por favor, ingresa valores numéricos válidos.";
        return;
    }

    let resultado = 'Numeros ingresados: ' + num1 + ' y ' + num2 + '\n';

    // Operadores de Comparación

    resultado += `\nOperadores de Comparación:\n`;
    resultado += `${num1} == ${num2} : ${num1 == num2}\n`; // Igualdad
    resultado += `${num1} === ${num2} : ${num1 === num2}\n`; // Igualdad estricta
    resultado += `${num1} != ${num2} : ${num1 != num2}\n`; // Desigualdad
    resultado += `${num1} !== ${num2} : ${num1 !== num2}\n`; // Desigualdad estricta
    resultado += `${num1} > ${num2} : ${num1 > num2}\n`; // Mayor que
    resultado += `${num1} < ${num2} : ${num1 < num2}\n`; // Menor que
    resultado += `${num1} >= ${num2} : ${num1 >= num2}\n`; // Mayor o igual que
    resultado += `${num1} <= ${num2} : ${num1 <= num2}\n`; // Menor o igual que

    // Operadores Lógicos   
    resultado += `\nOperadores Lógicos:\n`; 
    resultado += `Ambos Numueros Son Positivos: ${num1 >0 && {num2} > 0}\n'}`;
    resultado += `Al Menos Uno Es Positivo: ${num1 > 0 || num2 > 0}\n`;
    resultado += `No Son Iguales: ${!(num1 === num2)}\n`;

    if (num1 === num2) {
        resultado += `Los números son iguales.\n`;
    } else if (num1 > num2) {
        resultado += `El número mayor es: ${num1}\n`;
    } else {
        resultado += `El número mayor es: ${num2}\n`;
    }

    output.textContent = resultado;

}

function limpiar() {
    document.getElementById('output').textContent = '';
}
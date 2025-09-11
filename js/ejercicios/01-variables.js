// Fundamentos: Variables y typeof 

function ejercicio1() {
    const output = document.getElementById('output');
    let resultado = '';
 
    //1. String
    let miTexto = "Hola, soy una cadena de texto.";
    resultado += `1. String: ${miTexto} (Tipo: ${typeof miTexto})\n`;

    //2. Number
    let miNumero = 42;
    resultado += `2. Number: ${miNumero} (Tipo: ${typeof miNumero})\n`;

    //3. Boolean
    let miBooleano = true;
    resultado += `3. Boolean: ${miBooleano} (Tipo: ${typeof miBooleano})\n`;

    //4. Undefined
    let miIndefinido;
    resultado += `4. Undefined: ${miIndefinido} (Tipo: ${typeof miIndefinido})\n`;

    //5 .Object
    let miObjeto = { nombre: "Juan", edad: 30 };
    resultado += `5. Object: ${JSON.stringify(miObjeto)} (Tipo: ${typeof miObjeto})\n`;
    resultado += 'Ejercicio finalizado. MOstramos 5 tipos de datos diferentes.';

    output.textContent = resultado;
 }

 function limpiar() {
    document.getElementById('output').textContent = '';
 }
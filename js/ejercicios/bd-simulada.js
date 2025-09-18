let usarios = JSON.parse(localStorage.getItem('usuarios')) || [];
let nextId = parseInt(localStorage.getItem('nextId')) || 1;

function guardar() {
    localStorage.setItem('usuarios', JSON.stringify(usarios));
    localStorage.setItem('nextId', nextId.toString());
}

function log(message) {
    const output = document.getElementById('output');
    output.textContent = message;
}

function crear() {
    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nombre || !email) {
        log('Por favor, completa todos los campos.');
        return;
    }

    const nuevoUsuario = { id: nextId++, nombre, email };
    usarios.push(nuevoUsuario);
    guardar();
    log(`Usuario creado: ${JSON.stringify(nuevoUsuario)}`);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}

function leer() {

    usarios.forEach(element => {
        log(`ID: ${nuevoUsuario.id}, Nombre: ${nuevoUsuario.nombre}, Email: ${nuevoUsuario.email}`);
    });

}

function actualizar() {
    const usuarios = usuarios[0]
    const nombreAnterior = usuarios.nombre;

    usuarios.nombre = nombre
    usuarios.email = email

    guardar();

}

function eliminar() {
    if (usarios.length === 0) {
        log('No hay usuarios para eliminar.');
        return;
    }
    const eliminado = usarios.pop();
    guardar();

}

function limpiar() {
    document.getElementById('output').textContent = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}


let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
let nextId = parseInt(localStorage.getItem('nextId') || '1');

function saveData() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('nextId', nextId.toString());
}

function log(msg) {
    document.getElementById('output').textContent += msg + '\n';
}

function crear() {
    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nombre || !email) {
        log('Completa nombre y email');
        return;
    }

    // Validar email básico
    if (!email.includes('@')) {
        log('Email no válido');
        return;
    }

    // Verificar si email ya existe
    if (usuarios.find(u => u.email === email)) {
        log('Email ya existe');
        return;
    }

    const nuevoUsuario = {
        id: nextId++,
        nombre: nombre,
        email: email,
        fechaCreacion: new Date().toLocaleString()
    };

    usuarios.push(nuevoUsuario);
    saveData();

    log(`Usuario creado: ${nombre} (ID: ${nuevoUsuario.id})`);

    // Limpiar campos
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}

function leer() {
    if (usuarios.length === 0) {
        log('📋 No hay usuarios registrados');
        return;
    }

    log('Lista de usuarios:');
    log('-------------------');
    usuarios.forEach(usuario => {
        log(`ID: ${usuario.id}`);
        log(`   Nombre: ${usuario.nombre}`);
        log(`   Email: ${usuario.email}`);
        log(`   Creado: ${usuario.fechaCreacion}`);
        log('');
    });
    log(`Total: ${usuarios.length} usuario(s)`);
}

function actualizar() {
    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nombre || !email) {
        log('Completa nombre y email para actualizar');
        return;
    }

    if (usuarios.length === 0) {
        log('No hay usuarios para actualizar');
        return;
    }


    const usuario = usuarios[0];
    const nombreAnterior = usuario.nombre;

    usuario.nombre = nombre;
    usuario.email = email;
    usuario.fechaActualizacion = new Date().toLocaleString();

    saveData();

    log(`Usuario actualizado:`);
    log(`Anterior: ${nombreAnterior}`);
    log(`Nuevo: ${nombre} - ${email}`);
}

function eliminar() {
    if (usuarios.length === 0) {
        log('No hay usuarios para eliminar');
        return;
    }

    // Eliminar el último usuario
    const usuarioEliminado = usuarios.pop();
    saveData();

    log(`Usuario eliminado: ${usuarioEliminado.nombre} (ID: ${usuarioEliminado.id})`);
    log(`Usuarios restantes: ${usuarios.length}`);
}

function limpiar() {
    document.getElementById('output').textContent = '';
}

// Función extra: eliminar todos los datos
function resetearDatos() {
    if (confirm('¿Estás seguro de que quieres eliminar todos los usuarios?')) {
        usuarios = [];
        nextId = 1;
        saveData();
        log('Todos los datos eliminados');
    }
}

// Mostrar datos al cargar
window.onload = function () {
    log('Sistema iniciado');
    log(`Usuarios en base: ${usuarios.length}`);
    if (usuarios.length > 0) {
        log('Usa "Ver Todos" para mostrar los usuarios existentes');
    }
};
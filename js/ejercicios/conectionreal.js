let db = null;
let usuarios = [];
let nextId = 1;

async function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('ClientDB', 1);
        request.onerror = () => {
            log('Error al abrir IndexedDB');
            reject(request.error);
        };
        request.onsuccess = () => {
            db = request.result;
            log('Conectado a ClientDB (IndexedDB)');
            loadUsuarios().then(() => {
                resolve();
            });
        };
        request.onupgradeneeded = (event) => {
            db = event.target.result;
            
            if (!db.objectStoreNames.contains('usuarios')) {
                const store = db.createObjectStore('usuarios', { 
                    keyPath: 'id', 
                    autoIncrement: true 
                });
                
                store.createIndex('email', 'email', { unique: true });
                store.createIndex('nombre', 'nombre', { unique: false });
                
                log('📁 Tabla usuarios creada');
            }
        };
    });
}

async function loadUsuarios() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['usuarios'], 'readonly');
        const store = transaction.objectStore('usuarios');
        const request = store.getAll();       
        request.onsuccess = () => {
            usuarios = request.result.sort((a, b) => a.id - b.id);
            if (usuarios.length > 0) {
                nextId = Math.max(...usuarios.map(u => u.id)) + 1;
            }
            resolve();
        };
        
        request.onerror = () => {
            log('Error al cargar usuarios');
            reject(request.error);
        };
    });
}

async function addUsuario(usuario) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['usuarios'], 'readwrite');
        const store = transaction.objectStore('usuarios');
        const request = store.add(usuario);
        
        request.onsuccess = () => {
            resolve(request.result);
        };
        
        request.onerror = () => {
            reject(request.error);
        };
    });
}

async function updateUsuario(id, datosActualizados) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['usuarios'], 'readwrite');
        const store = transaction.objectStore('usuarios');
        
        const getRequest = store.get(id);
        
        getRequest.onsuccess = () => {
            const usuario = getRequest.result;
            if (usuario) {
                Object.assign(usuario, datosActualizados);
                usuario.fechaActualizacion = new Date().toLocaleString();
                
                const putRequest = store.put(usuario);
                putRequest.onsuccess = () => resolve(usuario);
                putRequest.onerror = () => reject(putRequest.error);
            } else {
                reject(new Error('Usuario no encontrado'));
            }
        };
        
        getRequest.onerror = () => reject(getRequest.error);
    });
}

async function deleteUsuario(id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['usuarios'], 'readwrite');
        const store = transaction.objectStore('usuarios');
        const request = store.delete(id);
        
        request.onsuccess = () => {
            resolve();
        };
        
        request.onerror = () => {
            reject(request.error);
        };
    });
}

async function emailExists(email) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['usuarios'], 'readonly');
        const store = transaction.objectStore('usuarios');
        const index = store.index('email');
        const request = index.get(email);
        
        request.onsuccess = () => {
            resolve(!!request.result);
        };
        
        request.onerror = () => {
            reject(request.error);
        };
    });
}

function log(msg) {
    document.getElementById('output').textContent += msg + '\n';
}

async function crear() {
    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nombre || !email) {
        log('Completa nombre y email');
        return;
    }
    if (!email.includes('@')) {
        log('Email no válido');
        return;
    }
    try {
        const exists = await emailExists(email);
        if (exists) {
            log('Email ya existe');
            return;
        }

        const nuevoUsuario = {
            nombre: nombre,
            email: email,
            fechaCreacion: new Date().toLocaleString()
        };

        const id = await addUsuario(nuevoUsuario);
        await loadUsuarios();

        log(`Usuario creado: ${nombre} (ID: ${id})`);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';

    } catch (error) {
        log('Error al crear usuario: ' + error.message);
    }
}

async function leer() {
    await loadUsuarios();
    
    if (usuarios.length === 0) {
        log('No hay usuarios registrados');
        return;
    }

    log('📋 Lista de usuarios:');
    log('-------------------');
    usuarios.forEach(usuario => {
        log(`ID: ${usuario.id}`);
        log(`   Nombre: ${usuario.nombre}`);
        log(`   Email: ${usuario.email}`);
        log(`   Creado: ${usuario.fechaCreacion}`);
        if (usuario.fechaActualizacion) {
            log(`   Actualizado: ${usuario.fechaActualizacion}`);
        }
        log('');
    });
    log(`📊 Total: ${usuarios.length} usuario(s)`);
}

async function actualizar() {
    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nombre || !email) {
        log('Completa nombre y email para actualizar');
        return;
    }

    await loadUsuarios();
    if (usuarios.length === 0) {
        log('No hay usuarios para actualizar');
        return;
    }

    try {
        const usuario = usuarios[0];
        const nombreAnterior = usuario.nombre;
        const exists = await emailExists(email);
        if (exists && usuario.email !== email) {
            log('Email ya existe');
            return;
        }

        await updateUsuario(usuario.id, { nombre, email });

        log(`Usuario actualizado:`);
        log(`Anterior: ${nombreAnterior}`);
        log(`Nuevo: ${nombre} - ${email}`);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';

    } catch (error) {
        log('Error al actualizar: ' + error.message);
    }
}

async function eliminar() {
    await loadUsuarios();
    
    if (usuarios.length === 0) {
        log('No hay usuarios para eliminar');
        return;
    }

    try {
        const ultimoUsuario = usuarios[usuarios.length - 1];
        
        await deleteUsuario(ultimoUsuario.id);
        await loadUsuarios();

        log(`Usuario eliminado: ${ultimoUsuario.nombre} (ID: ${ultimoUsuario.id})`);
        log(`Usuarios restantes: ${usuarios.length}`);

    } catch (error) {
        log('Error al eliminar: ' + error.message);
    }
}

function limpiar() {
    document.getElementById('output').textContent = '';
}

async function resetearDatos() {
    if (confirm('¿Estás seguro de que quieres eliminar todos los usuarios?')) {
        try {
            const transaction = db.transaction(['usuarios'], 'readwrite');
            const store = transaction.objectStore('usuarios');
            await store.clear();
            
            await loadUsuarios();
            nextId = 1;
            
            log('Todos los usuarios eliminados');
        } catch (error) {
            log('Error al resetear: ' + error.message);
        }
    }
}

window.onload = async function () {
    log('Iniciando sistema...');
    try {
        await initDB();
        log(`Usuarios en base: ${usuarios.length}`);
        if (usuarios.length > 0) {
            log('Usa "Ver usuarios" para mostrar los usuarios existentes');
        }
    } catch (error) {
        log('Error al inicializar: ' + error.message);
    }
};

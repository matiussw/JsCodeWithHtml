# 🚀 Proyecto de Práctica JavaScript

Un proyecto completo para aprender JavaScript desde conceptos básicos hasta avanzados, con 20 ejercicios prácticos organizados por dificultad.

## 📋 Descripción

Este proyecto está diseñado para ayudarte a dominar JavaScript de manera gradual y estructurada. Cada ejercicio incluye explicaciones detalladas, código ejecutable y ejemplos prácticos que van desde variables básicas hasta algoritmos y proyectos integradores.

## 🎯 Objetivos

- ✅ Dominar los fundamentos de JavaScript
- ✅ Practicar con ejercicios progresivos
- ✅ Entender conceptos desde básicos hasta avanzados
- ✅ Desarrollar buenas prácticas de programación
- ✅ Crear una base sólida para frameworks modernos

## 📁 Estructura del Proyecto

```
JsWithHtmlAndCss/
├── index.html                         # Página principal del proyecto
├── css/
│   └── styles.css                    # Estilos principales
├── js/
│   ├── main.js                       # JavaScript principal y utilidades
│   └── ejercicios/
│       ├── 01-variables.js           # Variables y typeof
│       ├── 02-operadores.js          # Operadores lógicos y comparación
│       ├── 03-control-if.js          # Control de flujo con if/else
│       ├── 04-bucles-while.js        # Bucles while y do-while
│       ├── 05-bucle-for.js           # Bucle for y suma acumulada
│       ├── 06-switch-menu.js         # Switch con mini menú
│       ├── 07-funciones.js           # Tipos de funciones
│       ├── 08-recursividad.js        # Factorial y Fibonacci
│       ├── 09-arrays-crud.js         # Arrays CRUD básico
│       ├── 10-arrays-transform.js    # map, filter, reduce
│       ├── 11-arrays-sort-find.js    # Ordenar y buscar
│       ├── 12-matrices.js            # Matrices con arrays 2D
│       ├── 13-objetos-basico.js      # Objetos básicos
│       ├── 14-objetos-computed.js    # Propiedades computadas
│       ├── 15-object-entries.js      # Transformar objetos ↔ arrays
│       ├── 16-referencia-optional.js # Valor vs referencia
│       ├── 17-prototipos.js          # Prototipos básicos
│       ├── 18-algoritmos-arr.js      # Mini-algoritmos
│       ├── 19-gestor-tareas.js       # Proyecto integrador 1
│       ├── 20-agenda-contactos.js    # Proyecto integrador 2
│       └── bd-simulada.js            # Extra: Base de datos simulada
├── ejercicios-html/
│   ├── ejercicio-01.html             # Página del ejercicio 1
│   ├── ejercicio-02.html             # Página del ejercicio 2
│   ├── ...                           # Páginas de ejercicios individuales
│   ├── ejercicio-20.html             # Página del ejercicio 20
│   └── ejercicio-BD-Simulada.html    # Extra: BD simulada
└── README.md                         # Este archivo
```

## 📚 Lista de Ejercicios

### 🔰 Básicos (1-8)
| # | Ejercicio | Descripción | Archivos |
|---|-----------|-------------|----------|
| 1 | **Variables y typeof** | Declara variables de diferentes tipos y muestra su valor y tipo | `01-variables.js` + `ejercicio-01.html` |
| 2 | **Operadores de comparación y lógicos** | Pide 2 números con prompt. Compara con >, <, === y usa &&, \|\|, ! | `02-operadores.js` + `ejercicio-02.html` |
| 3 | **Control de flujo: if/else if/else** | Pide la edad y clasifica: niño, adolescente, adulto, mayor | `03-control-if.js` + `ejercicio-03.html` |
| 4 | **Bucles while y do...while** | Imprime números del 1 al 10 con while. Pide contraseña hasta acertar con do...while | `04-bucles-while.js` + `ejercicio-04.html` |
| 5 | **Bucle for y suma acumulada** | Calcula la suma de 1 a 100. Lista los pares del 2 al 50 | `05-bucle-for.js` + `ejercicio-05.html` |
| 6 | **Switch: mini menú** | Menú con opciones: 1=Saludar, 2=Mostrar fecha, 3=Número aleatorio | `06-switch-menu.js` + `ejercicio-06.html` |
| 7 | **Funciones: declaración, expresión y flecha** | saludar(nombre), multiplicar(a,b) (expresión), cuadrado(x) (flecha) | `07-funciones.js` + `ejercicio-07.html` |
| 8 | **Recursividad: factorial y Fibonacci** | Implementa factorial(n) y fib(n) con validación | `08-recursividad.js` + `ejercicio-08.html` |

### ⚡ Intermedios (9-16)
| # | Ejercicio | Descripción | Archivos |
|---|-----------|-------------|----------|
| 9 | **Arrays: CRUD básico** | Array de frutas; agrega, elimina, busca y lista | `09-arrays-crud.js` + `ejercicio-09.html` |
| 10 | **Arrays: map, filter, reduce** | [1,2,3,4,5]: duplicar con map, filtrar pares, sumar con reduce | `10-arrays-transform.js` + `ejercicio-10.html` |
| 11 | **Arrays: ordenar y buscar** | Ordenar nombres alfabéticamente. Buscar objeto {id, nombre} con find | `11-arrays-sort-find.js` + `ejercicio-11.html` |
| 12 | **Matrices con arrays (2D)** | Crear matriz 3x3 y calcular suma de filas, columnas y diagonal | `12-matrices.js` + `ejercicio-12.html` |
| 13 | **Objetos: propiedades y métodos** | Objeto persona con propiedades y método presentarse() | `13-objetos-basico.js` + `ejercicio-13.html` |
| 14 | **Objetos: atajos y propiedades computadas** | Usar abreviación {nombre, edad} y propiedad dinámica [clave] | `14-objetos-computed.js` + `ejercicio-14.html` |
| 15 | **Transformar objetos ↔ arrays** | Usar Object.keys, Object.values, Object.entries y fromEntries | `15-object-entries.js` + `ejercicio-15.html` |
| 16 | **Valor vs referencia + encadenamiento opcional** | Demostrar diferencia entre primitivos y objetos. Usar ?. y ?? | `16-referencia-optional.js` + `ejercicio-16.html` |

### 🔥 Avanzados (17-20)
| # | Ejercicio | Descripción | Archivos |
|---|-----------|-------------|----------|
| 17 | **Prototipos: método compartido** | Función constructora Producto(nombre, precio). Método en prototipo aplicarDescuento(pct) | `17-prototipos.js` + `ejercicio-17.html` |
| 18 | **Mini-algoritmos con arrays** | Eliminar duplicados. Contar frecuencia de palabras. Rotar array k posiciones | `18-algoritmos-arr.js` + `ejercicio-18.html` |
| 19 | **Gestor de tareas (integrador)** | Array tareas con objetos {id, titulo, done}. Funciones: agregar, listar, toggle y eliminar | `19-gestor-tareas.js` + `ejercicio-19.html` |
| 20 | **Agenda de contactos (integrador)** | Array de contactos {nombre, telefono, correo}. Agregar, buscar (parcial) y listar ordenados | `20-agenda-contactos.js` + `ejercicio-20.html` |

### 🎁 Extra
| # | Ejercicio | Descripción | Archivos |
|---|-----------|-------------|----------|
| BD | **Base de datos simulada** | Sistema CRUD completo con localStorage para persistencia | `bd-simulada.js` + `ejercicio-BD-Simulada.html` |

## 🚀 Cómo Empezar

### Método 1: Usar el proyecto completo
1. **Descarga o clona** el proyecto
2. **Abre** `index.html` en tu navegador
3. **Navega** por las pestañas para ver diferentes ejercicios
4. **Ejecuta** el código directamente en la interfaz

### Método 2: Ejercicios individuales (Recomendado)
1. **Crea** la estructura de carpetas mostrada arriba
2. **Copia** los archivos de cada paso
3. **Abre** `ejercicios-html/ejercicio-01.html` para comenzar
4. **Sigue** la secuencia numérica de ejercicios

## 🔧 Instalación Paso a Paso

1. **Crear la estructura base:**
```bash
mkdir JsWithHtmlAndCss
cd JsWithHtmlAndCss
mkdir css js ejercicios-html
mkdir js/ejercicios
```

2. **Crear los archivos principales:**
```bash
touch index.html
touch css/styles.css
touch js/main.js
touch README.md
```

3. **Crear el primer ejercicio:**
```bash
touch js/ejercicios/01-variables.js
touch ejercicios-html/ejercicio-01.html
```

4. **Copiar el contenido** de cada archivo desde este README

## 💻 Comandos Útiles (Consola del Navegador)

Una vez que tengas los archivos cargados, puedes usar estos comandos en la consola:

```javascript
// Abrir herramientas de desarrollador
console.log('Presiona F12 para ver la consola');

// Ejecutar ejercicios directamente
ejercicio1(); // Para el ejercicio de variables
operadoresLogicos(); // Para el ejercicio de operadores

// Limpiar la salida
limpiar();
```

## 🎯 Metodología de Estudio

### Para Principiantes
1. **Comienza** con los ejercicios básicos (1-8)
2. **Dedica** 30-45 minutos por ejercicio
3. **Practica** cada concepto antes de avanzar
4. **Experimenta** modificando los ejemplos

### Para Intermedios
1. **Revisa** rápidamente los básicos (1-8)
2. **Enfócate** en los intermedios (9-16)
3. **Crea** variaciones de cada ejercicio
4. **Combina** conceptos de diferentes ejercicios

### Para Avanzados
1. **Dirígete** a los ejercicios avanzados (17-20)
2. **Implementa** proyectos que combinen varios conceptos
3. **Optimiza** y refactoriza el código existente
4. **Crea** tus propios ejercicios siguiendo el patrón

## 🔍 Cómo Usar Cada Ejercicio

1. **Abre** el archivo HTML del ejercicio (`ejercicios-html/ejercicio-XX.html`)
2. **Lee** la explicación y objetivos en el HTML
3. **Ejecuta** el código usando los botones
4. **Observa** los resultados en la sección de output
5. **Experimenta** modificando valores en el archivo JS
6. **Completa** los retos prácticos propuestos

## 🛠️ Herramientas Recomendadas

- **Navegador:** Chrome, Firefox o Edge (con DevTools)
- **Editor:** VS Code, Sublime Text o similar
- **Extensiones útiles:**
  - Live Server (para VS Code)
  - JavaScript (ES6) code snippets
  - Bracket Pair Colorizer

## 📱 Responsive Design

El proyecto está optimizado para:
- 💻 **Desktop:** Experiencia completa
- 📱 **Tablet:** Navegación adaptada
- 📱 **Mobile:** Interfaz simplificada

## 🤝 Contribuir

Si quieres mejorar este proyecto:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature
3. **Realiza** tus cambios
4. **Envía** un pull request

### Ideas para contribuir:
- Completar los ejercicios faltantes (3-20)
- Mejorar las explicaciones
- Añadir tests automatizados
- Crear ejercicios interactivos
- Traducir a otros idiomas

## 📈 Progreso Sugerido

- **Semana 1:** Ejercicios 1-4 (Variables, operadores, control de flujo, bucles)
- **Semana 2:** Ejercicios 5-8 (Bucles for, switch, funciones, recursividad)
- **Semana 3:** Ejercicios 9-12 (Arrays básicos, transformaciones, matrices)
- **Semana 4:** Ejercicios 13-16 (Objetos, propiedades, referencias)
- **Semana 5:** Ejercicios 17-18 (Prototipos, algoritmos)
- **Semana 6:** Ejercicios 19-20 (Proyectos integradores)

## 🆘 Solución de Problemas

### El ejercicio no se ejecuta
- Verifica que los archivos estén en la carpeta correcta
- Abre la consola del navegador (F12) para ver errores
- Asegúrate de que el archivo `.js` esté vinculado correctamente en el HTML

### Los estilos no se ven
- Verifica la ruta del archivo `styles.css` en el HTML
- Confirma que el archivo CSS existe y tiene contenido

### Error 404 al navegar entre ejercicios
- Asegúrate de que todos los archivos HTML estén creados
- Verifica que estés usando la estructura de carpetas correcta

### Prompt no funciona
- Algunos navegadores bloquean `prompt()` por seguridad
- Usa Chrome o Firefox para mejor compatibilidad
- Alternativamente, modifica el código para usar `input` del HTML

## 📚 Conceptos Clave por Ejercicio

### Básicos (1-8)
- **Variables:** let, const, var, typeof
- **Operadores:** Aritméticos, comparación, lógicos
- **Control:** if/else, switch
- **Bucles:** for, while, do-while
- **Funciones:** Declaración, expresión, arrow functions
- **Recursividad:** Casos base, llamadas recursivas

### Intermedios (9-16)
- **Arrays:** CRUD, métodos funcionales (map, filter, reduce)
- **Algoritmos:** Ordenamiento, búsqueda
- **Matrices:** Arrays 2D, recorridos
- **Objetos:** Propiedades, métodos, this
- **ES6+:** Destructuring, propiedades computadas
- **Referencias:** Primitivos vs objetos, optional chaining

### Avanzados (17-20)
- **Prototipos:** Constructor functions, herencia
- **Algoritmos:** Eliminación de duplicados, frecuencias
- **Proyectos:** Gestión de estado, CRUD completo
- **Patrones:** Modularización, separación de responsabilidades

## 📝 Notas

- **Compatibilidad:** ES6+ (navegadores modernos)
- **Dependencias:** Ninguna (JavaScript vanilla)
- **Persistencia:** localStorage en ejercicio BD simulada
- **Validaciones:** Incluidas en cada ejercicio
- **Licencia:** MIT
- **Versión:** 2.0.0

## 🏆 Certificación

Al completar todos los ejercicios, tendrás:

✅ **Fundamentos sólidos** de JavaScript  
✅ **Experiencia práctica** con algoritmos básicos  
✅ **Conocimiento de arrays y objetos** avanzado  
✅ **Manejo de prototipos** y herencia  
✅ **Portafolio** de 20+ ejercicios completados  
✅ **Base sólida** para frameworks como React, Vue, Angular  

---

## 👨‍💻 Autor

**Desarrollador JavaScript**
- Email: matiussw@gmail.com

---

## ⭐ ¿Te gustó el proyecto?

Si este proyecto te ayudó a aprender JavaScript, considera:
- Darle una ⭐ al repositorio
- Compartirlo con otros estudiantes
- Contribuir completando los ejercicios faltantes
- Dejar feedback en los issues

---

**¡Feliz aprendizaje! 🚀**
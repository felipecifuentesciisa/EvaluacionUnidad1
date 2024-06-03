// contacto.js

// Función para mostrar mensajes de confirmación o error
function mostrarMensaje(mensaje, tipo) {
    const mensajeElement = document.createElement('div');
    mensajeElement.classList.add('mensaje', tipo);
    mensajeElement.textContent = mensaje;

    const formulario = document.getElementById('formulario-contacto');
    formulario.appendChild(mensajeElement);

    setTimeout(() => {
        mensajeElement.remove();
    }, 3000);
}

// Función para validar el formulario de contacto
function validarFormulario(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    mostrarMensaje('El formulario se ha enviado correctamente. Nos pondremos en contacto contigo pronto.', 'exito');
}

// Función para actualizar el tipo de solicitud según el mensaje
function actualizarTipoSolicitud() {
    const mensaje = document.getElementById('mensaje').value.toLowerCase();
    const tipoSolicitud = document.getElementById('solicitud');

    if (mensaje.includes('compra') || mensaje.includes('adquirir') || mensaje.includes('obtener')) {
        tipoSolicitud.value = 'compra';
    } else if (mensaje.includes('venta') || mensaje.includes('vender') || mensaje.includes('ofrecer')) {
        tipoSolicitud.value = 'venta';
    }
}

// Función para agregar eventos al formulario
function agregarEventosFormulario() {
    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', validarFormulario);

    const mensajeTextarea = document.getElementById('mensaje');
    mensajeTextarea.addEventListener('input', actualizarTipoSolicitud);
}

// Función para inicializar la página de contacto
function inicializarContacto() {
    agregarEventosFormulario();
}

// Llamar a la función de inicialización cuando el documento esté cargado
document.addEventListener('DOMContentLoaded', inicializarContacto);
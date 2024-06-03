// galeria.js

// Función para abrir la ventana modal con detalles de la obra de arte
function abrirModal(imagen) {
    const modal = document.getElementById('modal');
    const modalImagen = document.getElementById('modal-imagen');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDescripcion = document.getElementById('modal-descripcion');

    modalImagen.src = imagen.src;
    modalTitulo.textContent = imagen.alt;
    modalDescripcion.textContent = imagen.dataset.descripcion;

    modal.style.display = 'block';
}

// Función para cerrar la ventana modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Función para eliminar una imagen de la grilla
function eliminarImagen(imagen) {
    const columna = imagen.parentNode;
    columna.parentNode.removeChild(columna);
}

// Función para agregar eventos de clic a las imágenes
function agregarEventosImagenes() {
    const imagenes = document.querySelectorAll('.galeria img');
    imagenes.forEach(imagen => {
        imagen.addEventListener('click', () => abrirModal(imagen));
    });
}

// Función para inicializar la galería
function inicializarGaleria() {
    agregarEventosImagenes();
    const botonCerrar = document.querySelector('.modal .btn-close');
    botonCerrar.addEventListener('click', cerrarModal);
}

// Llamar a la función de inicialización cuando el documento esté cargado
document.addEventListener('DOMContentLoaded', inicializarGaleria);
// Este archivo contiene el código JavaScript para la funcionalidad del portafolio. 
// Puede incluir interacciones y dinámicas para mejorar la experiencia del usuario.

document.addEventListener('DOMContentLoaded', () => {
    // Aquí puedes agregar la lógica para interacciones y dinámicas del portafolio.
    console.log('El portafolio ha sido cargado correctamente.');

    // Ejemplo de una función para manejar un evento de clic en un botón
    const button = document.getElementById('mi-boton');
    if (button) {
        button.addEventListener('click', () => {
            alert('¡Botón clickeado!');
        });
    }
});
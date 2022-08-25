//querySelector
const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo heading';

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para el enlace';
enlaces[0].classList.add('Nueva-clase');

//generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

//agregar href
nuevoEnlace.href = 'nosotros.html';

//agregar texto
nuevoEnlace.textContent = 'Piripitiflautica';

//agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

//agregar el elemento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//EVENTOS

console.log(1);

window.addEventListener('load', () => console.log(2)); //load espera a que todos los archivos de la pag esten listo para ejecutarse
window.onload = () => console.log(3);

document.addEventListener('DOMContentLoaded', () => console.log(4)); //DOMContentLoaded solo espera a que esté listo el html

console.log(5)

window.onscroll = () => console.log("Scrolling...");

//seleccionar elementos y agregarles evenetos
const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener('click', e => {
    e.preventDefault();//esto previene que el formulario se envíe automáticamente
    console.log(e);

    //validar un formulario
    console.log("Enviando Cuestionario...");
});
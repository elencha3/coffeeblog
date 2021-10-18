// querySelector

const heading = document.querySelector('.header__texto h2'); 
heading.textContent = 'Nuevo heading';
heading.classList.add('nueva-clase');
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto';

const heading2 = document.getElementById('heading');
console.log(heading2);

//GENERAR UN NUEVO ENLACE
const nuevoEnlace = document.createElement('A')  
//agregar href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar texto
nuevoEnlace.textContent = 'Nuevo enlace';

//agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

//Para añadirlo a la web
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//EVENTOS
console.log(1);

window.addEventListener('load', function(){ 
        console.log(2); 
});

window.onload = function (){ 
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
})
console.log(5);


window.addEventListener('load', imprimir );

function imprimir(){
    console.log(2);
}

window.onscroll = function() {
    console.log('scrolling...');
}

//Eventos inputs y textarea
const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

//simplificando código
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e){
    
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    
    //Validar el formulario
    const { nombre, email, mensaje} = datos; 
    
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; 
    } 
    //Crear alerta de formulario correcto.
    mostrarAlerta('Formulario enviado correctamente');
})

function mostrarAlerta(mensaje, error = null){

    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    }, 5000);

}

//Muestra un error en pantalla
function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    
    setTimeout(()=>{
        error.remove();
    }, 5000);
}

//Muestra un satisfaction en pantalla
function mostrarCorrecto(mensaje){
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');

    formulario.appendChild(correcto);

    //Para que desaparezca el mensaje dp de 5''
    setTimeout(()=>{
        correcto.remove();
    }, 5000);

}
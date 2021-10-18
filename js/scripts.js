// querySelector

const heading = document.querySelector('.header__texto h2'); //retorna 0 o 1 elemento
heading.textContent = 'Nuevo heading';
heading.classList.add('nueva-clase');
console.log(heading);

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');

enlaces[0].textContent = 'Nuevo texto';
//enlaces[0].classList.remove('navegacion__enlace');

//getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);


//GENERAR UN NUEVO ENLACE

const nuevoEnlace = document.createElement('A')  //Mejor usar las etiquetas en mayúsculas en javascript

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

window.addEventListener('load', function(){ //Load espera a que el Js y los archivos que dependen del HTML estén listos
        console.log(2);  //Hasta que no está cargado totalmente el documento no carga este console log
});

window.onload = function (){ //Igual que el anterior
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ //solo espera a que se descargue el HTML, pero no espera a CSS e imágenes. Este es el más usual
    console.log(4);
})
console.log(5);


//OTra manera de escribirlo es crear la funcion fuera.

window.addEventListener('load', imprimir ); //no hacen falta los paréntesis

function imprimir(){
    console.log(2);
}

window.onscroll = function() {
    console.log('scrolling...');
}

//Seleccionar elementos y asociarles eventos

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault(); //prevenimos la acción por defecto
    
//     //Validar formulario
//     console.log('enviando formulario');

// })

// El evento de submit



// Si intento ejecutar el código solo se va a hacer el primero por el prevent default.
//Cuando usar uno u otro: submit cuando sea formulario. En este caso, tienes que seleccionar en el querySelector el formulario y tiene que tener obligatoriamente un input type submit!!


//Eventos inputs y textarea

//IMPORTANTE!!!! MISMO NOMBRE EN EL OBJETO DE LOS DATOS QUE LOS ID!!
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
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos);
}


formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    
    //Validar el formulario
    const { nombre, email, mensaje} = datos; //Destructuring, qué quiero sacar = de dónde lo saco.
    
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; //Corta la ejecución del código
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


//Con esta función de arriba nos ahorramos las dos funciones de abajo.
//Muestra un error en pantalla
function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    //Para que desaparezca el mensaje dp de 5''
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




// nombre.addEventListener('input', function(e){
//     console.log(e.target.value); //Ver lo que está escribiendo en el campo el usuario
// });

// email.addEventListener('input', function(e){
//     console.log(e.target.value); //Ver lo que está escribiendo en el campo el usuario
// });

// mensaje.addEventListener('input', function(e){
//     console.log(e.target.value); //Ver lo que está escribiendo en el campo el usuario
// });


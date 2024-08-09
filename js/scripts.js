//querySelector
//se usa el llamado como en CSS  .class #id
const heading = document.querySelector('.header__texto h2');// retorna 0 o 1 elemento
heading.textContent='Nuevo Heading querySelector';
heading.classList.add('Nuevo_Heading')
console.log(heading);


//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
console.log(enlaces[1]);

enlaces[0].textContent='Nuevo Texto para enlace querySelectorAll';
enlaces[0].href = 'https://www.google.com/';
enlaces[0].classList.add('Nueva-clase');
enlaces[0].classList.add('Nueva-clase2');
enlaces[0].classList.remove('Nueva-clase');

//getElementById
const heading2= document.getElementById('heading');
console.log(heading2);


//--------------------------------------------------------------------
//Generar un nuevo enlace
//en create elemente escribir en mayuscula 
const nuevoEnlace=document.createElement('A');
//Agregar el href
nuevoEnlace.href= 'nuevo-enlace.html';
//agregar el texto
nuevoEnlace.textContent='Un Nuevo Enlace con JavaScript';
//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
//Agregar al documento html
const navegacion= document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);


//Eventos

console.log(1);

window.addEventListener('load', ()=>console.log(2));
//load espera a que el Js y los archivos que dependen del html estenlistos
window.onload=function(){
    console.log(3);
};

//DOMContentLoaded a diferencia de load o onload, 
//DOMContentLoaded solo espera que se descargue el html pero no espera el css y las imagenes
//DOMContentLoaded se usa mas
document.addEventListener('DOMContentLoaded',()=> console.log(4));

console.log(5);

//Onscroll
window.onscroll= function(){
    console.log('Scrolling... ');
};


//Seleccionar elementos y asociarles un evento

// const btnEnviar= document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', (evento)=> {
//     console.log(evento);
//     evento.preventDefault();
//     //validar un formulario
//     console.log('Enviando Formulario click');
// })




//Eventos de los inputs y textarea

const datos ={
    nombre:'',
    email:'',
    mensaje:''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario =document.querySelector('.formulario');


nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);


//Evento de submit


formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const {nombre, email, mensaje} =datos;
    if(nombre=== '' || mensaje=== '' || email===''){
        mostrarAlerta('Todos los campos son obligatorios','error');
        return;
    }
    mostrarAlerta('Enviando Formulario submit','exito')
    console.log('Enviando Formulario submit');
});


function leerTexto(evento){
    datos[evento.target.id]=evento.target.value;
    // console.log(evento.target.value); 
    console.log(datos); 
};



function mostrarAlerta(mensaje,estilo){
    const alerta = document.createElement('P');

    alerta.textContent=mensaje;
    alerta.classList.add(estilo);

    formulario.appendChild(alerta);

    //Desaparezca despues de 5 segundo
    setTimeout(()=>{
        alerta.remove();
    },5000);

};

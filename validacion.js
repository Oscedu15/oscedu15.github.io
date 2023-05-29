const nombre = document.getElementById("name")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const formulario = document.getElementById("form")
const parrafo = document.getElementById("warnings")

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //Patron de una expresion regular, que nos ayuda a validar email
    parrafo.innerHTML = ""
    if(nombre.value.length <6){ 
        warnings += `El nombre no es valido <br><br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El correo no es valido <br><br>`
        entrar = true
    }
    if(telefono.value.length < 10){
        warnings += `El numero no es valido <br><br>`
        entrar = true
    }
    if(entrar){ //trabaja que entrar sean falsos para llegar a la validacion final
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = `Enviado <br>`
    }
})


/// Actualizar año automaticaente en footer

window.addEventListener(`DOMContentLoaded`, (e) => {
    document.querySelector(`.año`).innerHTML = new Date().getFullYear();
})

// Cambiar titulo de la pestaña en la pagina

let titulo = true

setInterval(() =>{
    document.title =
    titulo ? "Bienvenido a mi portafolio" : " Soy: Oscar Garcia"

    titulo = !titulo
}, 2000)


//Colocar corazones en la imagen de contacto #1.
const imagen_1 = document.querySelector(".formcontato--esquerda1");
const iEl = document.querySelector("i");

imagen_1.addEventListener("dblclick", (e) => {

    let x = e.pageX - e.target.offsetLeft - 15;
    let y = e.pageY - e.target.offsetTop - 15;

    iEl.style.left = `${x}px`;
    iEl.style.top = `${y}px`;

    // adding active class
    iEl.classList.add("active");

    // removing active class after 1.5sec
    setTimeout(() => {
        iEl.classList.remove("active");
    }, 1500);

});
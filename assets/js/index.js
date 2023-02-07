import {Contador} from "./contador.js"

const modal = document.querySelector('dialog');
const partidaGuardada = JSON.parse(localStorage.getItem("truco"));
const nosotrosNombre = "Nosotros";
const ellosNombre = "Ellos";

const nosotros = new Contador(nosotrosNombre, document.getElementById("nosotros"), partidaGuardada[nosotrosNombre]);
const ellos = new Contador(ellosNombre, document.getElementById("ellos"), partidaGuardada[ellosNombre]);

document.getElementById("reset").addEventListener("click", ()=> modal.showModal());
document.getElementById("volver").addEventListener("click", ()=> modal.close());
document.getElementById("aceptar").addEventListener("click", ()=> {
    nosotros.reset();
    ellos.reset();
    modal.close();
});

document.querySelectorAll("button").forEach(button =>{
    button.addEventListener("click", ()=>{
        const partidaAguardar = {
            [nosotros.nombre] : nosotros.numero,
            [ellos.nombre] : ellos.numero,
        }

        localStorage.setItem("truco",JSON.stringify(partidaAguardar));
        console.log("Guardado");
    })
})
import {Contador} from "./contador.js"

const modal = document.querySelector('dialog');

const nosotros = new Contador("Nosotros", document.getElementById("nosotros"), 0);
const ellos = new Contador("Ellos", document.getElementById("ellos"), 0);

document.getElementById("reset").addEventListener("click", ()=> modal.showModal());
document.getElementById("volver").addEventListener("click", ()=> modal.close());
document.getElementById("aceptar").addEventListener("click", ()=> {
    nosotros.reset();
    ellos.reset();
    modal.close();
});

//LOADER
window.onload = function(){
    $(`#onload`).fadeOut();
    $('body').removeClass('hidden');
}
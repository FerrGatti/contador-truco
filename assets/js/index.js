import {Contador} from "./contador.js"

const modal = document.querySelector('dialog');

const nosotros = new Contador("Nosotros", document.getElementById("nosotros"));
const ellos = new Contador("Ellos", document.getElementById("ellos"));

document.getElementById("reset").addEventListener("click", ()=> modal.showModal());
document.getElementById("volver").addEventListener("click", ()=> modal.close());
document.getElementById("aceptar").addEventListener("click", ()=> {
    nosotros.reset();
    ellos.reset();
    modal.close();
});

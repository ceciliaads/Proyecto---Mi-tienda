const botonAbrirMenu = document.getElementById("abrir-menu")
const botonCerrarMenu = document.getElementById("cerrar-menu")
const menu = document.getElementById("menu")
const overlay = document.getElementById("overlay")
const gatito = document.getElementById("gatito")

botonAbrirMenu.onclick = () => {
  overlay.classList.remove("ocultar")
}

botonCerrarMenu.onclick = () => {
  overlay.classList.add("ocultar")
}

gatito.onclick = () => {
  alert("miau")
}
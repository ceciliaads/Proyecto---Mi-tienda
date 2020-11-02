const checkout = document.querySelector(".checkout")
const subtotal = document.querySelector("#subtotal")
const total = document.querySelector("#total")
const recargoParrafo = document.querySelector("#recargo")
const radioTarjeta = document.querySelector("#tarjeta")
const botonMostrarCheckout = document.querySelector("#abrir-checkout")
const botonOcultarCheckout = document.querySelector("#cerrar-checkout")

const subtotalProductos = 82498

checkout.classList.add("ocultar")

botonMostrarCheckout.onclick = (e) => {
    e.preventDefault();
  subtotal.textContent = subtotalProductos
 checkout.classList.remove("ocultar")
}

botonOcultarCheckout.onclick = (e) => {
    e.preventDefault();
  checkout.classList.add("ocultar")
}

radioTarjeta.onclick = () => {
    
  const recargo = subtotalProductos * 0.1
  recargoParrafo.textContent = recargo
  total.textContent = subtotalProductos + recargo
}


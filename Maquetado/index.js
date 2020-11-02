
////// CARRITO \\\\\\
const botonAbrirCarrito = document.getElementById("abrir-carrito")
const botonCerrarCarrito = document.getElementById("cerrar-carrito")
const carrito = document.getElementById("carrito")
const overlay = document.getElementById("overlay-general")
const rojo = document.querySelector(".rojo")

////// MODAL VACIAR \\\\\\
const botonVaciarCarrito = document.querySelector(".boton-vaciar-carrito")
const modalVaciar = document.querySelector(".modal-vaciar")
const botonCancelar = document.querySelector(".boton-cancelar")
const botonVaciarConfirmacion = document.querySelector(".boton-vaciar")

////// CHECKOUT \\\\\\
const checkout = document.querySelector(".checkout")
const subtotal = document.querySelector("#subtotal")
const total = document.querySelector("#total")
const recargoParrafo = document.querySelector("#recargo")
const recargoParrafoEnvio = document.querySelector("#recargo-envio")
const radioTarjeta = document.querySelector("#tarjeta")
const envio = document.getElementById("envio")
const botonMostrarCheckout = document.querySelector("#abrir-checkout")
const botonOcultarCheckout = document.querySelector("#cerrar-checkout")
const botonFinalizarCompra = document.querySelector(".finalizar-compra")

///////  FILTROS INPUT BUSQUEDA | SECCION CATEGORIAS | SECCION RATING | LIMPIAR FILTROS \\\\\\\
const filtroBusqueda = document.querySelector("#busqueda");
const cards = document.getElementsByClassName("card-product");
const filtroRating = document.getElementsByClassName('review-filter');
const filtroCategorias = document.getElementsByClassName('productos-categorias');
const botonLimpiar = document.getElementById("boton-limpiar")

//////  GRILLA | LISTA  \\\\\\\
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const botonGrilla = document.getElementById("boton-grilla")
const botonLista = document.getElementById("boton-lista")



////// CARRITO \\\\\\

botonAbrirCarrito.onclick = () => {
  overlay.classList.remove("ocultar")
  document.body.classList.add("no-scroll")
  carrito.classList.add("mostrar-carrito")
}

botonCerrarCarrito.onclick = () => {
  overlay.classList.add("ocultar")
  document.body.classList.remove("no-scroll")
  carrito.classList.remove("mostrar-carrito")
}

////// MODAL VACIAR \\\\\\

botonVaciarCarrito.onclick = () => {
  modalVaciar.classList.remove("hidden")
}

botonVaciarConfirmacion.onclick = () => {
  modalVaciar.classList.add("hidden")
}

botonCancelar.onclick = () => {
  modalVaciar.classList.add("hidden")
}

////// CHECKOUT \\\\\\

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

envio.onclick = () => {
  const recargoEnvio = subtotalProductos + 50
  recargoParrafoEnvio.textContent = recargoEnvio
  total.textContent = subtotalProductos + recargoEnvio
}


//////// CONTADOR DE PRODUCTOS \\\\\\\

// const tarjetasOcultas = document.querySelector(".card-product .hidden")
// const contador = document.querySelector(".productos-mostrados")

// // let cantidadTarjetasOcultas = tarjetasOcultas.length
// let cantidadTarjetasMostradas = 12 - cantidadTarjetasOcultas

// const tarjetasOcultas = () => {
//   for (let card of card){
//     if (card.checked){
//       return false
//     }
//   }
//   let cantidadTarjetasOcultas = tarjetasOcultas.length
// }



// const actualizarCantidadDeProductosMostrados = () => {
//   for (let card of cards) {
//     if (card.checked){
//       return false
//     }
//   }
  

// }



 
///////  FILTROS INPUT BUSQUEDA | SECCION CATEGORIAS | SECCION RATING | LIMPIAR FILTROS \\\\\\\


const pasaFiltroInput = (card) => {
  if (hayAlgoEscritoEnElInput()) {
      if(compararInputConTarjeta(card)){
          return true
      }
      else {
          return false
      }
  }
  else {
      return true
  }
}


const pasaFiltroCategorias = (card) => {
  if (hayAlgunCheckboxCategoriaChequeado()) {
      if(compararCategoriasConTarjeta(card)){
          return true
      }
      else {
          return false
      }
  }
  else {
      return true
  }
}

const pasaFiltroRating = (card) => {
  if (hayAlgunCheckboxRatingChequeado()) {
      if(compararRatingConTarjeta(card)){
          return true
      }
      else {
          return false
      }
  }
  else {
      return true
  }
}


const pasaFiltros = (card) => {
  if (pasaFiltroInput(card) && pasaFiltroCategorias(card) && pasaFiltroRating(card)){
      return true
  }
  else {
      return false
  }
}

const compararCategoriasConTarjeta = (card) => {
  for (let checkboxCategoria of filtroCategorias) {
      if (checkboxCategoria.checked){
          if (checkboxCategoria.value === card.dataset.categoria) { //|| checkbox.value === "todos"){
              return true
          }
      }
  }
  return false
}

const compararRatingConTarjeta = (card) => {
  for (let checkboxRating of filtroRating){
      if (checkboxRating.checked){
          if (checkboxRating.value === card.dataset.rating) { //|| checkboxRating.value === "i")
              return true
          }
          
      }
      
  }
  return false

}

const compararInputConTarjeta = (card) => {
  if (card.dataset.nombre.includes(filtroBusqueda.value.toLowerCase())) {
    return true
  }
  else {
    return false
  }
}

const ocultarTarjeta = (card) => {
  return card.classList.add("hidden")
}

const mostrarTarjeta = (card) => {
   return card.classList.remove("hidden")
}

const filtrarTarjetas = () => {
  for (let card of cards) {
    if (pasaFiltros(card)) {
      mostrarTarjeta(card)
    }
    else {
      ocultarTarjeta(card)
    }
  }
}


const hayAlgoEscritoEnElInput = () => {
  if (filtroBusqueda.value) {
    return true
  }
  else {
    return false
  }
}

const hayAlgunCheckboxCategoriaChequeado = () => {
  for (let checkboxCategoria of filtroCategorias) {
    if (checkboxCategoria.checked) {
      return true
    }
  }
  return false
}

const hayAlgunCheckboxRatingChequeado = () => {
  for (let checkboxRating of filtroRating) {
    if (checkboxRating.checked) {
      return true
    }
  }
  return false
}

filtroBusqueda.oninput = () => {
  filtrarTarjetas()

}

for (let checkboxCategoria of filtroCategorias) {
  checkboxCategoria.oninput = () => {
    filtrarTarjetas()
  }
}

for (let checkboxRating of filtroRating) {
  checkboxRating.oninput = () => {
    filtrarTarjetas()
  }
}



///////   BOTON LIMPIAR   \\\\\\\\

botonLimpiar.onclick = (e) => {
  e.preventDefault()
  filtroBusqueda.value = ""
  for (let card of cards) {
    card.classList.remove('hidden')
  }
  for (let checkboxCategoria of filtroCategorias) {
    checkboxCategoria.checked = false 
  }
  for (let checkboxRating of filtroRating){
    checkboxRating.checked = false
  }
  
}

//////  GRILLA | LISTA  \\\\\\\

botonGrilla.onclick = () => {
  contenedorTarjetas.classList.remove('lista')
  contenedorTarjetas.classList.add("grilla")
  console.log("hiciste click en grilla")

}

botonLista.onclick = () => {
  contenedorTarjetas.classList.remove("grilla")
  contenedorTarjetas.classList.add("lista")
  console.log("hiciste click en lista")

}
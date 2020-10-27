const filtroBusqueda = document.querySelector("#busqueda");
const cards = document.getElementsByClassName("card-product");
const filtroRating = document.getElementsByClassName('review-filter');
const filtroCategorias = document.getElementsByClassName('productos-categorias');
const checkboxes = document.querySelectorAll(".review-filter")
const botonLimpiar = document.getElementsByClassName("boton-limpiar")
 
// //////////////////   FILTROS INPUT BUSQUEDA | SECCION CATEGORIAS | SECCION RATING   \\\\\\\\\\\\\\\\\\\\\


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



// ////////////////////////////   BOTON LIMPIAR   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

botonLimpiar.onclick = () => {
  filtroNombre.value = ""
  for (let checkbox of checkboxes) {
    checkbox.checked = false 
  }
  tarjeta.classList.remove('hidden')
}

// ////////////////////////////  GRILLA | LISTA  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const contenedorTarjetas = document.getElementById("contenedor-tarjetas ")
const botonGrilla = document.getElementById("boton-grilla")
const botonLista = document.getElementById("boton-lista")

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
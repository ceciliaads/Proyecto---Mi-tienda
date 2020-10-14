const filtroNombre = document.querySelector("#busqueda");
const tarjetas = document.getElementsByClassName("producto");
const filtroRating = document.getElementsByClassName('review-filter');
const filtroCategorias = document.getElementsByClassName('productos-categorias');
const checkboxes = document.querySelectorAll(".review-filter")
const botonLimpiar = document.getElementsByClassName("boton-limpiar")
 

// FILTRO BUSQUEDA //

filtroNombre.oninput = () => {
  for (let tarjeta of tarjetas) {
    const titulo = tarjeta.dataset.nombre;
    const busqueda = filtroNombre.value;
    if (titulo.includes(busqueda)) {
      tarjeta.classList.remove('hidden');
    } else {
      tarjeta.classList.add('hidden');
    }
  }
};

// FILTRO CATEGORIAS //

for (let checkbox of filtroCategorias) {
  checkbox.onclick = () => {
    filtrarTarjetasPorCategoria();
  };
}

const categoriaSeleccionada = () => {
  for (let checkbox of filtroCategorias) {
    if (checkbox.checked) {
      return true;
    }
  }
};

const coincidenCategoriaYTarjeta = tarjeta => {
  const categorias = tarjeta.dataset.categoria;
  for (let checkbox of filtroCategorias) {
    if (checkbox.value === categorias && checkbox.checked) {
      return true;
    }
  }
};

const filtrarTarjetasPorCategoria = () => {
  for (let tarjeta of tarjetas) {
    tarjeta.classList.add('hidden');
    if (categoriaSeleccionada()) {
      if (coincidenCategoriaYTarjeta(tarjeta)) {
        tarjeta.classList.remove('hidden');
      }
    }
    else {
      tarjeta.classList.remove('hidden')
    }
  }
};


// FILTRO RAITING ESTRELLAS //

for (let checkbox of filtroRating) {
  checkbox.onclick = () => {
    filtrarTarjetas();
  };
}

const hayCheckboxSeleccionado = () => {
  for (let checkbox of filtroRating) {
    if (checkbox.checked) {
      return true;
    }
  }
};

const coincidenCheckboxYTarjeta = tarjeta => {
  const rating = tarjeta.dataset.rating;
  for (let checkbox of filtroRating) {
    if (checkbox.value === rating && checkbox.checked) {
      return true;
    }
  }
};

const filtrarTarjetas = () => {
  for (let tarjeta of tarjetas) {
    tarjeta.classList.add('hidden');
    if (hayCheckboxSeleccionado()) {
      if (coincidenCheckboxYTarjeta(tarjeta)) {
        tarjeta.classList.remove('hidden');
      }
    }
    else {
      tarjeta.classList.remove('hidden')
    }
  }
};


// BOTON LIMPIAR //

botonLimpiar.onclick = () => {
  filtroNombre.value = ""
  for (let checkbox of checkboxes) {
    checkbox.checked = false 
  }
  tarjeta.classList.remove('hidden')
}
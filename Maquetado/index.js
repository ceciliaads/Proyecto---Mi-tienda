const filtroNombre = document.querySelector("#busqueda");
const tarjetas = document.getElementsByClassName("producto");
const filtroRating = document.getElementsByClassName("review-filter");
 

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


for (let checkbox of filtroRating) {
  
  checkbox.onclick = () => {
    for (let tarjeta of tarjetas) {
      if (checkbox.checked) {
        const rating = tarjeta.dataset.rating;
        if (checkbox.value === rating) {
          tarjeta.classList.remove('hidden');
        } else {
          tarjeta.classList.add('hidden');
        }
      } 
      else {
        tarjeta.classList.remove('hidden');
      }
    }
  };
}
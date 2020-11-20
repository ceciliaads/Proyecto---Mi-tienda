Querida Ceci, 

En primer lugar quiero felicitarte por un gran trabajo. Se nota que aca pusiste esfuerzo, y que te esmeraste en entregar un producto lo mas finalizado posible mas alla de las limitaciones de tiempo que tuviste. 

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web. Los colores y contrastes adecuados. Tus imagenes tienen el atributo alt, y tu uso de etiquetas aria es perfecto. Muy buen trabajo aca. 

### Filtros y búsqueda

Tus filtros funcionan a la perfeccion. Habria sido bueno que los agregaras tambien en la parte responsive. No hace falta agregar mas logica - solo mover con css los filtros que ya tenes hechos. 

Por tu comentario entiendo que preferis que no te diga como resolver la funcion que cuenta las tarjetas. Solo te digo esto: que sea una funcion, que se ejecute toda vez que el usuario hace click en un filtro. Podes agregarla en filtraTarjetas por ejemplo:

```js
const filtrarTarjetas = () => {
  for (let card of cards) {
    if (pasaFiltros(card)) {
      mostrarTarjeta(card)
    }
    else {
      ocultarTarjeta(card)
    }
  }
  // aca agrego una funcion
  actualizarCantidadDeProductosMostrados()
}
```

Dentro de esa funcion tenes que hacer el codigo que empezaste en JS (y que por lo que veo, va en la direccion correcta, aunque quiza te estes complicando un poco de mas). Solo toma en cuenta que el selector deberia ser este:

```js
const tarjetasOcultas = document.querySelector(".card-product.hidden")
```

Es decir, sin un espacio entre las dos clases. 

### Carrito

Tu carrito esta muy bien! Bien maquetado, muy hermoso, siguiendo todas las pautas. 

### Checkout

Falta mucha atencion al maquetado aqui, se ve todo algo desprolijo. La parte de HTML esta perfecta, todo lo que es formulario lo tenes muy bien. 

Tus calculos estan bien encarados, la logica inicial esta bien, pero no va a ser una funcion tan sencilla como estas esperando. La idea seria asi (no quiero darte el codigo directamente porque entiendo queres seguir trabajando en esto):

Asumimos que vamos a tener 
- un recargo por tarjeta, que iniciamos en 0
- un recargo por envio, que iniciamos en 0
- un descuento, que iniciamos en 0
- un subtotal, que es el valor que tenes definido
- un total, que iniciamos en 0

Iniciamos los valores en 0 porque si los dejamos "undefined" pueden traernos complicaciones despues en los calculos. 

 Cada vez que el usuario hace click en un checkbox o radio, ejecutamos la misma funcion: calcularTotal. Esa funcion se fija en el radio de "tarjeta de credito". Esta chequeado? Si es asi, calcula el 10% del subtotal y lo adjudica a la variable "recargo por tarjeta". Luego se fija en el checkbox de "envio". Esta marcado? Si es asi, adjudica el valor del envio a la variable "recargo por envio". Hace lo mismo con el descuento. Solo una vez que haya terminado las operaciones, podemos calcular el total, que es:
 total = subtotal + descuento + recargoPorEnvio + recargoPorTarjeta

 Si el usuario *no* marcó envio, por ejemplo, no hay problema, porque nuestra variable recargoPorEnvio queda en 0. 
 Obviamente estas variables te van a servir tambien para ir mostrandole al usuario en el checkout cuanto tiene que pagar por cada cosa. 

 Avisame si esto te sirve para encarar ese codigo, y si no me escribis y lo vemos juntas. 


### Misc 

Tu HTML esta muy bien, prolijo, claro y ordenado. Tu CSS esta muy prolijo y bien hecho tambien: se nota mucho el esfuerzo puesto. 

Con respecto al aspecto visual de tu web, donde no esta perfecto, se nota que fue el tiempo lo que faltó. En donde se nota que tuviste tiempo, el resultado es excelente. Donde no se ve tan bien, entiendo que el tiempo no fue tu aliado. Pero esa es una buena noticia: significa que, cuando tenes el tiempo para invertirlo, ya tenes dominada la parte visual de la programacion web. Y eso es algo a celebrar. 

Tu responsive en particular esta muy, muy bien hecho. 

### Nota 

Veo relativamente pocos problemas en tu TP, lo que no funcionó se nota que fue por falta de tiempo, y sí veo muchas cosas muy bien resueltas. Tu codigo es prolijo y correcto, y con atencion al detalle. 

Las fallas mas grandes, como me habias anticipado, estan en las funciones mas complejas de JavaScript. Honestamente creo que con mas tiempo para invertirle (y quiza con mas preguntas a tu profe!!) hubieras podido hacerlo, ya que encaraste bien la logica. Yo doy este TP por aprobado, mas alla de que falten algunas cosas. No dudo que quiza vayas a necesitar dedicarle un extra a JS con respecto a algunas compañeras, que ya pudieron practicar y resolver aqui lo que vos tendras que resolver en los proximos trabajos. Como seguir a partir de aqui es decision tuya, pero no dudo que podes. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
❌ Respeta el funcionamiento --> por los puntos faltantes
✅  Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅ Reutilización de estilos.
✔️  Funciones pequeñas.
✔️ Commits con mensajes adecuados.
✔️ Cumple con las condiciones de accesibilidad avanzada.

NOTA FINAL: 7




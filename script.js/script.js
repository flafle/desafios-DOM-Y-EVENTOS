//Estructura en html.
//Interactuar con html y js.(La idea era simular como en el carrito de compras que agregas o sacas productos.)
//El evento en cuestion es el click y por consola veo la cantidad de producto que al hacer click voy sumando.
//Se ven por pantalla el resultado de si sume o reste productos.

//Detectar un boton:
const botonAumentar = document.querySelector(".btn-danger")
const contador = document.getElementById("contador")
let suma = 0 ;


botonAumentar.addEventListener("click", () => {
  console.log("Has agregado un producto") 
  suma++
  contador.textContent = suma;  //Lo que me figura sera la cantidad de numeros iguales a los click que haya hecho.
}) 
//Detecto boton 2:
const botonSacar = document.querySelector(".btn-warning")

let resta = 0 ;
botonSacar.addEventListener("click",() => {
  console.log("Has quitado un producto")
  resta--
  contador.textContent = resta;

})






const almacenamiento = fetch ("tienda.json").then(function (respuesta) {
    return respuesta.json();
}).then(function (obj) {
    objGlobal = obj;
    return obj;
}).catch (function (error) {
    console.error("Ha ocurrido un error.");
    console.error(error);
})

const ConstructorArticulo = async function() {
   const almacenamientoCargado = await almacenamiento;
   let acumulador = `
   <table>
   <tr>
     <th></th>
     <th></th>
   </tr>
   `
   almacenamientoCargado.forEach((item) => {
    const paquete = encodeURIComponent(JSON.stringify(item));
    acumulador = acumulador += `
    <tr>
          <td> <img class="articulo" src="${item.imagen}"></td>
          <td class="arTitulo"><h2>${item.nombre}</h2><button class="agregar" onclick="carrito('${paquete}')">Agregar al carrito</button></td>
          <td class="precio"><h2>$${item.precio}</h2></td>
        </tr>
   `
   })

   acumulador = acumulador += `
   </table>
   `
   cargador.innerHTML = acumulador;
}

const carrito = function(paquete) {
  const objeto = JSON.parse(decodeURIComponent(paquete));
  carritox != null ? carritox = JSON.parse(localStorage.getItem("carrito")) : console.log(null);
  carritox.push(new Carritoz(objeto.nombre, objeto.imagen, objeto.precio));
  localStorage.setItem("carrito", JSON.stringify(carritox));
  console.log(carritox);
  
  Swal.fire({
    title: "<h4 style='color:#DB0A6F'>¡Añadiste tu producto!</h4>",
    imageUrl: 'https://c.tenor.com/-pVAjSff3D0AAAAC/how-to.gif',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    confirmButtonColor: "#DB0A6F",
    background: "#424242",
  })
}

const cargador = document.querySelector('#content');

function Carritoz(titulo, imagen, precio) {
  this.titulo = titulo;
  this.imagen = imagen;
  this.precio = precio;
}

let carritox = [];

ConstructorArticulo();






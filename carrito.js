const constructorHTML = function(entradas) {
    let preciototal = 0;
    let acumulador = `
    <h3>Te enviaremos un correo a tu dirección de email con un formulario de compra.</h3>
    <table>
    <tr>
      <th></th>
      <th></th>
    </tr>
    `
  entradas.forEach((item) =>{
    preciototal = preciototal + parseInt(item.precio);
    acumulador = acumulador += `
    <tr>
          <td> <img class="articulo" src="${item.imagen}"></td>
          <td class="arTitulo"><h2>${item.titulo}</h2></td>
          <td class="precio"><h2>$${item.precio}</h2></td>
        </tr>
   `
  })
  acumulador += `
     <tr>
          <td> <img class="articulo" src="https://media.discordapp.net/attachments/449814712008310796/988542277381132288/unknown.png"></td>
          <td class="arTitulo"><h2>Precio final</h2><br><button class="facha" id="boton" onclick="alerta()">Enviar</button></td>
          <td class="precio"><h2>$${preciototal}</h2></td>
        </tr>
        </table>
  `
  return acumulador;
  }
  
 
  
  const entradas = JSON.parse(localStorage.getItem("carrito"))
  const cargador = document.querySelector('#content');
  
  
 function alerta() {
    Swal.fire({
        title: "<h4 style='color:#DB0A6F'>¡Listo amigazo!</h4>",
        imageUrl: 'https://media4.giphy.com/media/fgkfXn5bHSmSQ/giphy.gif?cid=ecf05e47493adqcg8ttsngje9979d21fo6xxoylngn4hzoi5&rid=giphy.gif&ct=g',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonColor: "#DB0A6F",
        background: "#424242",
      })

  }
  
  cargador.innerHTML = constructorHTML(entradas);
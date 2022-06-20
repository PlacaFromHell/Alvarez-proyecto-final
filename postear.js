const verificador = function(titulo, contenido, poster) {
  if (titulo != null && contenido != null && poster != null) {
    return true;
  }
  else {
    return false;
  }
};

const poster = sessionStorage.getItem("sessiondata");

let entradas = [
  {titulo: "default", vista: "default", contenido: "default", poster: "default"}
];

let globalTitulo = document.getElementById("titulo");
let globalVista = document.getElementById("vista");
let globalContenido = document.getElementById("postMain");
let boton = document.getElementById("enviar");

const verificado = verificador(globalTitulo, globalContenido, poster);
const errorCampos = document.querySelector('#errorCampos');


function Postear(titulo, vista, contenido, poster) {
    this.titulo = titulo;
    this.vista = vista;
    this.contenido = contenido;
    this.poster = poster;
  }

boton.addEventListener("click", () => {
  
  if (verificado == true) {
    errorCampos.innerHTML = "<p></p>";; 
    JSON.parse(localStorage.getItem("forumData")) != null ? entradas = JSON.parse(localStorage.getItem("forumData")) : console.log("sin datos en storage(!)");
    entradas.push(new Postear(globalTitulo.value, globalVista.value, globalContenido.value, poster));
    localStorage.setItem("forumData", JSON.stringify(entradas));

    Swal.fire({
      title: "<h4 style='color:#DB0A6F'>¡Publicaste tu entrada con éxito!</h4>",
      imageUrl: 'https://c.tenor.com/S6dKXS1W9JwAAAAd/how-to-basic-how-to-basic-microwave.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonColor: "#DB0A6F",
      background: "#424242",
    })
  }
  else {errorCampos.innerHTML = "<p>Por favor completa los campos. Debes estar registrado para publicar una entrada.</p>";}
})
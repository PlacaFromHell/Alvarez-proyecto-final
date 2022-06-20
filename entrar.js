let globalNombre = document.getElementById("nombre");
let globalClave = document.getElementById("contra");

const check1 = document.querySelector('#errorUser');
const check2 = document.querySelector('#errorClave');
const validado = document.querySelector('#validado');

let boton = document.getElementById("boton");
let validacion;

let usuarios = [
  {nombre: "default", correo: "default", clave: "default"}
];

function Usuario(nombre, clave, correo) {
  this.nombre = nombre;
  this.clave = clave;
  this.correo = correo;
}

boton.addEventListener("click", () => {

 JSON.parse(localStorage.getItem("userdata")) != null ? usuarios = JSON.parse(localStorage.getItem("userdata")) : console.log("sin datos en storage(!)");

  validado.innerHTML = "<p><p>";
  document.getElementById("name").innerHTML = "";

  validacion = usuarios.some(elem => elem.nombre == globalNombre.value && globalClave.value == elem.clave);

  validacion == false ? check1.innerHTML = "<p>Ha ocurrido un error. Por favor revisa tus datos de usuario o tu contraseña." : check1.innerHTML = "<p><p>";

  if (validacion == true) {
    sessionStorage.setItem("sessiondata", globalNombre.value);
    console.log(sessionStorage.getItem("sessiondata"));
    Swal.fire({
        title: "<h4 style='color:#DB0A6F'>¡Entraste con éxito!</h4>",
        imageUrl: 'https://c.tenor.com/VbGfKJ7-ceIAAAAC/how-to-basic-squid-game.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonColor: "#DB0A6F",
        background: "#424242",
      })
  }

})

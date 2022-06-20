let globalNombre = document.getElementById("nombre");
let globalCorreo = document.getElementById("email");
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

  validacion = usuarios.some(elem => elem.nombre == globalNombre.value || elem.correo == globalCorreo.value);

  validacion == true ? check1.innerHTML = "<p>Parece que tu nombre de usuario y/o correo ya están registrados.<p>" : check1.innerHTML = "<p><p>";

  if (globalClave.length < 8 || globalClave.value.toLowerCase() == globalClave.value || globalClave.value.toUpperCase() == globalClave.value) {
    check2.innerHTML = "<p>Tu contraseña debe tener al menos 8 caracteres y combinar mayúsculas y minúsculas.<p>";
    validacion = true;
    }
  else {check2.innerHTML = "<p><p>";}

  if (validacion == false) {
    usuarios.push (new Usuario(globalNombre.value, globalClave.value, globalCorreo.value));
    localStorage.setItem("userdata", JSON.stringify(usuarios));

    Swal.fire({
      title: "<h4 style='color:#DB0A6F'>¡Tu cuenta ha sido creada!</h4>",
      imageUrl: 'https://j.gifs.com/gZZq8D.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonColor: "#DB0A6F",
      background: "#424242",
    })
  }

})



const constructorHTML = function(entradas) {
  let acumulador = `
<table class="customTable">
        <thead>
          <tr>
            <th id="primero">Usuario</th>
            <th id="segundo">Vista previa</th>
            <th id="tercero">Título</th>
          </tr>
        </thead>
        <tbody>
`
for (let index = entradas.length - 1; index >= 0; index--) { //No uso forEach porque necesito invertir la dirección
  const paquete = encodeURIComponent(JSON.stringify(entradas[index]));
  acumulador += `<tr>
    <td class="user">${entradas[index].poster}</td>
    <td class="ajuste">
      <img class="mini" src="${entradas[index].vista}" alt="Not Found" onerror=this.src="https://media.discordapp.net/attachments/449814712008310796/987725869164417025/unknown.png?width=561&height=559">
    </td>
    <td><button class="titular"  onclick="constructorEntrada('${paquete}')">${entradas[index].titulo}</button></td>
  </tr>
  <tr>
  `
}
acumulador += `
</tbody>
      </table>
`
return acumulador;
}

const constructorEntrada = function(paquete) {
  const objeto = JSON.parse(decodeURIComponent(paquete));
  cargador.innerHTML = `
  <table class="hilo">
  <thead>
    <tr>
      <th> <button id="complemento">Retroceder</button></th>
      <th id="centro">${objeto.titulo}</th>
      <th id="espaciador"></th>
    </tr>
  </thead>
  <tbody>    
<td class="hilouser"><img class="hilomini" src="${objeto.vista}" alt="Not Found" onerror=this.src="https://media.discordapp.net/attachments/449814712008310796/987725869164417025/unknown.png?width=561&height=559">
<br> <br>Publicado por ${objeto.poster}</td>

<td>${objeto.contenido}</td>
</tr>
<tr>
</tbody>
</table>
  `

}

const entradas = JSON.parse(localStorage.getItem("forumData"))
const cargador = document.querySelector('#content');



cargador.innerHTML = constructorHTML(entradas);



/* <button class="boton-jugada" data-jugada="piedra">Piedra</button>
  <button class="boton-jugada" data-jugada="papel">Papel</button>
  <button class="boton-jugada" data-jugada="tijera">Tijera</button>
  <div id="resultados"></div>
  <p id="contador-usuario">Tus puntos: 0</p>
  <p id="contador-ordenador">Puntos de la máquina: 0</p>
*/

const botones = document.querySelectorAll(".boton-jugada");
let puntosUsuario = 0;
let puntosOrdenador = 0;

function jugar(eleccionUsuario) {
  const opciones = ["piedra", "papel", "tijera"];
  const eleccionOrdenador = opciones[Math.floor(Math.random() * 3)];

  let resultado = "";

  if (eleccionUsuario === eleccionOrdenador) {
    resultado = "Empate";
  } else if (
    (eleccionUsuario === "piedra" && eleccionOrdenador === "tijera") ||
    (eleccionUsuario === "papel" && eleccionOrdenador === "piedra") ||
    (eleccionUsuario === "tijera" && eleccionOrdenador === "papel")
  ) {
    resultado = "Ganas";
    puntosUsuario++;
  } else {
    resultado = "Pierdes";
    puntosOrdenador++;
  }

  document.getElementById("resultados").textContent =
    `Eliges ${eleccionUsuario} y la máquina ha elegido ${eleccionOrdenador}: ${resultado}`;

  document.getElementById("contador-usuario").textContent =
    `Tus puntos: ${puntosUsuario}`;

  document.getElementById("contador-ordenador").textContent =
    `Puntos de la máquina: ${puntosOrdenador}`;
}

botones.forEach(function(boton) {
  boton.addEventListener("click", function() {
    const eleccionUsuario = boton.getAttribute("data-jugada");
    jugar(eleccionUsuario);
  });
});
const grilla = document.querySelector(".grilla");
const botonFacil = document.getElementById("facil");
const botonMedio = document.getElementById("medio");
const botonDificil = document.getElementById("dificil");
const nuevoJuego = document.getElementById("nuevo-juego");
const reiniciarJuego = document.getElementById("reiniciar-juego");
const buscarMatches = document.getElementById("buscar-matches");

let items = ["🍉", "🍐", "🍌", "🍇", "🍎", "🍊", "🍑", "🥥", "🍒", "🍋"];
let listaDeFrutas = [];
let frutas = "";

const obtenerNumeroAlAzar = (items) => {
  let largo = items.length;
  return Math.floor(Math.random() * largo);
};
const obtenerFrutaAlAzar = (items) => {
  return items[obtenerNumeroAlAzar(items)];
};

const crearGrilla = (ancho, alto) => {
  const anchoDeGrilla = 50 * ancho;
  grilla.style.width = `${anchoDeGrilla}px`;

  for (let i = 0; i < ancho; i++) {
    listaDeFrutas[i] = [];
    for (let j = 0; j < alto; j++) {
      listaDeFrutas[i][j] = obtenerFrutaAlAzar(items);
    }
  }

  grilla.innerHTML = "";
  for (let i = 0; i < listaDeFrutas.length; i++) {
    for (let j = 0; j < listaDeFrutas[i].length; j++) {
      frutas = obtenerFrutaAlAzar(items);
      listaDeFrutas[i][j] = frutas;
      grilla.innerHTML += `<div data-x="${i}" data-y="${j}"> ${frutas}</div>`;
    }
  }

  return grilla;
};

const ocultarBotones = () => {
  botonFacil.classList.add("ocultar");
  botonMedio.classList.add("ocultar");
  botonDificil.classList.add("ocultar");
};

botonFacil.onclick = () => {
  crearGrilla(6, 6);
  ocultarBotones();
  reiniciarJuego.classList.add("facil");
};

botonMedio.onclick = () => {
  crearGrilla(8, 8);
  ocultarBotones();
  reiniciarJuego.classList.add("medio");
};

botonDificil.onclick = () => {
  crearGrilla(10, 10);
  ocultarBotones();
  reiniciarJuego.classList.add("dificil");
};

nuevoJuego.onclick = () => {
  botonFacil.classList.toggle("ocultar");
  botonMedio.classList.toggle("ocultar");
  botonDificil.classList.toggle("ocultar");
  reiniciarJuego.classList.remove("facil");
  reiniciarJuego.classList.remove("medio");
  reiniciarJuego.classList.remove("dificil");
};

reiniciarJuego.onclick = () => {
  if (reiniciarJuego.classList.contains("facil")) {
    crearGrilla(6, 6);
  } else if (reiniciarJuego.classList.contains("medio")) {
    crearGrilla(8, 8);
  } else if (reiniciarJuego.classList.contains("dificil")) {
    crearGrilla(10, 10);
  }
};

buscarMatches.onclick = () => {
  for (let i = 0; i < listaDeFrutas.length; i++) {
    for (let j = 0; j < listaDeFrutas[i].length; j++) {
      if (
        listaDeFrutas[i][j] === listaDeFrutas[i][j + 1] &&
        listaDeFrutas[i][j + 1] === listaDeFrutas[i][j + 2]
      ) {
        const div = document.querySelector(`div[data-x="${i}"][data-y="${j}"]`);
        div.style.backgroundColor = "yellow";
        const divDos = document.querySelector(
          `div[data-x="${i}"][data-y="${j + 1}"]`
        );
        divDos.style.backgroundColor = "yellow";
        const divTres = document.querySelector(
          `div[data-x="${i}"][data-y="${j + 2}"]`
        );
        divTres.style.backgroundColor = "yellow";
      }
    }
  }
  for (let i = 0; i < listaDeFrutas.length; i++) {
    for (let j = 0; j < listaDeFrutas[i].length; j++) {
      if (
        listaDeFrutas[i + 1] &&
        listaDeFrutas[i + 2] &&
        listaDeFrutas[i][j] === listaDeFrutas[i + 1][j] &&
        listaDeFrutas[i][j] === listaDeFrutas[i + 2][j]
      ) {
        const uno = document.querySelector(`div[data-x="${i}"][data-y="${j}"]`);
        uno.style.backgroundColor = "red";
        const dos = document.querySelector(
          `div[data-x="${i + 1}"][data-y="${j}"]`
        );
        dos.style.backgroundColor = "red";
        const tres = document.querySelector(
          `div[data-x="${i + 2}"][data-y="${j}"]`
        );
        tres.style.backgroundColor = "red";
      }
    }
  }
  // for (let j = 0; j < listaDeFrutas.length; j++) {
  //   for (let i = 0; i < listaDeFrutas[j].length; i++) {
  //     if (
  //       listaDeFrutas[j][i] === listaDeFrutas[j][i] &&
  //       listaDeFrutas[j][i] === listaDeFrutas[j + 2][i]
  //     ) {
  //       console.log(listaDeFrutas[j + 2][i]);
  //       const divVertical = document.querySelector(
  //         `div[data-x="${i}"][data-y="${j}"]`
  //       );
  //       divVertical.style.backgroundColor = "red";
  //       const divVerticalDos = document.querySelector(
  //         `div[data-x="${i}"][data-y="${j + 1}"]`
  //       );
  //       divVerticalDos.style.backgroundColor = "red";
  //       const divVerticalTres = document.querySelector(
  //         `div[data-x="${i}"][data-y="${j + 2}"]`
  //       );
  //       divVerticalTres.style.backgroundColor = "red";
  //     }
  //   }
  // }
};
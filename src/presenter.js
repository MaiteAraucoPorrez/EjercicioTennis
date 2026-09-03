import Tennis from "./tennis.js";

const partido = new Tennis();

const textoMarcador = document.getElementById("marcador");
const btnP1 = document.getElementById("btn-p1");
const btnP2 = document.getElementById("btn-p2");

btnP1.addEventListener("click", () => {
    partido.player1Scores();
    textoMarcador.innerText = partido.score();
});

btnP2.addEventListener("click", () => {
    partido.player2Scores();
    textoMarcador.innerText = partido.score();
});
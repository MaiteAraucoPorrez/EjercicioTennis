import Tennis from "./tennis.js";

describe("Tennis Scorer", () => {
  let tennis;

  beforeEach(() => {
    tennis = new Tennis();
  });
  //Inicio del juego
  it("Cuando se inicia el partido debe estar en 'Love - Love'", () => {
    expect(tennis.score()).toEqual("Love - Love");
  });

  //Juegador 1 anota 1 vez
  it("Cuando jugador 1 anota 1 vez, se le suma +15 en el marcador", () => {
    tennis.player1Scores();
    expect(tennis.score()).toEqual("15 - Love");
  });

  it("Cuando jugador 1 anota por segunda vez, se le suma +15 en el marcador", () => {
    tennis.player1Scores(); tennis.player1Scores();
    expect(tennis.score()).toEqual("30 - Love");
  });

  it("Cuando jugador 1 anota por tercera vez, se le suma +10 en el marcador", () => {
    for(let i=0; i<3; i++) tennis.player1Scores();
    expect(tennis.score()).toEqual("40 - Love");
  });

  it("Cuando jugador 2 anota 1 vez: 15 puntos en el marcador", () => {
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Love - 15");
  });

  it("Cuando jugador 2 anota por segunda vez: 30 puntos en el marcador", () => {
    tennis.player2Scores(); tennis.player2Scores();
    expect(tennis.score()).toEqual("Love - 30");
  });

  it("Cuando jugador 2 anota por tercera vez: 40 puntos en el marcador", () => {
    for(let i=0; i<3; i++) tennis.player2Scores();
    expect(tennis.score()).toEqual("Love - 40");
  });

  it("Cuando jugador 1 anota 2 veces y jugador 2 anota 1 vez debe marcar: '30 - 15'", () => {
    tennis.player1Scores(); tennis.player1Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("30 - 15");
  });

});
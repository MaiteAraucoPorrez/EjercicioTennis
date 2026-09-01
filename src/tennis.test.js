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

});
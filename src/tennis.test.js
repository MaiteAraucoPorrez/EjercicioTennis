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

});
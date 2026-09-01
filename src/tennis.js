class Tennis {
    constructor() {
      this.p1 = 0;
      this.p2 = 0;
      this.scoreNames = ["Love", "15", "30", "40"];
    }

    score() {
      //Si el jugador 1 anota 1 vez, se le suma +15 en el marcador
      return this.scoreNames[this.p1] + " - Love";
    }

    player1Scores() {
      this.p1++;
    }

}

export default Tennis;
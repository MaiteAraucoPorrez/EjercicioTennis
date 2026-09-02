class Tennis {
    constructor() {
      this.p1 = 0;
      this.p2 = 0;
      this.scoreNames = ["Love", "15", "30", "40"];
    }

    score() {
      if (this.p1 >= 3 && this.p2 >= 3 && this.p1 === this.p2) {
        return "Deuce";
      }

      if (this.p1 >= 4) return "Game for Player 1";
      if (this.p2 >= 4) return "Game for Player 2";

      return this.scoreNames[this.p1] + " - " + this.scoreNames[this.p2];
    }

    player1Scores() {
      this.p1++;
    }

    player2Scores() {
      this.p2++;
    }

}

export default Tennis;
class Tennis {
    constructor() {
      this.p1 = 0;
      this.p2 = 0;
      this.scoreNames = ["Love", "15", "30", "40"];
    }

    score() {
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
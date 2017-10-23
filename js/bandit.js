function Bandit(winRate) {
    this.winRate = winRate;
    this.mean = 0; //Current expected return for the bandit
    this.nPulls = 0; //Number of pulls
}

Bandit.prototype.pull = function() {
    result = Math.random() < this.winRate ? 1 : 0;
    this.nPulls += 1;
    this.mean += (result - this.mean) / this.nPulls;
    return result;
}  
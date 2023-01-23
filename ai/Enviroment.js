import Car from "./Car.js";
export default class Enviroment {
  /**
   * @param {{x: number, y: number}[][]} track
   * @param {{x: number, y: number}[]} rewardTrack
   */
  constructor(track, rewardTrack) {
    this.reset();
    this.agent = new Car();

    this.shouldRender = true;

    this.intervalId = -1;
    this._speed = 1;

    this.rewardTrack = rewardTrack;
    this.track = track;
    this.agentLastProgress = 0;
  }

  get speed() {
    return this._speed === 100 ? "fast" : this.speed === 25 ? "normal" : "slow";
  }
  set speed(val) {
    this._speed = val === "fast" ? 100 : val === "normal" ? 25 : 1;
    return this._speed;
  }

  reset() {
    this.rad = 0.05;
    this.t = 0;

    this.BADRAD = 0.25;
  }

  startLearn(learnStepFunc, onAfterStepFunc) {
    if (this.intervalId === -1) {
      this.intervalId = setInterval(() => {
        for (let i = 0; i < this._speed; i++) learnStepFunc();
        onAfterStepFunc();
      }, 0);
    } else {
      console.warn("already learning -- did not restart learn");
    }
  }

  pauseLearn() {
    clearInterval(this.intervalId);
    this.intervalId = -1;
  }

  getNumStates() {
    return this.agent.getNumStates();
  }
  getMaxNumActions() {
    return this.agent.getNumActions();
  }
  getState() {
    return this.agent.getState(this.track);
  }

  /**
   * @returns {number} reward given
   */
  update(action) {
    // [left, right, up, left up, right up, none] (6) + drift for each option (6)
    if (action > 5) {
      this.agent.keys.space = true;
      action -= 6;
    } else {
      this.agent.keys.space = false;
    }
    // left
    if (action === 0 || action === 3) {
      this.agent.keys.left = true;
    } else {
      this.agent.keys.left = false;
    }
    // right
    if (action === 1 || action === 4) {
      this.agent.keys.right = true;
    } else {
      this.agent.keys.right = false;
    }
    // up
    if (action === 2 || action === 3 || action === 4) {
      this.agent.keys.up = true;
    } else {
      this.agent.keys.up = false;
    }

    this.agent.update();

    if (this.agent.collides(this.track[0]) || this.agent.collides(this.track[1])) {
      this.agent.x = -875;
      this.agent.y = 0;
      this.agent.rotation = Math.PI / 2 + Math.PI / 8;
      this.agent.v = { x: 0, y: 0 };
      this.agentLastProgress = 0;
      return -1;
    }
    const rewardProgress = this.rewardTrack
      .map((point, idx) => [
        Math.sqrt((point.x - this.agent.x) ** 2 + (point.y - this.agent.y) ** 2),
        idx,
      ])
      .reduce((a, b) => (a[0] > b[0] ? b : a))[1];

    // thick reward for passing checkpoint yay
    const progress =
      rewardProgress < 2 && this.agentLastProgress > 100
        ? 5
        : rewardProgress - this.agentLastProgress;
    this.agentLastProgress = rewardProgress;
    return (progress / this.rewardTrack.length) * 10;
  }
}

const lineLineCollision = (a, b, c, d, p, q, r, s) => {
  var det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
  }
};

const lineLineCollisionPoint = (x1, y1, x2, y2, x3, y3, x4, y4) => {
  // Check if none of the lines are of length 0
  if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
    return false;
  }

  const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

  // Lines are parallel
  if (denominator === 0) {
    return false;
  }

  let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
  let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;

  // is the intersection along the segments
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
    return false;
  }

  // Return a object with the x and y coordinates of the intersection
  let x = x1 + ua * (x2 - x1);
  let y = y1 + ua * (y2 - y1);

  return { x, y };
};

export default class Car {
  constructor() {
    this.x = -875;
    this.y = 0;
    this.width = 10;
    this.height = 30;
    this.rotation = Math.PI / 2 + Math.PI / 8;
    this.v = {
      x: 0,
      y: 0,
    };
    this.keys = {
      up: false,
      left: false,
      down: false,
      right: false,
      space: false,
    };
    this.rotationalVelocity = 0;
    this.turnSpeed = 0.02;
    this.driftTurnSpeed = 0.05;
    this.maxVelocity = 5;
    this.friction = 0.03;
    this.acceleration = 0.04;

    this.bindKeys();
  }

  bindKeys() {
    /**
     * @param {KeyboardEvent} event
     */
    const keyListener = ({ key, repeat, type }) => {
      const val = type === "keyup" ? false : true;
      if (["up", "down", "right", "left"].includes(key.toLowerCase().slice(5)))
        this.keys[key.toLowerCase().slice(5)] = val;
      if (key === " " || key.toLowerCase() === "z") this.keys.space = val;
    };

    window.addEventListener("keydown", keyListener);
    window.addEventListener("keyup", keyListener);
  }

  update(multiplier = 1) {
    if (this.keys.right)
      this.rotation +=
        (this.keys.space ? this.driftTurnSpeed : this.turnSpeed) * multiplier;
    if (this.keys.left)
      this.rotation -=
        (this.keys.space ? this.driftTurnSpeed : this.turnSpeed) * multiplier;
    if (this.keys.up || this.keys.down) {
      const dir = this.keys.up ? 1 : -1;
      if (this.keys.space) {
        this.v.x -= Math.cos(this.rotation) * dir * this.acceleration * 4 * multiplier;
        this.v.y -= Math.sin(this.rotation) * dir * this.acceleration * 4 * multiplier;
      } else {
        this.v.x =
          (Math.sqrt(this.v.x ** 2 + this.v.y ** 2) + dir * this.acceleration) *
          Math.cos(this.rotation + Math.PI) *
          multiplier;
        this.v.y =
          (Math.sqrt(this.v.x ** 2 + this.v.y ** 2) + dir * this.acceleration) *
          Math.sin(this.rotation + Math.PI) *
          multiplier;
      }
    }
    if (Math.sqrt(this.v.x ** 2 + this.v.y ** 2) <= this.friction * multiplier) {
      this.v.x = 0;
      this.v.y = 0;
    } else {
      this.v.x -=
        (this.v.x / (Math.abs(this.v.x) + Math.abs(this.v.y))) *
        this.friction *
        multiplier;
      this.v.y -=
        (this.v.y / (Math.abs(this.v.x) + Math.abs(this.v.y))) *
        this.friction *
        multiplier;
    }

    if (Math.sqrt(this.v.x ** 2 + this.v.y ** 2) > this.maxVelocity) {
      this.v.x =
        (this.v.x / (Math.abs(this.v.x) + Math.abs(this.v.y))) * this.maxVelocity;
      this.v.y =
        (this.v.y / (Math.abs(this.v.x) + Math.abs(this.v.y))) * this.maxVelocity;
    }

    this.x += this.v.x * multiplier;
    this.y += this.v.y * multiplier;
  }

  collides(lines) {
    lines = [...lines, lines[0]];
    const edges = this.getEdges();
    const points = [...edges, edges[0]];
    for (let i = 0; i < lines.length - 1; i++) {
      const { x: a, y: b } = lines[i],
        { x: c, y: d } = lines[i + 1];
      for (let j = 0; j < points.length - 1; j++) {
        const { x: p, y: q } = points[j],
          { x: r, y: s } = points[j + 1];
        if (lineLineCollision(a, b, c, d, p, q, r, s)) return true;
      }
    }
    return false;
  }

  raycast(points1, points2) {
    const simulatedLineLength = 2000;
    const num_rays = 10;
    const intersects = [];
    const p1 = [...points1, points1[0]];
    const p2 = [...points2, points2[0]];

    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / (num_rays / 2)) {
      const possibilties = [];
      const [a, b] = [this.x, this.y],
        [c, d] = [
          this.x + Math.cos(this.rotation + angle) * simulatedLineLength,
          this.y + Math.sin(this.rotation + angle) * simulatedLineLength,
        ];
      for (let i = 0; i < p1.length - 1; i++) {
        const [p, q] = [p1[i].x, p1[i].y],
          [r, s] = [p1[i + 1].x, p1[i + 1].y];
        const value = lineLineCollisionPoint(a, b, c, d, p, q, r, s);
        if (value) {
          possibilties.push(value);
        }
      }
      for (let i = 0; i < p2.length - 1; i++) {
        const [p, q] = [p2[i].x, p2[i].y],
          [r, s] = [p2[i + 1].x, p2[i + 1].y];
        const value = lineLineCollisionPoint(a, b, c, d, p, q, r, s);
        if (value) {
          possibilties.push(value);
        }
      }

      possibilties.length > 0 &&
        intersects.push(
          possibilties.reduce((a, b) =>
            Math.sqrt((a.x - this.x) ** 2 + (a.y - this.y) ** 2) <
            Math.sqrt((b.x - this.x) ** 2 + (b.y - this.y) ** 2)
              ? a
              : b
          )
        );
    }

    return intersects;
  }

  getEdges() {
    const halfWidth = this.width / 2;
    const halfHeight = this.height / 2;
    const cosRotation = Math.cos(this.rotation + Math.PI / 2);
    const sinRotation = Math.sin(this.rotation + Math.PI / 2);
    const topLeft = {
      x: this.x - halfWidth * cosRotation + halfHeight * sinRotation,
      y: this.y - halfWidth * sinRotation - halfHeight * cosRotation,
    };
    const topRight = {
      x: this.x + halfWidth * cosRotation + halfHeight * sinRotation,
      y: this.y + halfWidth * sinRotation - halfHeight * cosRotation,
    };
    const bottomLeft = {
      x: this.x - halfWidth * cosRotation - halfHeight * sinRotation,
      y: this.y - halfWidth * sinRotation + halfHeight * cosRotation,
    };
    const bottomRight = {
      x: this.x + halfWidth * cosRotation - halfHeight * sinRotation,
      y: this.y + halfWidth * sinRotation + halfHeight * cosRotation,
    };

    return [topLeft, topRight, bottomRight, bottomLeft];
  }

  getState(track) {
    // [position (2), velocity (2), rotation, raycast (10)]
    return [
      this.x,
      this.y,
      this.v.x,
      this.v.y,
      this.rotation,
      ...this.raycast(track[0], track[1]).map((point) => {
        return Math.sqrt((point.x - this.x) ** 2 + (point.y - this.y) ** 2);
      }),
    ];
  }
  getNumStates() {
    return 6 + 10;
  }
  getNumActions() {
    // [left, right, up, left up, right up, none] (6) + drift for each option (6)
    return 12;
  }
  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation - Math.PI / 2);
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.restore();
  }
}

import Enviroment from "./Enviroment.js";

const track = [
  [
    { x: -900, y: 0 },
    { x: -761.5, y: -260.5 },
    { x: -670.5, y: -350.5 },
    { x: -584.5, y: -384.5 },
    { x: -406.5, y: -391.5 },
    { x: -161.5, y: -397.5 },
    { x: -97.5, y: -301.5 },
    { x: -118.5, y: -232.5 },
    { x: -161.5, y: -180.5 },
    { x: -218.5, y: -100.5 },
    { x: -262.5, y: -95.5 },
    { x: -312.5, y: -84.5 },
    { x: -378.5, y: -88.5 },
    { x: -466.5, y: -84.5 },
    { x: -507.5, y: -53.5 },
    { x: -477.5, y: -13.5 },
    { x: -433.5, y: -11.5 },
    { x: -370.5, y: -8.5 },
    { x: -298.5, y: 4.5 },
    { x: -276.5, y: 6.5 },
    { x: -36.5, y: -349.5 },
    { x: 297.5, y: -358.5 },
    { x: 364.5, y: -300.5 },
    { x: 383.5, y: -264.5 },
    { x: 442.5, y: -375.5 },
    { x: 503.5, y: -401.5 },
    { x: 578.5, y: -408.5 },
    { x: 648.5, y: -407.5 },
    { x: 732.5, y: -389.5 },
    { x: 793.5, y: -181.5 },
    { x: 790.5, y: -27.5 },
    { x: 698.5, y: 235.5 },
    { x: 584.5, y: 304.5 },
    { x: -679.5, y: 316.5 },
    { x: -901.5, y: 196.5 },
    { x: -908.5, y: 32.5 },
  ],
  [
    { x: -850, y: 0 },
    { x: -695.5, y: -188.5 },
    { x: -678.5, y: -237.5 },
    { x: -615.5, y: -273.5 },
    { x: -536.5, y: -289.5 },
    { x: -478.5, y: -307.5 },
    { x: -414.5, y: -308.5 },
    { x: -414.5, y: -262.5 },
    { x: -424.5, y: -229.5 },
    { x: -436.5, y: -218.5 },
    { x: -566.5, y: -193.5 },
    { x: -672.5, y: -125.5 },
    { x: -704.5, y: -54.5 },
    { x: -678.5, y: 64.5 },
    { x: -633.5, y: 152.5 },
    { x: -482.5, y: 148.5 },
    { x: -385.5, y: 152.5 },
    { x: -90.5, y: -45.5 },
    { x: 16.5, y: -245.5 },
    { x: 136.5, y: -226.5 },
    { x: 221.5, y: -210.5 },
    { x: 213.5, y: -165.5 },
    { x: 197.5, y: -94.5 },
    { x: 250.5, y: -45.5 },
    { x: 319.5, y: -32.5 },
    { x: 408.5, y: -36.5 },
    { x: 490.5, y: -85.5 },
    { x: 527.5, y: -120.5 },
    { x: 557.5, y: -237.5 },
    { x: 558.5, y: -307.5 },
    { x: 611.5, y: -205.5 },
    { x: 597.5, y: -142.5 },
    { x: 617.5, y: -78.5 },
    { x: 621.5, y: 57.5 },
    { x: 596.5, y: 130.5 },
    { x: 379.5, y: 209.5 },
    { x: 166.5, y: 207.5 },
    { x: -509.5, y: 221.5 },
    { x: -731.5, y: 212.5 },
    { x: -798.5, y: 149.5 },
    { x: -831.5, y: 63.5 },
  ],
];
/**
 * @type {[{x: number, y: number}[]]}
 */
const [rewardTrack] = [
  JSON.parse(
    `[{"x":-875,"y":0},{"x":-861.5,"y":-24.5},{"x":-849.5,"y":-39.5},{"x":-843.5,"y":-56.5},{"x":-834.5,"y":-72.5},{"x":-821.5,"y":-94.5},{"x":-802.5,"y":-119.5},{"x":-791.5,"y":-132.5},{"x":-773.5,"y":-160.5},{"x":-769.5,"y":-173.5},{"x":-764.5,"y":-191.5},{"x":-752.5,"y":-204.5},{"x":-739.5,"y":-224.5},{"x":-730.5,"y":-239.5},{"x":-713.5,"y":-248.5},{"x":-693.5,"y":-271.5},{"x":-684.5,"y":-284.5},{"x":-674.5,"y":-295.5},{"x":-663.5,"y":-304.5},{"x":-646.5,"y":-315.5},{"x":-620.5,"y":-325.5},{"x":-603.5,"y":-330.5},{"x":-579.5,"y":-333.5},{"x":-545.5,"y":-344.5},{"x":-516.5,"y":-344.5},{"x":-491.5,"y":-346.5},{"x":-452.5,"y":-346.5},{"x":-423.5,"y":-347.5},{"x":-386.5,"y":-345.5},{"x":-354.5,"y":-343.5},{"x":-335.5,"y":-332.5},{"x":-308.5,"y":-315.5},{"x":-286.5,"y":-289.5},{"x":-268.5,"y":-266.5},{"x":-264.5,"y":-252.5},{"x":-271.5,"y":-228.5},{"x":-282.5,"y":-191.5},{"x":-296.5,"y":-170.5},{"x":-327.5,"y":-154.5},{"x":-354.5,"y":-150.5},{"x":-394.5,"y":-150.5},{"x":-433.5,"y":-150.5},{"x":-457.5,"y":-144.5},{"x":-495.5,"y":-142.5},{"x":-537.5,"y":-129.5},{"x":-577.5,"y":-98.5},{"x":-582.5,"y":-82.5},{"x":-596.5,"y":-58.5},{"x":-598.5,"y":-17.5},{"x":-594.5,"y":4.5},{"x":-583.5,"y":27.5},{"x":-568.5,"y":50.5},{"x":-548.5,"y":68.5},{"x":-518.5,"y":75.5},{"x":-474.5,"y":75.5},{"x":-455.5,"y":71.5},{"x":-426.5,"y":68.5},{"x":-406.5,"y":62.5},{"x":-365.5,"y":53.5},{"x":-329.5,"y":50.5},{"x":-304.5,"y":45.5},{"x":-273.5,"y":33.5},{"x":-259.5,"y":23.5},{"x":-218.5,"y":-6.5},{"x":-203.5,"y":-22.5},{"x":-197.5,"y":-35.5},{"x":-191.5,"y":-48.5},{"x":-171.5,"y":-66.5},{"x":-154.5,"y":-91.5},{"x":-142.5,"y":-106.5},{"x":-125.5,"y":-121.5},{"x":-107.5,"y":-143.5},{"x":-99.5,"y":-165.5},{"x":-83.5,"y":-183.5},{"x":-71.5,"y":-206.5},{"x":-53.5,"y":-229.5},{"x":-38.5,"y":-257.5},{"x":-15.5,"y":-282.5},{"x":0.5,"y":-297.5},{"x":44.5,"y":-296.5},{"x":58.5,"y":-295.5},{"x":98.5,"y":-292.5},{"x":124.5,"y":-291.5},{"x":152.5,"y":-284.5},{"x":180.5,"y":-279.5},{"x":213.5,"y":-277.5},{"x":260.5,"y":-260.5},{"x":279.5,"y":-254.5},{"x":294.5,"y":-246.5},{"x":344.5,"y":-241.5},{"x":370.5,"y":-237.5},{"x":400.5,"y":-247.5},{"x":428.5,"y":-261.5},{"x":452.5,"y":-270.5},{"x":480.5,"y":-292.5},{"x":496.5,"y":-313.5},{"x":540.5,"y":-327.5},{"x":581.5,"y":-332.5},{"x":606.5,"y":-336.5},{"x":652.5,"y":-339.5},{"x":683.5,"y":-322.5},{"x":685.5,"y":-298.5},{"x":684.5,"y":-258.5},{"x":687.5,"y":-217.5},{"x":687.5,"y":-201.5},{"x":689.5,"y":-167.5},{"x":690.5,"y":-151.5},{"x":690.5,"y":-127.5},{"x":689.5,"y":-99.5},{"x":694.5,"y":-71.5},{"x":692.5,"y":-42.5},{"x":691.5,"y":-11.5},{"x":690.5,"y":9.5},{"x":686.5,"y":42.5},{"x":683.5,"y":79.5},{"x":676.5,"y":105.5},{"x":652.5,"y":145.5},{"x":632.5,"y":167.5},{"x":602.5,"y":191.5},{"x":575.5,"y":210.5},{"x":546.5,"y":223.5},{"x":507.5,"y":236.5},{"x":466.5,"y":249.5},{"x":439.5,"y":255.5},{"x":413.5,"y":258.5},{"x":374.5,"y":262.5},{"x":334.5,"y":268.5},{"x":286.5,"y":268.5},{"x":255.5,"y":268.5},{"x":212.5,"y":273.5},{"x":165.5,"y":269.5},{"x":121.5,"y":272.5},{"x":81.5,"y":271.5},{"x":49.5,"y":268.5},{"x":5.5,"y":264.5},{"x":-41.5,"y":263.5},{"x":-95.5,"y":262.5},{"x":-123.5,"y":265.5},{"x":-159.5,"y":264.5},{"x":-190.5,"y":264.5},{"x":-222.5,"y":264.5},{"x":-253.5,"y":264.5},{"x":-291.5,"y":264.5},{"x":-340.5,"y":260.5},{"x":-365.5,"y":264.5},{"x":-415.5,"y":263.5},{"x":-453.5,"y":264.5},{"x":-505.5,"y":263.5},{"x":-556.5,"y":263.5},{"x":-591.5,"y":261.5},{"x":-628.5,"y":260.5},{"x":-668.5,"y":260.5},{"x":-701.5,"y":261.5},{"x":-730.5,"y":252.5},{"x":-756.5,"y":239.5},{"x":-780.5,"y":222.5},{"x":-807.5,"y":202.5},{"x":-832.5,"y":174.5},{"x":-854.5,"y":139.5},{"x":-865.5,"y":110.5},{"x":-875.5,"y":73.5},{"x":-875.5,"y":49.5},{"x":-875.5,"y":27.5}]`
  ),
];

/**
 * @typedef {Object} spec
 * @property {string} update - update algorithm, 'qlearn' or 'sarsa'
 * @property {number} gamma - discount factor, [0, 1)
 * @property {number} epsilon - initial epsilon for epsilon-greedy policy, [0, 1)
 * @property {number} alpha - value function learning rate
 * @property {number} experience_add_every - number of time steps before adding another experience to replay memory
 * @property {number} experience_size - size of experience replay memory
 * @property {number} learning_steps_per_iteration - number of learning steps per iteration
 * @property {number} tderror_clamp - for robustness
 * @property {number} num_hidden_units - number of neurons in hidden layer
 */
const spec = {
  /** @type {string} */
  update: "qlearn",
  /** @type {number} */
  gamma: 0.9,
  /** @type {number} */
  epsilon: 0.2,
  /** @type {number} */
  alpha: 0.01,
  /** @type {number} */
  experience_add_every: 10,
  /** @type {number} */
  experience_size: 5000,
  /** @type {number} */
  learning_steps_per_iteration: 20,
  /** @type {number} */
  tderror_clamp: 1.0,
  /** @type {number} */
  num_hidden_units: 100,
};

let iterations = 0;

const env = new Enviroment(track, rewardTrack);
const agent = new RL.DQNAgent(env, spec);

env.startLearn(
  () => {
    const state = env.getState();
    const action = agent.act(state);
    const reward = env.update(action);
    agent.learn(reward);
    reward === -1 && iterations++;
  },
  () => {}
);
window.addEventListener("unload", () => {
  localStorage.setItem("agent", JSON.stringify(agent.toJSON()));
  localStorage.setItem("agent-iterations", iterations);
});
if (localStorage.getItem("agent")) {
  if (confirm("Load agent?")) {
    agent.fromJSON(JSON.parse(localStorage.getItem("agent")));
    iterations = parseInt(localStorage.getItem("agent-iterations"));
    console.log("loaded agent with iterations", iterations);
  }
}

const canvas = document.createElement("canvas");
canvas.classList.add("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
let noBoom = false;
const aiView = false;
let hasPassedHalf = false;
let score = 0;
let progress = 0;
const [points1, points2] = track;
const render = (time) => {
  // reset canvas
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  // prepare for render (center player)
  ctx.translate(
    -env.agent.x + window.innerWidth / 2,
    -env.agent.y + window.innerHeight / 2
  );
  // draw player
  env.agent.render(ctx);

  if (!aiView) {
    // draw outer wall
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(points1[0].x, points1[0].y);
    for (const point of points1.slice(1)) ctx.lineTo(point.x, point.y);
    ctx.lineTo(points1[0].x, points1[0].y);
    ctx.stroke();

    // draw inner wall
    ctx.beginPath();
    ctx.moveTo(points2[0].x, points2[0].y);
    for (const point of points2.slice(1)) ctx.lineTo(point.x, point.y);
    ctx.lineTo(points2[0].x, points2[0].y);
    ctx.stroke();
  }

  // draw edges of player
  const points = env.agent.getEdges();
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (const point of points) ctx.lineTo(point.x, point.y);
  ctx.lineTo(points[0].x, points[0].y);
  ctx.stroke();

  // draw center line for progress tracking
  // ctx.fillStyle = "#ff00ff";
  // ctx.beginPath();
  // ctx.moveTo(points3[0].x, points3[0].y);
  // for (const point of points3) ctx.lineTo(point.x, point.y);
  // ctx.lineTo(points3[0].x, points3[0].y);
  // ctx.stroke();

  // draw two progress markers
  ctx.beginPath();
  ctx.strokeStyle = "#00ff00";
  ctx.lineWidth = 2;
  ctx.moveTo(points1.at(-1).x, points1.at(-1).y);
  ctx.lineTo(points2.at(-1).x, points2.at(-1).y);
  const line1Right = points1.reduce((a, b) => (a.x > b.x ? a : b));
  const line2Right = points2.reduce((a, b) => (a.x > b.x ? a : b));
  ctx.moveTo(line1Right.x, line1Right.y);
  ctx.lineTo(line2Right.x, line2Right.y);
  ctx.stroke();

  // track progress
  progress = rewardTrack
    .map((point, idx) => [
      Math.sqrt((point.x - env.agent.x) ** 2 + (point.y - env.agent.y) ** 2),
      idx,
    ])
    .reduce((a, b) => (a[0] > b[0] ? b : a))[1];

  // additional progress check
  if (env.agent.collides([line1Right, line2Right])) {
    env.agent.color = "blue";
    hasPassedHalf = true;
    console.log(env.agent.color, hasPassedHalf);
  } else if (env.agent.collides([points1.at(-1), points2.at(-1)]) && hasPassedHalf) {
    env.agent.color = "red";
    hasPassedHalf = false;
    score++;
  }

  if (aiView) {
    // draw raycasts
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    const casts = env.agent.raycast();
    for (const castPoint of casts) {
      ctx.moveTo(env.agent.x, env.agent.y);
      ctx.lineTo(castPoint.x, castPoint.y);
    }
    ctx.stroke();
  }

  ctx.translate(
    env.agent.x - window.innerWidth / 2,
    env.agent.y - window.innerHeight / 2
  );
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.textBaseline = "top";
  ctx.fillText(progress.toString(), 10, 10);
  // iterations
  ctx.fillText(iterations.toString(), 10, 40);

  requestAnimationFrame(render);
};

requestAnimationFrame(render);

window.env = env;

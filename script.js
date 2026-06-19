/* ---------- message generator ---------- */

const openings = [
  "BREAKING: the universe just confirmed",
  "A council of stray cats has ruled that",
  "This sticker legally requires you to know",
  "Plot twist —",
  "Field report from the chaos department:",
  "The moon texted ahead to say",
  "An anonymous disco ball reports",
  "Scientifically, emotionally, and dramatically speaking,",
  "URGENT TRANSMISSION:",
  "Your villain origin story begins with",
  "A very serious tribunal has decided",
  "Somewhere a guitar solo is happening because",
  "This is not a drill, it's worse:",
  "The glitter in this room insists that",
];

const subjects = [
  "you",
  "your weird beautiful brain",
  "the person reading this",
  "whoever's holding this phone right now",
  "you, specifically and unapologetically",
  "the legend tapping their phone on a sticker",
];

const actions = [
  "are doing way better than you think",
  "owe yourself a ridiculous treat today",
  "should dance badly in your kitchen tonight",
  "are allowed to be a little too much",
  "need to text someone something unhinged and kind",
  "are the main character of an extremely chaotic indie film",
  "should crank the volume up a notch louder than is socially acceptable",
  "have permission to be dramatic about something small today",
  "are a glorious disaster and that's the brand",
  "deserve fries, immediately, no negotiation",
  "should pick a fight with a vending machine and lose gracefully",
  "are radiating main-character chaos energy right now",
  "should go outside and yell at a cloud for fun",
  "have unfinished business with greatness",
  "are entirely too cool for whatever you're worried about",
];

const endings = [
  "No further questions.",
  "This message will not self-destruct, unfortunately.",
  "Filed under: extremely true.",
  "Tell no one. Or everyone. Be wild about it.",
  "Signed in glitter pen, sealed with attitude.",
  "The drums hit harder after this message.",
  "Stickered. Sealed. Slightly cursed. Delivered with love.",
  "End transmission. Mosh responsibly.",
  "Approved by absolutely nobody official.",
  "Go forth and be insufferable in a good way.",
];

const personalLines = [
  "Last orders have been called on your old life — London's already pouring the next round.",
  "Somewhere a real mountain is filing a formal complaint because you said you'd hike it and then, predictably, did not.",
  "Your masters degree is staging a small intervention: 'graduate already and stop alphabetising the bar fridge.'",
  "The crystal pint glass foresees one (1) hair flip so devastating it briefly changes the weather over London.",
  "You moved in with your mate 'just for a bit' — the office sweepstake on how long 'a bit' actually means is heating up.",
  "Somewhere, a climbing wall is gently disappointed in you for skipping leg day again. It still thinks you're hot though.",
  "Breaking news: your hair looked genuinely incredible today and absolutely nobody told you. Consider this the official notice.",
  "You will manage one (1) Wetherspoons shift today with the quiet, unreasonable dignity of a man with an International Business Management masters.",
  "London is currently rehearsing how to handle how good you're about to look walking around it.",
  "A wandering hiking boot, still pristine in its box, sends its regards and mild disappointment.",
  "The Department of Compliments has approved an emergency dispatch: your hair is doing something incredible right now, act accordingly.",
  "You're a city boy who owns proper hiking gear purely as a personality prop. The mountains know. They forgive you anyway.",
  "Somewhere a pint glass clinks itself in celebration — one step closer to London, one step closer to whatever's next.",
  "The Oracle of Last Orders has spoken: pulling pints today is beneath you and you both know it.",
  "Your future London flat is already nervous about how much hair product is about to move in.",
  "A fortune scrawled on a Wetherspoons beer mat predicts: graduation is coming, and so is your villain era.",
  "Somewhere a colleague's spare room is being prepared. It has no idea what it's signed up for.",
  "The hills you keep almost-climbing have asked the city to send you back when you're ready. No rush. Bring snacks.",
  "An International Business Management degree walks into a pub it also happens to manage. The pub is intimidated.",
  "Your hair has filed for overtime pay given how much work it's been putting in lately. Pay up.",
  "London called. It wants to know if you're bringing the good jacket or just the personality. Bring both.",
  "Somewhere a carabiner clips itself shut in solidarity — you'll get up that mountain eventually, probably, maybe.",
  "You give off main-character energy in a building that primarily serves jugs of cheap lager. Respect.",
  "A very official-looking certificate is being printed somewhere with your name on it. Try to look surprised.",
];

const signatures = [
  "— sent via duct tape & defiance",
  "— with love, chaos, and bad decisions",
  "— from the desk of nobody important",
  "— powered by spite and snacks",
  "— certified 100% unhinged",
  "— stamped by a very tired moth",
];

function randomItem(arr){ return arr[Math.floor(Math.random() * arr.length)]; }

function buildMessage(){
  if (Math.random() < 0.5){
    return `${randomItem(personalLines)} ${randomItem(endings)}`;
  }
  return `${randomItem(openings)} ${randomItem(subjects)} ${randomItem(actions)}. ${randomItem(endings)}`;
}

const palettes = [
  ["#ff2fd6", "#2fe1ff", "#ffe45e"],
  ["#ff5e3a", "#ffe45e", "#7dff8a"],
  ["#7dff8a", "#2fe1ff", "#ff2fd6"],
  ["#ffe45e", "#ff5e3a", "#2fe1ff"],
  ["#fff", "#ff2fd6", "#7dff8a"],
];

/* ---------- canvas fx ---------- */

const canvas = document.getElementById("fx-canvas");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let particles = [];
let fxRunning = true;

function spawnConfetti(colors, count = 140){
  for (let i = 0; i < count; i++){
    particles.push({
      type: "confetti",
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.5,
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 4,
      size: 4 + Math.random() * 8,
      color: randomItem(colors),
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 12,
    });
  }
}

function spawnSparks(colors, count = 90){
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  for (let i = 0; i < count; i++){
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 9;
    particles.push({
      type: "spark",
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 60 + Math.random() * 40,
      maxLife: 100,
      color: randomItem(colors),
      size: 1 + Math.random() * 3,
    });
  }
}

function spawnBlobs(colors, count = 7){
  for (let i = 0; i < count; i++){
    particles.push({
      type: "blob",
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: 80 + Math.random() * 180,
      color: randomItem(colors),
      opacity: 0.18 + Math.random() * 0.12,
    });
  }
}

let lightningTimer = 0;
function maybeLightning(colors){
  lightningTimer--;
  if (lightningTimer <= 0 && Math.random() < 0.015){
    ctx.save();
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = randomItem(colors);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    lightningTimer = 30;
  }
}

function tick(mode, colors){
  if (!fxRunning) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (mode === "lightning") maybeLightning(colors);

  particles.forEach(p => {
    if (p.type === "confetti"){
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.03;
      p.rot += p.vr;
      if (p.y > canvas.height + 30) p.y = -20;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    }
    if (p.type === "spark"){
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.save();
      ctx.globalAlpha = Math.max(p.life / p.maxLife, 0);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    if (p.type === "blob"){
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -p.size) p.x = canvas.width + p.size;
      if (p.x > canvas.width + p.size) p.x = -p.size;
      if (p.y < -p.size) p.y = canvas.height + p.size;
      if (p.y > canvas.height + p.size) p.y = -p.size;
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.filter = "blur(40px)";
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  });

  particles = particles.filter(p => !(p.type === "spark" && p.life <= 0));

  requestAnimationFrame(() => tick(mode, colors));
}

/* ---------- typewriter ---------- */

function typeWriter(el, text, speed = 22){
  el.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

/* ---------- modes ---------- */

const modeNames = ["confetti", "sparks", "blobs", "lightning", "glitch", "vinyl"];

function applyVisualMode(mode, colors, messageEl){
  document.body.style.setProperty("--accent", colors[0]);
  particles = [];

  switch (mode){
    case "confetti":
      spawnConfetti(colors);
      messageEl.classList.add("pop-in");
      break;
    case "sparks":
      spawnSparks(colors);
      messageEl.classList.add("pop-in");
      break;
    case "blobs":
      spawnBlobs(colors);
      messageEl.classList.add("flicker");
      break;
    case "lightning":
      spawnBlobs(colors, 3);
      messageEl.classList.add("shake");
      break;
    case "glitch":
      spawnBlobs(colors, 4);
      messageEl.classList.add("glitch-wrap");
      messageEl.setAttribute("data-text", messageEl.textContent);
      break;
    case "vinyl":
      spawnBlobs(colors, 5);
      messageEl.classList.add("spin");
      break;
  }

  tick(mode, colors);
}

function run(){
  particles = [];
  fxRunning = true;

  const colors = randomItem(palettes);
  const mode = randomItem(modeNames);
  const text = buildMessage();

  const caseNumber = Math.floor(Math.random() * 90000) + 10000;
  document.getElementById("case").textContent = `CASE #${caseNumber} — MODE: ${mode.toUpperCase()}`;

  const messageEl = document.getElementById("message");
  messageEl.className = "";
  messageEl.removeAttribute("data-text");
  messageEl.style.color = colors[0];

  document.getElementById("sign").textContent = randomItem(signatures);

  typeWriter(messageEl, text);

  setTimeout(() => {
    if (mode === "glitch") messageEl.setAttribute("data-text", text);
    applyVisualMode(mode, colors, messageEl);
  }, text.length * 22 + 80);
}

document.getElementById("again").addEventListener("click", run);

run();

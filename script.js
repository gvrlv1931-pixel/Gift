/* ---------- message pool ---------- */

const lines = [
  // unhinged / generic punchy
  "You're dangerously close to becoming a legend tonight.",
  "Crank the volume. Start a small, tasteful riot.",
  "Your aura currently reads: do not approach, mid glow-up.",
  "Go misbehave somewhere with good lighting.",
  "Today's forecast: chaos, charisma, zero regrets.",
  "You're one bad decision away from a great story.",
  "Act like the bouncer owes you a favour.",
  "Loud shirt energy. Wear it like armour.",
  "Somebody just got nervous because you walked in.",
  "Main character. No notes.",
  "You woke up and chose violence (the fun kind).",

  // wetherspoons / notice
  "Hand in that Wetherspoons notice the second London says yes.",
  "You run that pub like it owes you money. Soon it won't matter.",
  "One more shift. One less excuse. Then it's London.",
  "Rack 'em up — you were always better at pool than pulling pints.",
  "An MSc in International Business Management, serving pints anyway. Range.",
  "Pot the black, hand in the notice, book the train.",
  "You'll leave that bar with better stories than tips.",
  "The second London confirms, that notice is in the post.",

  // masters / graduation / london
  "Graduation's coming. So is your villain era.",
  "London's getting a guy who looks better than the skyline.",
  "Your future London flat is nervous about the hair product moving in.",
  "Soon: London. For now: just look unfairly good doing last orders.",
  "A very official certificate is being printed. Try to look surprised.",
  "London called. Bring the good jacket and the personality.",

  // climbing / hiking / city boy
  "That mountain gear's seen more wardrobes than mountains.",
  "City boy who owns a carabiner. Iconic, frankly.",
  "The hills are still waiting. So's your hairdryer.",
  "Hiking boots: bought. Hikes attended: questionable. Style: immaculate.",
  "Somewhere a climbing wall is gently disappointed. It still thinks you're hot.",
  "You'll get up that mountain eventually. Probably. Maybe.",

  // hair / compliments / looking good
  "Your hair did more work today than the whole bar shift.",
  "Breaking: your hair looked incredible and nobody told you. Now they have.",
  "Your hair has filed for overtime pay. Pay up.",
  "Someone should be complimenting you right now. Consider this that.",
  "You looked good today. Annoyingly good, actually.",

  // pool
  "Somewhere a cue ball is nervous. You're on form tonight.",
  "Pool table's the only thing in that pub you've ever truly respected.",
  "Break the rack like you broke the routine.",
  "Two cushions, one pocket, zero doubt. Pot it.",
];


function randomItem(arr){ return arr[Math.floor(Math.random() * arr.length)]; }

function buildMessage(){
  const line = randomItem(lines);
  return tag ? `${line}` : line;
}

const portals = [
  {
    tagline: "Lost? Somewhere, a finger is already pointing exactly at you.",
    label: "FIND THE POINTER →",
    url: "https://pointerpointer.com",
  },
  {
    tagline: "Stressful day? The void's got room for one more scream.",
    label: "SCREAM INTO THE VOID →",
    url: "https://screamintothevoid.com",
  },
  {
    tagline: "Nothing's fine. Click this. Pretend it is.",
    label: "MAKE IT OK →",
    url: "https://make-everything.ok.com",
  },
  {
    tagline: "Bored out your mind? Scroll the longest dog known to man.",
    label: "SCROLL THE LONG DOGE →",
    url: "https://longdogechallenge.com",
  },
  {
    tagline: "Feeling broke? Go blow Bill Gates' fortune instead. He won't notice.",
    label: "SPEND HIS MONEY →",
    url: "https://neal.fun/spend/",
  },
];

/* one bright accent colour at a time — picked fresh every run */
const accents = [
  "#2fe1ff",
  "#ff2fd6",
  "#ffe45e",
  "#7dff8a",
  "#ff5e3a",
  "#b967ff",
];

/* ---------- canvas fx (flat geometric shapes, single accent colour) ---------- */

const canvas = document.getElementById("fx-canvas");
const ctx = canvas ? canvas.getContext("2d") : null;

function resize(){
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let particles = [];
let fxRunning = false;
let fxToken = 0;

function spawnSquares(color, count = 26){
  for (let i = 0; i < count; i++){
    particles.push({
      type: "square",
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.6,
      vy: 1.4 + Math.random() * 2.6,
      size: 6 + Math.random() * 10,
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 6,
      color,
    });
  }
}

function spawnDots(color, count = 40){
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  for (let i = 0; i < count; i++){
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 6;
    particles.push({
      type: "dot",
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 50 + Math.random() * 30,
      maxLife: 80,
      size: 2 + Math.random() * 2,
      color,
    });
  }
}

function spawnLines(color, count = 5){
  for (let i = 0; i < count; i++){
    particles.push({
      type: "line",
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      len: 30 + Math.random() * 60,
      angle: Math.random() * Math.PI,
      opacity: 0.12 + Math.random() * 0.1,
      color,
    });
  }
}

let scanY = -1;
function drawScan(color){
  if (scanY < 0) return;
  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = color;
  ctx.fillRect(0, scanY, canvas.width, 2);
  ctx.restore();
  scanY += 9;
  if (scanY > canvas.height) scanY = -1;
}

function tick(mode, color, token){
  if (!fxRunning || token !== fxToken || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (mode === "scan") drawScan(color);

  particles.forEach(p => {
    if (p.type === "square"){
      p.y += p.vy;
      p.rot += p.vr;
      if (p.y > canvas.height + 20) p.y = -20;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    }
    if (p.type === "dot"){
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.save();
      ctx.globalAlpha = Math.max(p.life / p.maxLife, 0);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      ctx.restore();
    }
    if (p.type === "line"){
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + Math.cos(p.angle) * p.len, p.y + Math.sin(p.angle) * p.len);
      ctx.stroke();
      ctx.restore();
    }
  });

  particles = particles.filter(p => !(p.type === "dot" && p.life <= 0));

  requestAnimationFrame(() => tick(mode, color, token));
}

/* ---------- typewriter ---------- */

let typeTimer = null;

/* runId guards against a stale, in-flight typewriter still ticking
   after a newer run() has already started (e.g. two resume events
   firing back-to-back on a phone). Stale ticks become no-ops. */
function typeWriter(el, text, runId, speed = 22){
  if (typeTimer) clearInterval(typeTimer);
  el.textContent = "";
  let i = 0;
  typeTimer = setInterval(() => {
    if (runId !== currentRunId){
      clearInterval(typeTimer);
      typeTimer = null;
      return;
    }
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length){
      clearInterval(typeTimer);
      typeTimer = null;
    }
  }, speed);
}

/* ---------- modes ---------- */

const modeNames = ["pop", "slide", "stamp", "scan", "squares", "dots"];

function applyVisualMode(mode, color, messageEl, token){
  document.body.style.setProperty("--accent", color);
  particles = [];
  scanY = -1;

  switch (mode){
    case "pop":
      messageEl.classList.add("pop-in");
      spawnLines(color, 3);
      break;
    case "slide":
      messageEl.classList.add("slide-up");
      spawnLines(color, 4);
      break;
    case "stamp":
      messageEl.classList.add("stamp");
      document.getElementById("card")?.classList.add("pulse-glow");
      break;
    case "scan":
      messageEl.classList.add("pop-in");
      scanY = 0;
      break;
    case "squares":
      messageEl.classList.add("pop-in");
      spawnSquares(color);
      break;
    case "dots":
      messageEl.classList.add("pop-in");
      spawnDots(color);
      break;
  }

  tick(mode, color, token);
}

let currentRunId = 0;
let pendingVisualTimeout = null;

function run(){
  const messageEl = document.getElementById("message");
  if (!messageEl) return;

  currentRunId++;
  const runId = currentRunId;

  if (pendingVisualTimeout){
    clearTimeout(pendingVisualTimeout);
    pendingVisualTimeout = null;
  }

  particles = [];
  fxRunning = true;
  fxToken++;
  const token = fxToken;

  const color = randomItem(accents);
  const mode = randomItem(modeNames);
  const isPortal = Math.random() < 0.32;
  const portal = isPortal ? randomItem(portals) : null;
  const text = portal ? portal.tagline : buildMessage();

  const portalBtn = document.getElementById("portal-btn");
  const card = document.getElementById("card");

  messageEl.className = "";
  card?.classList.remove("pulse-glow");

  if (portalBtn){
    portalBtn.classList.remove("show", "btn-pop");
  }

  typeWriter(messageEl, text, runId);

  pendingVisualTimeout = setTimeout(() => {
    if (runId !== currentRunId) return;

    applyVisualMode(mode, color, messageEl, token);

    if (portal && portalBtn){
      portalBtn.textContent = portal.label;
      portalBtn.href = portal.url;
      portalBtn.classList.add("show", "btn-pop");
    }
  }, text.length * 22 + 80);
}

function safeRun(){
  try {
    run();
  } catch (err) {
    const fallback = document.getElementById("message");
    if (fallback) fallback.textContent = buildMessage();
    console.error(err);
  }
}

safeRun();

/* Phones often resume an already-open tab on NFC tap instead of doing a
   fresh navigation, and some browsers restore the page from the
   back/forward cache without re-running scripts. Re-roll whenever the
   page becomes visible again so every tap feels like a new transmission.
   pageshow and visibilitychange can both fire for the same resume, so
   debounce them into a single re-roll. */
let resumeDebounce = null;
function scheduleResume(){
  if (resumeDebounce) clearTimeout(resumeDebounce);
  resumeDebounce = setTimeout(() => {
    resumeDebounce = null;
    safeRun();
  }, 80);
}

window.addEventListener("pageshow", (e) => {
  if (e.persisted) scheduleResume();
});

let lastHiddenAt = 0;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden"){
    lastHiddenAt = Date.now();
  } else if (document.visibilityState === "visible" && lastHiddenAt){
    scheduleResume();
  }
});

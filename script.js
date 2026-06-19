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

function spawnConfetti(colors, count = 90){
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

function spawnSparks(colors, count = 70){
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  for (let i = 0; i < count; i++){
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 8;
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

function spawnBlobs(colors, count = 6){
  for (let i = 0; i < count; i++){
    particles.push({
      type: "blob",
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: 70 + Math.random() * 160,
      color: randomItem(colors),
      opacity: 0.14 + Math.random() * 0.1,
    });
  }
}

let lightningTimer = 0;
function maybeLightning(colors){
  lightningTimer--;
  if (lightningTimer <= 0 && Math.random() < 0.012){
    ctx.save();
    ctx.globalAlpha = 0.28;
    ctx.fillStyle = randomItem(colors);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    lightningTimer = 30;
  }
}

let fxRunning = true;

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

function typeWriter(el, text, speed = 24){
  el.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

/* ---------- modes ---------- */

const modeNames = ["confetti", "sparks", "blobs", "lightning", "glitch", "stamp"];

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
    case "stamp":
      spawnBlobs(colors, 5);
      messageEl.classList.add("stamp");
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

  const messageEl = document.getElementById("message");
  messageEl.className = "";
  messageEl.removeAttribute("data-text");
  messageEl.style.color = colors[0];

  typeWriter(messageEl, text);

  setTimeout(() => {
    if (mode === "glitch") messageEl.setAttribute("data-text", text);
    applyVisualMode(mode, colors, messageEl);
  }, text.length * 24 + 80);
}

run();

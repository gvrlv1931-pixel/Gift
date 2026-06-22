/* ---------- message pool ---------- */

const lines = [
  // unhinged / generic punchy
  "You're dangerously close to becoming a legend tonight.",
  "Crank the volume. Slightly louder than socially acceptable. Time for a mosh.",
  "Your aura currently reads: do not approach, mid glow-up.",
  "Go misbehave somewhere with good lighting.",
  "Today's forecast: chaos, charisma, zero regrets.",
  "You're one bad decision away from a great story.",
  "Act like the bouncer owes you a favour.",
  "Loud shirt energy. Wear it like armour.",
  "Somebody just got nervous because you walked in.",
  "Main character. No comments.",
  "You woke up and chose violence (the fun kind).",
  "You have main character energy and the budget of a side character.",
  "Confidence levels: dangerously unearned, deeply inspiring.",
  "Tonight's vibe: feral, but in a cute way.",
  "You're not lost, you're just exploring consequences.",
  "Somewhere, chaos just checked its phone and saw your name.",
  "You walked in like rent was due on the room.",
  "Red flag count: several. Charm: somehow compensating.",
  "Today you're either the plan or the reason there isn't one.",
  "Your personality has main-quest energy and side-quest follow-through.",
  "You're not a lot. You're exactly enough trouble.",

  // wetherspoons / notice
  "Hand in that Wetherspoons notice the second London says yes.",
  "One more shift. One more drop of patience. Then it's London.",
  "Rack 'em up — you were always better at pool than pulling pints.",
  "An MSc in International Business Management, serving pints anyway. Raging.",
  "Pot the black, hand in the notice, book the train.",
  "You'll leave that bar with better stories than tips.",
  "The second London confirms, that notice is in the office.",
  "Still pulling pints with a Master's degree. Truly a power move nobody asked for.",
  "Behind that bar: untapped potential and several unwashed pint glasses.",
  "Your CV says 'leadership.' Your shift says 'table 6 wants ketchup.'",
  "The till's closed. So is your patience. Hand in that notice.",
  "You give career advice to randoms at the bar and still haven't taken your own.",
  "One more round of 'last orders' and then it's last orders on this whole job.",
  "Wetherspoons isn't holding you back. It's just very patiently waiting for you to leave.",

  // masters / graduation / london
  "Graduation's coming. So is your villain era.",
  "London's getting a guy who looks better than the skyline.",
  "Your future London flat is nervous about the hair product moving in.",
  "Soon: London. For now: just look unfairly good doing last orders.",
  "A very official certificate is being printed. Try to look surprised.",
  "London called. Bring the good jacket and the sassy personality.",

  // climbing / hiking / city boy
  "That mountain gear's seen more wardrobes than mountains.",
  "City boy who owns a climbing rope. Iconic, frankly.",
  "The hills are feeling lonely. Got time for a hike?",
  "Hiking boots: bought. Hikes attended: questionable. Style: immaculate.",
  "Somewhere a climbing wall is gently disappointed. It still thinks you're hot.",
  "You'll get up that mountain eventually. Probably. Maybe.",
  "Somewhere a Scottish hill is still waiting to be disappointed by you in person.",

  // hair / compliments / looking good
  "Your hair did more work today than the whole bar shift.",
  "Breaking: your hair looked incredible and nobody told you. Now they have.",
  "Your hair has filed for overtime pay. Pay up.",
  "Someone should be complimenting you right now. Consider this that.",
  "You looked good today. Annoyingly good, actually.",
  "Your hair just outperformed your last three decisions combined.",
  "Your hair is doing more strategic planning than you are.",
  "You talk a big game, but you also just... follow through. Weird flex, but okay.",

  // pool
  "Somewhere a cue ball is nervous. You're on form tonight.",
  "Show that pool table who's boss",
  "That break shot had more commitment than your last five plans.",
  "Pool table: respected. Opponents: not so much.",
  "You talk a big game for someone about to scratch on the eight ball.",
  
  // playful /
  "Today's energy: smug, but you've earned it.",
  "You're somehow charming about things you shouldn't be charming about.",
  "The universe looked at your plans today and just shrugged, impressed.",
  "Your hair, your confidence, your questionable timing — all weirdly working today.",
  "Somewhere a fortune teller looked at your future and just laughed, delighted.",
  "Today's forecast: you, slightly insufferable, mostly likeable.",
  "The cards drew something good for once and even they seemed surprised.",
  "You're going to get away with something today. Lucky you.",
  "A small win is coming your way. You'll probably take full credit.",
  "The stars aligned today purely to watch you be smug about it.",
  "Somewhere, luck is rolling its eyes and helping you out anyway.",
  "Today you're effortlessly fine at everything, which is somehow more annoying than failing.",
  "The omens are good today. You'll act like you predicted that.",
  "Destiny's in a good mood and has decided you deserve it, against its better judgment.",

  // climbing / hiking
  "That summit's not going to climb itself, but it would be impressed if you tried.",
  "You've got the chalk bag. Now get the send.",
  "The crag's been asking about you. It's been getting lonely",
  "You said 'quick hike' four hours ago. Send help, or snacks.",
  "Your gear's more committed to climbing than you are this week.",
  "Somewhere a mountain is mildly inconvenienced by your ambition.",
  "You packed for an epic. You'll probably get a nice walk. Both count.",
  "Your boots have seen more car parks than peaks. Fix that.",
  
  // road trips / spontaneous
  "Tank's full, plans are loose, regrets are pending.",
  "You'll end up somewhere you didn't plan and like it more.",
  "Pack light. Decide nothing. Let it happen.",
  "Today's itinerary: vibes, fuel stops, and one bad decision.",
  "The best plans today are the ones you make at the petrol station.",
  "Somewhere a layby has your name on it and a decent view.",
  "You're one wrong turn away from your favourite story this year.",
  "Nobody knows where you're going. Including you. Good.",
  "Spontaneity called. You already said yes before it finished the sentence.",
  "You'll regret nothing except maybe the snack choices.",
  "That detour's going to be the only part anyone remembers.",
  "Somewhere a stranger's about to give you better directions than your GPS.",
  "Today's plan has exactly one rule: no plan survives past lunch.",

  // horoscope format 
  "Someone's going to think about you today longer than they'll admit.",
  "Today's forecast: you, slightly too charming for your own good.",
  "You'll catch someone's eye today without even trying. Mildly unfair, honestly.",
  "The stars suggest a message today that makes you smile at your phone like an idiot.",
  "Today favours flirting with disaster and at least one other person.",
  "Your charm levels are dangerously high today. Use responsibly.",
  "Someone's going to laugh at something you said and think about it later.",
  "Today's energy: a little reckless, a little romantic, fully unbothered.",
  "The universe suggests today is a good day to text first.",
  "You'll be someone's favourite part of the week today and not even know it.",
  "Today's forecast: eye contact that lasts a second too long.",
  "The cosmos says today's the day to say the bold thing instead of the safe thing.",
  "Money's going to behave oddly today. In your favour, of course.",
  "Today's a good day for a decision you've been overthinking. Just do the thing.",
  "Someone from your past crosses your mind today. Let it pass, or don't.",
  "The stars suggest your phone's about to get more interesting.",
  "Today rewards honesty, even the inconvenient kind.",
  "You'll get a compliment today you weren't fishing for. Take it anyway.",
  "Today's forecast: good food, better company, no regrets.",
  "The planets suggest sleeping on the big decision. Just one more night.",
  "Today's a day for showing up uninvited and somehow being the best part of it.",
  "You'll feel unusually lucky today, like the universe owes you one and is finally paying up.",
  "Someone's going to remember today as 'that one time you were unbelievably hot.'",
  "The stars suggest today's chaos has decent taste.",
  "Today's energy: slightly dangerous, extremely kissable.",
  "Expect a small spark today, the kind you don't mention but definitely notice.",
  
];


function randomItem(arr){ return arr[Math.floor(Math.random() * arr.length)]; }

function buildMessage(){
  return randomItem(lines);
}

const portals = [
  {
    tagline: "Lost? Somewhere, a finger has already found you.",
    label: "FIND THE POINTER →",
    url: "https://pointerpointer.com",
  },
  {
    tagline: "Stressful day? The void's got room for one more scream.",
    label: "SCREAM INTO THE VOID →",
    url: "https://screamintothevoid.com",
  },
  {
    tagline: "Life is meaningless. Feeling hopeless? Press here",
    label: "MAKE IT OK →",
    url: "https://make-everything-ok.com/",
  },
  {
    tagline: "Bored? Scroll the longest dog known to man.",
    label: "SCROLL THE LONG DOGE →",
    url: "https://longdogechallenge.com",
  },
  {
    tagline: "Feeling broke? Go blow Bill Gates' fortune instead. He won't notice.",
    label: "SPEND HIS MONEY →",
    url: "https://neal.fun/spend/",
  },
];

/* underground club colour signals — blood red, toxic green, bruise
   purple, acid yellow — picked fresh every run against the bone ink */
const accentDuos = [
  { fill: "#c8102e", line: "#e8e3d3" },
  { fill: "#9aff3c", line: "#e8e3d3" },
  { fill: "#8a2be2", line: "#e8e3d3" },
  { fill: "#e8e3d3", line: "#c8102e" },
  { fill: "#ff6b00", line: "#e8e3d3" },
];

/* ---------- canvas fx: a single one-shot burst, fired only on "explode" ---------- */

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
let fxToken = 0;

function spawnBurst(color, count = 22){
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  for (let i = 0; i < count; i++){
    const angle = Math.random() * Math.PI * 2;
    const speed = 3 + Math.random() * 9;
    particles.push({
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 14,
      life: 26 + Math.random() * 14,
      maxLife: 40,
      size: 5 + Math.random() * 9,
      color,
    });
  }
}

function drawParticle(p){
  ctx.save();
  ctx.globalAlpha = Math.max(p.life / p.maxLife, 0);
  ctx.translate(p.x, p.y);
  ctx.rotate((p.rot * Math.PI) / 180);
  ctx.fillStyle = p.color;
  ctx.beginPath();
  ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function tick(token){
  if (token !== fxToken || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    p.life--;
    drawParticle(p);
  });

  particles = particles.filter(p => p.life > 0);

  if (particles.length) requestAnimationFrame(() => tick(token));
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

/* ---------- card entrance modes ---------- */

const cardModes = ["drop", "shake", "explode", "fly", "fade", "glitch"];
const flyOrigins = [
  { x: "-130vw", y: "-40vh", r: "-50deg" },
  { x: "130vw", y: "-30vh", r: "55deg" },
  { x: "-110vw", y: "60vh", r: "60deg" },
  { x: "120vw", y: "70vh", r: "-65deg" },
  { x: "0vw", y: "-140vh", r: "40deg" },
];

function applyCardAnimation(mode, duo, card){
  document.body.style.setProperty("--accent", duo.fill);
  document.body.style.setProperty("--line", duo.line);
  particles = [];

  card.classList.remove("card-drop", "card-shake", "card-explode", "card-fly", "card-fade", "card-glitch", "pulse-glow");
  card.style.removeProperty("--fly-x");
  card.style.removeProperty("--fly-y");
  card.style.removeProperty("--fly-r");

  switch (mode){
    case "drop":
      card.classList.add("card-drop");
      break;
    case "shake":
      card.classList.add("card-shake");
      break;
    case "explode":
      card.classList.add("card-explode");
      card.classList.add("pulse-glow");
      spawnBurst(duo.fill);
      fxToken++;
      tick(fxToken);
      break;
    case "fly": {
      const origin = randomItem(flyOrigins);
      card.style.setProperty("--fly-x", origin.x);
      card.style.setProperty("--fly-y", origin.y);
      card.style.setProperty("--fly-r", origin.r);
      card.classList.add("card-fly");
      break;
    }
    case "glitch":
      card.classList.add("card-glitch");
      break;
    case "fade":
      card.classList.add("card-fade");
      break;
  }
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

  const duo = randomItem(accentDuos);
  const mode = randomItem(cardModes);
  const isPortal = Math.random() < 0.32;
  const portal = isPortal ? randomItem(portals) : null;
  const text = portal ? portal.tagline : buildMessage();

  const portalBtn = document.getElementById("portal-btn");
  const card = document.getElementById("card");
  if (!card) return;

  messageEl.textContent = "";

  if (portalBtn){
    portalBtn.classList.remove("show", "btn-pop");
  }

  /* card flies/drops/shakes/explodes/fades into place first, text types
     in right after it settles so the motion reads clearly before the
     message competes for attention */
  applyCardAnimation(mode, duo, card);

  pendingVisualTimeout = setTimeout(() => {
    if (runId !== currentRunId) return;

    typeWriter(messageEl, text, runId);

    if (portal && portalBtn){
      portalBtn.textContent = portal.label;
      portalBtn.href = portal.url;
      portalBtn.classList.add("show", "btn-pop");
    }
  }, 520);
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

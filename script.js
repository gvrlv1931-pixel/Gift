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
  "Somewhere, handsomeness just checked its phone and saw your name.",
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

    // friends / family / community
  "Today favours the people who show up uninvited and stay till 2am.",
  "The stars suggest your flat is about to need more chairs.",
  "Today's a good day to text the group chat first for once.",
  "Someone you haven't spoken to in a while is thinking about reaching out.",
  "The universe suggests hosting something, even badly. Especially badly.",
  "Today rewards the people who organise the plan nobody else will.",
  "Expect a small reunion energy today, even if it's just one good phone call.",
  "The stars say your future flat needs a parties policy. Start one.",
  "Today's forecast: good company, loud kitchen, someone's playlist on shuffle.",
  "You'll be the reason a group chat actually makes plans this week.",
  "The cosmos suggests it's time to start the thing you keep talking about starting.",
  "Today's a day for gathering people, not just plans.",
  "Someone in your circle needs you to make the first move on plans. Make it.",
  "Today favours the friend who remembers everyone's order without asking.",
  "The stars say new city, same chaos, better guest list.",
  "Today's forecast: strangers becoming regulars, regulars becoming family.",
  "Expect a 'come over, I'm cooking too much food' kind of day.",
  "The universe suggests today's the day someone becomes a flatmate for life.",
  "Today's a good day to send the invite instead of waiting for one.",
  "The stars say community doesn't find you. You text first, you show up, it builds itself.",

    // flirty banter (v2, more varied)
  "Careful. That smile's about to start something.",
  "Somebody's saving your messages for later. They won't admit it.",
  "You flirt like it's a hobby you're weirdly good at.",
  "Eye contact today comes with consequences. Worth it though.",
  "That laugh of yours just ruined someone's whole plan to play it cool.",
  "You walked in and the room's small talk got noticeably worse.",
  "Whatever you're doing tonight, do it slower. Someone's watching.",
  "You're not subtle. You're just confident enough that nobody minds.",
  "Somebody's going to remember the way you said that. Annoyingly so.",
  "Tell the truth tonight. The bold version, not the polite one.",
  "That outfit's doing something it shouldn't legally be allowed to do.",
  "You're giving 'main love interest who causes problems on purpose' energy.",
  "Whoever you text first tonight is going to smile at their phone like an idiot.",
  "You're a lot of trouble. The good kind. Lean into it.",
  "That's not a vibe, that's a warning label.",
  "Somebody's going to think about this conversation longer than they should.",
  "You've got main character chaos and a flirt's timing. Dangerous combo.",
  "Go be unreasonably charming at someone. It's basically your job today.",

    // whimsical / absurd
  "A pigeon just made eye contact with you like it knows something.",
  "Somewhere, a goose is plotting and you're not invited.",
  "Your shadow left ten minutes ago. Catch up.",
  "Today, trust no vending machine.",
  "A wizard would clock you immediately as 'the chaotic one.'",
  "Somewhere a sock went missing on purpose. It had plans.",
  "You have the energy of a man who once argued with a seagull and lost.",
  "A small gremlin has been assigned to your day. Be nice to it.",
  "Somewhere a candle is being lit in your honour, for no reason anyone can explain.",
  "Today, the universe is held together with tape and vibes. Mostly your vibes.",
  "A crow is watching you from a distance, taking notes.",
  "Somewhere, a door creaked open by itself just to see what you'd do.",
  "Your aura today smells faintly of mischief and instant noodles.",
  "A very small dragon has chosen you as its emotional support human.",
  "Somewhere, a clock is running backwards just for you.",
  "You've been quietly knighted by absolutely no one, but it still counts.",
  "A houseplant is judging your life choices. It's not wrong.",
  "Somewhere, a fortune cookie is being written specifically to confuse you.",
  "You are, statistically, more interesting than a Tuesday has any right to be.",
  "A gnome has officially endorsed your plans for today.",
  "Somewhere, a teapot is whistling in solidarity with your five year plan",

    // extra surreal / unhinged
  "A door appeared today that wasn't there yesterday. Walk through it.",
  "Somewhere, a fish is filing a complaint about your behaviour.",
  "Time moved slightly sideways today. Nobody else noticed. You did.",
  "A committee of moths has convened to discuss your aura.",
  "Somewhere, a vending machine dreamed about you and woke up concerned.",
  "Your reflection blinked first today. Mildly concerning.",
  "A council of garden gnomes has reached a verdict. It's in your favour.",
  "Somewhere, a cloud is shaped exactly like your last bad decision.",
  "The number 4 is following you today. Acknowledge it or don't.",
  "A snail somewhere is rooting for you, slowly but sincerely.",
  "Today, your left sock has more ambition than the rest of your outfit.",
  "Somewhere, a parallel version of you is having a much worse day. Be grateful.",
  "A pigeon council has voted you 'most likely to cause something.'",
  "The wifi today is haunted, but only a little, and only by good vibes.",
  "Somewhere, a teaspoon has gone missing and it's spiritually your fault.",
  "A very old tree is thinking about you right now, in tree time, which is slow.",
  "Your horoscope today was written by a confused owl. Trust it anyway.",
  "Somewhere, a puddle reflected something that wasn't actually there.",
  "You've been mildly cursed with extra charisma today. Apologies in advance.",
  "A ghost walked past you today and thought 'oh, them again.'",
  "Somewhere, a calendar skipped a day just to mess with you specifically.",
  "The universe misplaced your bad luck today. Use the window wisely.",
  "A spoon bent slightly in your kitchen today. No reason. Just felt like it.",
  "Somewhere, a crow held a tiny meeting about your potential.",
  "Today, gravity is 4% more optional than usual, just for you.",

    // evil advice
  "Reply 'k' and watch the chaos unfold.",
  "Leave them on read. They'll survive. Probably.",
  "Order the most expensive thing on the menu and let them figure it out.",
  "Tell the truth, but at the worst possible moment.",
  "Don't apologise. Just bring snacks and act like nothing happened.",
  "Cancel the plan ten minutes before. For fun.",
  "Take the last slice. Make eye contact while doing it.",
  "Start the rumour. Watch how fast it comes back to you.",
  "Say 'we should hang out soon' and never follow up. Classic.",
  "Let them think you're mad. You're not. It's funnier this way.",
  "Double text, then triple text, then never explain why.",
  "Show up late and act like everyone else was early.",
  "Ghost them for two days, then send a meme like nothing happened.",
  "Take credit for the good idea. Quietly. Smile a lot.",
  "Send the risky text. Worst case, it's a great story.",
  "Tell them 'we'll see' and mean absolutely nothing by it.",
  "Set the thermostat one degree off and never admit it was you.",
  "Agree to the plan, then change it once everyone's already committed.",
  "Let the group chat think you're typing for ten full minutes. Say nothing.",
  "Borrow it. Never mention returning it. Let time do the talking.",
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

/* ---------- scratch-to-reveal coating ---------- */

const scratchHints = [
  "Scratch the void.",
  "Claw it open.",
  "Reveal your fate. Use your finger.",
  "Scratch here. If you dare.",
  "Uncover it before it changes its mind.",
  "Scratch like you mean it.",
  "Something's under there. Go find it.",
  "Don't be gentle.",
  "Rub it. Harder.",
  "The oracle's shy. Coax it out.",
  "Scratch to summon.",
  "Peel back the secret.",
  "It won't reveal itself. Make it.",
  "Drag your finger across destiny.",
  "Scratch. Why so many questions",
  "The truth is under the foil.",
  "Get your hands dirty.",
  "Wake it up.",
  "Don't be shy. Use those fingers.",
  "It likes a little pressure.",
  "Go on. Get what's yours",
  "Scratch it like you mean it",
  "Bit of gentle petting never hurt anyone",
  "Oh yeah. Rub it.",
  "Drag your finger across. Slow.",
];

const scratchCanvas = document.getElementById("scratch-canvas");
const scratchCtx = scratchCanvas ? scratchCanvas.getContext("2d") : null;
const scratchHintEl = document.getElementById("scratch-hint");

const SCRATCH_THRESHOLD = 0.55;
const SCRATCH_BRUSH_RADIUS = 26;
const SCRATCH_SAMPLE_W = 48;
const SCRATCH_SAMPLE_H = 28;

const sampleCanvas = document.createElement("canvas");
sampleCanvas.width = SCRATCH_SAMPLE_W;
sampleCanvas.height = SCRATCH_SAMPLE_H;
const sampleCtx = sampleCanvas.getContext("2d", { willReadFrequently: true });

const scratch = {
  active: false,
  cleared: false,
  moveCount: 0,
  runId: 0,
  duo: null,
};

function sizeScratchCanvas(){
  const wrap = document.getElementById("message-wrap");
  const messageEl = document.getElementById("message");
  if (!wrap || !messageEl || !scratchCanvas || !scratchCtx) return;

  const wrapRect = wrap.getBoundingClientRect();
  const rect = messageEl.getBoundingClientRect();
  const width = Math.max(rect.width, 40);
  const height = Math.max(rect.height, 30);
  const dpr = window.devicePixelRatio || 1;

  scratchCanvas.style.left = (rect.left - wrapRect.left) + "px";
  scratchCanvas.style.top = (rect.top - wrapRect.top) + "px";
  scratchCanvas.style.width = width + "px";
  scratchCanvas.style.height = height + "px";

  scratchCanvas.width = Math.round(width * dpr);
  scratchCanvas.height = Math.round(height * dpr);
  scratchCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

/* brushed-foil scratch coating, tinted with this draw's accent colour */
function paintScratchCoating(width, height, duo){
  if (!scratchCtx || !width || !height) return;
  scratchCtx.clearRect(0, 0, width, height);
  scratchCtx.globalCompositeOperation = "source-over";

  const grad = scratchCtx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, "#3a3a3a");
  grad.addColorStop(.5, "#181818");
  grad.addColorStop(1, "#2e2e2e");
  scratchCtx.fillStyle = grad;
  scratchCtx.fillRect(0, 0, width, height);

  scratchCtx.strokeStyle = "rgba(255,255,255,0.06)";
  scratchCtx.lineWidth = 1;
  for (let x = -height; x < width; x += 4){
    scratchCtx.beginPath();
    scratchCtx.moveTo(x, 0);
    scratchCtx.lineTo(x + height, height);
    scratchCtx.stroke();
  }

  scratchCtx.strokeStyle = duo.fill + "2e";
  scratchCtx.lineWidth = 1.4;
  for (let i = 0; i < 5; i++){
    const y = (height / 5) * i + Math.random() * 6;
    scratchCtx.beginPath();
    scratchCtx.moveTo(0, y);
    scratchCtx.lineTo(width, y + (Math.random() * 10 - 5));
    scratchCtx.stroke();
  }

  for (let i = 0; i < 130; i++){
    const nx = Math.random() * width;
    const ny = Math.random() * height;
    scratchCtx.fillStyle = Math.random() > 0.5 ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.18)";
    scratchCtx.fillRect(nx, ny, 1.4, 1.4);
  }

  scratchCtx.strokeStyle = duo.fill;
  scratchCtx.lineWidth = 2;
  scratchCtx.strokeRect(1, 1, width - 2, height - 2);
}

function scratchAt(x, y){
  if (!scratchCtx) return;
  scratchCtx.globalCompositeOperation = "destination-out";
  scratchCtx.beginPath();
  scratchCtx.arc(x, y, SCRATCH_BRUSH_RADIUS, 0, Math.PI * 2);
  scratchCtx.fill();
}

/* sampled at low res every few moves rather than every frame — a full
   getImageData() on the real canvas every pointermove is the kind of
   thing that looks fine on desktop and chugs on a mid-range phone */
function getClearedRatio(){
  if (!sampleCtx || !scratchCanvas) return 0;
  sampleCtx.clearRect(0, 0, SCRATCH_SAMPLE_W, SCRATCH_SAMPLE_H);
  sampleCtx.drawImage(scratchCanvas, 0, 0, SCRATCH_SAMPLE_W, SCRATCH_SAMPLE_H);
  const data = sampleCtx.getImageData(0, 0, SCRATCH_SAMPLE_W, SCRATCH_SAMPLE_H).data;
  let cleared = 0;
  for (let i = 3; i < data.length; i += 4){
    if (data[i] < 40) cleared++;
  }
  return cleared / (SCRATCH_SAMPLE_W * SCRATCH_SAMPLE_H);
}

function completeScratch(){
  if (scratch.cleared || !scratchCanvas) return;
  scratch.cleared = true;
  const runId = scratch.runId;
  scratchCanvas.classList.add("scratch-cleared");
  setTimeout(() => {
    if (runId === currentRunId) scratchCanvas.classList.add("scratch-hidden");
  }, 520);
}

function hideScratchHint(){
  if (scratchHintEl) scratchHintEl.classList.add("hint-fade");
}

function scratchPointFromEvent(e){
  const rect = scratchCanvas.getBoundingClientRect();
  return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

function handleScratchStart(e){
  if (!scratchCanvas || scratch.cleared || scratch.runId !== currentRunId) return;
  scratch.active = true;
  hideScratchHint();
  const p = scratchPointFromEvent(e);
  scratchAt(p.x, p.y);
  if (e.cancelable) e.preventDefault();
}

function handleScratchMove(e){
  if (!scratchCanvas || !scratch.active || scratch.cleared || scratch.runId !== currentRunId) return;
  const p = scratchPointFromEvent(e);
  scratchAt(p.x, p.y);
  scratch.moveCount++;
  if (scratch.moveCount % 5 === 0 && getClearedRatio() >= SCRATCH_THRESHOLD){
    completeScratch();
  }
  if (e.cancelable) e.preventDefault();
}

function handleScratchEnd(){
  scratch.active = false;
}

if (scratchCanvas){
  scratchCanvas.addEventListener("pointerdown", handleScratchStart);
  window.addEventListener("pointermove", handleScratchMove);
  window.addEventListener("pointerup", handleScratchEnd);
  window.addEventListener("pointercancel", handleScratchEnd);
  window.addEventListener("resize", () => {
    if (!scratch.cleared && scratch.runId === currentRunId && scratch.duo){
      sizeScratchCanvas();
      paintScratchCoating(scratchCanvas.clientWidth, scratchCanvas.clientHeight, scratch.duo);
    }
  });
}

function setupScratch(runId, duo){
  if (!scratchCanvas || !scratchCtx) return;
  scratchCanvas.classList.remove("scratch-cleared", "scratch-hidden");
  scratch.cleared = false;
  scratch.active = false;
  scratch.moveCount = 0;
  scratch.runId = runId;
  scratch.duo = duo;

  sizeScratchCanvas();
  paintScratchCoating(scratchCanvas.clientWidth, scratchCanvas.clientHeight, duo);

  if (scratchHintEl){
    scratchHintEl.textContent = randomItem(scratchHints);
    scratchHintEl.classList.remove("hint-fade");
  }
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

    messageEl.textContent = text;
    setupScratch(runId, duo);

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

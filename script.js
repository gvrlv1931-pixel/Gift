const messages = [

"Today optimisation has been suspended. Proceed using instinct.",

"The mountain has reviewed your plans and recommends less planning.",

"You are authorised to leave one thing unfinished.",

"Climb something today. A staircase counts.",

"A future version of you says you're overthinking it.",

"Adventure has been detected within walking distance.",

"Trade one certainty for one possibility.",

"The city is hiding something interesting. Go find it.",

"You may release control of one outcome today.",

"A pigeon has reviewed your life strategy. It recommends snacks.",

"The route with the better story is now preferred.",

"Your next level requires 12% more curiosity.",

"Urgent reminder: not everything needs improving.",

"Look up. This is part of the assignment.",

"The Department of Adventure approves mild recklessness.",

"Take the scenic route. Nobody is grading efficiency.",

"Today's side quest: notice something beautiful.",

"The summit can wait. Enjoy the climb.",

"You are carrying more certainty than required.",

"An unnecessary detour may become a memory."

];

const colors = [
"#ff5e5b",
"#00e5ff",
"#f7b801",
"#ff66c4",
"#7cff6b",
"#ffffff"
];

const animations = [
"glow",
"float",
"shake",
"slide"
];

const message =
messages[Math.floor(Math.random() * messages.length)];

const color =
colors[Math.floor(Math.random() * colors.length)];

const animation =
animations[Math.floor(Math.random() * animations.length)];

const messageBox =
document.getElementById("message");

messageBox.textContent = message;
messageBox.style.color = color;
messageBox.classList.add(animation);

const particles =
document.getElementById("particles");

for(let i=0;i<30;i++){

const p = document.createElement("div");

p.classList.add("particle");

const size = Math.random()*8+3;

p.style.width = size + "px";
p.style.height = size + "px";

p.style.background = color;

p.style.left = Math.random()*100 + "vw";
p.style.top = Math.random()*100 + "vh";

document.body.appendChild(p);

p.animate(
[
    {transform:"translateY(0px)"},
    {transform:"translateY(-150px)"}
],
{
    duration:4000 + Math.random()*4000,
    iterations:Infinity
});

}

const openings = [
"Adventure has been detected",
"The mountain reports",
"A future version of you confirms",
"The Department has approved",
"An audit of your plans revealed",
"The city would like to inform you",
"After careful review",
"A wandering pigeon has determined",
"Your next chapter requires",
"Control systems report"
];

const actions = [
"one unnecessary detour",
"a spontaneous decision",
"more curiosity",
"less optimisation",
"one moment of awe",
"a questionable shortcut",
"one conversation with a stranger",
"a scenic route",
"one tiny rebellion",
"an unexpected adventure",
"more trust in yourself",
"slightly less planning",
"a pause before solving everything"
];

const endings = [
"Proceed accordingly.",
"This is not a drill.",
"The paperwork has already been filed.",
"No further explanation will be provided.",
"The mountain seems confident about this.",
"Good luck.",
"Resistance is unnecessary.",
"The city approves.",
"Your future self says thanks.",
"Expiry: midnight."
];

const colors = [
"#00E5FF",
"#FF6EC7",
"#FFE45E",
"#7DFF8A",
"#FFFFFF"
];

function randomItem(array) {
return array[Math.floor(Math.random() * array.length)];
}

const color = randomItem(colors);

const caseNumber =
Math.floor(Math.random() * 90000) + 10000;

const transmission =

`${randomItem(openings)}:

${randomItem(actions)}

${randomItem(endings)}`;

document.getElementById("case").textContent =
CASE #${caseNumber};

const messageElement =
document.getElementById("message");

messageElement.style.color = color;

typeWriter(transmission);

function typeWriter(text) {

let i = 0;

const speed = 28;

const timer = setInterval(() => {

    messageElement.textContent += text.charAt(i);

    i++;

    if (i >= text.length) {
        clearInterval(timer);
    }

}, speed);

}

createOrbs(color);

function createOrbs(color) {

for (let i = 0; i < 8; i++) {

    const orb = document.createElement("div");

    orb.className = "orb";

    const size =
        Math.random() * 250 + 120;

    orb.style.width = size + "px";
    orb.style.height = size + "px";

    orb.style.background = color;

    orb.style.left =
        Math.random() * 100 + "vw";

    orb.style.top =
        Math.random() * 100 + "vh";

    document.body.appendChild(orb);

    orb.animate(
        [
            {
                transform:
                    `translate(0px,0px)`
            },
            {
                transform:
                    `translate(${Math.random() * 120 - 60}px,-120px)`
            },
            {
                transform:
                    `translate(0px,0px)`
            }
        ],
        {
            duration:
                10000 + Math.random() * 6000,
            iterations: Infinity
        }
    );
}

}

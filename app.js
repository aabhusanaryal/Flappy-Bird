// Selectors
const gameContainer = document.querySelector(".gameContainer");
const char = document.querySelector("#char");
const pipeContainer = document.querySelector(".gameContainer");
// Other variables
let windowHeight = window.innerHeight;
let charPosition = windowHeight / 2;
let pipePosition = 500;
// Functions
function changeCharPos(newPos) {
    char.style.top = `${newPos}px`;
}

function changePipePos(newPos) {
    pipeContainer.style.left = `${newPos}px`;
}

function addPipe() {
    const newPipeContainer = document.createElement("span");
    const newPipeTop = document.createElement("div");
    const newPipeBottom = document.createElement("div");
    newPipeContainer.classList.add("pipeContainer");
    newPipeTop.classList.add("pipe", "topPipe");
    newPipeBottom.classList.add("pipe", "bottomPipe");
    newPipeContainer.append(newPipeTop, newPipeBottom);
    gameContainer.append(newPipeContainer);
}
//Setting the char position to mid of screen, initially
changeCharPos(charPosition);

// Game Loop
setInterval(() => {
    // charPosition += 20;
    // changeCharPos(charPosition);
    // pipePosition -= 15;
    // changePipePos(pipePosition);
}, 60);

document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        charPosition -= 250;
        changeCharPos(position);
    }
});

addPipe();
addPipe();
addPipe();
addPipe();

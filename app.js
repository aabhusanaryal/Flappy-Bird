// Selectors
const gameContainer = document.querySelector(".gameContainer");
const char = document.querySelector("#char");
const pipeContainer = document.querySelector(".gameContainer");
// Other variables
let windowHeight = window.innerHeight;
let charPosition = windowHeight / 2;
let pipePosition = 500;
let score = 0;

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

function removePipe(i) {
    let pipes = document.getElementsByClassName("pipeContainer");
    gameContainer.removeChild(pipes[i]);
}

function gameOver() {
    alert("Game Over!");
}

function checker() {
    let i = 0; //index for pipes
    const pipes = document.getElementsByClassName("pipeContainer");
    const coorPipe = pipes[i].getBoundingClientRect(); //used to find coordinates relative to browser
    if (coorPipe.left <= 0) {
        removePipe(i);
        addPipe();
        console.log("delete");
        // i++;
    }
}
//Setting the char position to mid of screen, initially
changeCharPos(charPosition);

// Game Loop
setInterval(() => {
    // charPosition += 20;
    // changeCharPos(charPosition);
    // pipePosition -= 15;
    // changePipePos(pipePosition);
    // checker();
}, 60);

document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        charPosition -= 250;
        changeCharPos(charPosition);
    }
});

// addPipe();
// addPipe();
// addPipe();
// addPipe();
// addPipe();
// addPipe();
// addPipe();

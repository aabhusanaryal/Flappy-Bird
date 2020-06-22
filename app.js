// Selectors
const char = document.querySelector("#char");
const pipeContainer = document.querySelector(".pipeContainer");
// Other variables
let charPosition = window.innerHeight / 2;
let pipePosition = 500;
// Functions
function changeCharPos(newPos) {
    char.style.top = `${newPos}px`;
}

function changePipePos(newPos) {
    pipeContainer.style.left = `${newPos}px`;
}
//Setting the char position to mid of screen, initially
changeCharPos(charPosition);
// Game Loop
setInterval(() => {
    charPosition += 20;
    changeCharPos(charPosition);
    pipePosition -= 15;
    changePipePos(pipePosition);
}, 60);

document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        charPosition -= 250;
        changeCharPos(position);
    }
});

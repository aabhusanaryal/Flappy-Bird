// Selectors
const char = document.querySelector("#char");

// Functions
function changeCharPos(newPos) {
    char.style.top = `${newPos}px`;
    char.style.backgroundColor = "pink";
}
let position = 0;
// Game Loop
setInterval(() => {
    changeCharPos(position);
    position += 5;
}, 15); //66fps

changeCharPos(500);
// char.style.top = "100px";

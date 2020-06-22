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
    position += 30;
}, 60);

changeCharPos(500);
// char.style.top = "100px";

document.addEventListener("keydown", (event) => {
    if ((event.key = " ")) {
        position -= 250;
        changeCharPos(position);
    }
});

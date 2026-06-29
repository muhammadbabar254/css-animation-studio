const box = document.getElementById("box");
const runBtn = document.getElementById("runBtn");

const animation = document.getElementById("animation");
const speed = document.getElementById("speed");

runBtn.addEventListener("click", () => {

    box.className = "box";

    box.style.setProperty("--speed", speed.value);

    box.classList.add(animation.value);

});
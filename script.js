let clockmode = "timer";

const modeButtons = document.querySelectorAll(".timer__button");
modeButtons.forEach(button => button.addEventListener('click', () => {
    clockmode = button.value;
    modeButtons.forEach(btn => btn.style.background = "");
    button.style.background = "rgba(0, 0, 0, .2)";
}));

window.addEventListener("load", () => {
    document.getElementById("modeTimer").style.background = "rgba(0, 0, 0, .2)";
})
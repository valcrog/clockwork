let clockmode = "timer";
let time_type = "work";
let countdown_work;
let countdown_pause;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timeType = document.querySelector('.display__time-type');
const modeButtons = document.querySelectorAll(".timer__button");

modeButtons.forEach(button => button.addEventListener('click', () => {
    clockmode = button.value;
    modeButtons.forEach(btn => btn.style.background = "");
    button.style.background = "rgba(0, 0, 0, .2)";
}));

function typeToStr(time_type) {
    if (time_type == "work") {
        return "📖 Travail 📖";
    } else if (time_type == "pause") {
        return "☕ Pause ☕";
    } else {
        return "💀 c cassé 💀"
    }
}

window.addEventListener("load", () => {
    document.getElementById("modeTimer").style.background = "rgba(0, 0, 0, .2)";
    timeType.textContent = typeToStr(time_type);
})


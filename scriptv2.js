const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timeType = document.querySelector('.display__time-type');

class Timer {
    constructor(type, seconds) {
        this.type = type;
        this.seconds = seconds;
    }
}

let wtime = new Timer('work', 7200);
let ptime = new Timer('pause', 1200);
let timerId;

let time_type = "work";

const startTimer = () => {
    running = true;

    timerId = setInterval(function() {
        // WORKING.
        if (time_type === "work") {
            if (running) {
                wtime.seconds--;
                updateDisplays(wtime.seconds);
                if (wtime.seconds === 0) {
                    clearInterval(timerId);
                    running = false;
                    timeOut();
                }
            }
        } else {
        // PAUSE
            if (running) {
                ptime.seconds--;
                updateDisplays(ptime.seconds);
                if (ptime.seconds === 0) {
                    clearInterval(timerId);
                    running = false;
                    timeOut();
                }
            }
        }
    }, 1000);
}

function timeOut() {
    if (time_type == "pause") {
        document.querySelector("html").style.background = "linear-gradient(45deg,  #f54242 0%,#d14747 50%,#a10d0d 100%);";
        timerDisplay.textContent = "Perdu grosse merde";
    } else {
        document.querySelector("html").style.background = "linear-gradient(45deg,  #42f57b 0%,#47d157 50%,#0da119 100%);";
        timerDisplay.textContent = "Bravo champion";
    }
}

function secondsToStr(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
}

function typeToStr(time_type) {
    if (time_type == "work") {
        return "📖 Travail 📖";
    } else if (time_type == "pause") {
        return "☕ Pause ☕";
    } else {
        return "💀 c cassé 💀"
    }
}

function displayTimeType() {
    timeType.textContent = typeToStr(time_type);
}

function displayTimeLeft(seconds) {
    display = secondsToStr(seconds);
    document.title = display;
    timerDisplay.textContent = display;
}

function displayOtherTimeLeft() {
    endTime.textContent = `Il te reste ${secondsToStr(time_type=="work" ? ptime.seconds : wtime.seconds)} de ${time_type=="work" ? "pause" : "travail"}.`;
}

function updateDisplays(seconds) {
    displayTimeType();
    displayTimeLeft(seconds);
    displayOtherTimeLeft();
}

document.addEventListener("keydown", (e) => {
    if (e.key == " ") {
        time_type = time_type == "work" ? "pause" : "work";
        clearInterval(timerId);
        startTimer();
    };
});

document.getElementById("start").addEventListener("click", () => startTimer());
document.getElementById("reset").addEventListener("click", () => location.reload(true));

function resetTimers() {
    clearInterval(timerId);
    updateDisplays(wtime.seconds);
}

function typeToSeconds(type) {
    if (type == "work") {
        return wtime.seconds;
    } else {
        return ptime.seconds;
    }
}

const setWorkButton = document.querySelector("#customWork button");
const setWorkInput = document.querySelector("#customWork input");
const setPauseButton = document.querySelector("#customPause button");
const setPauseInput = document.querySelector("#customPause input");

setWorkButton.addEventListener("click", () => {
    const field = setWorkInput.value;
    // check if valid time
    if (/^\d+$/.test(field)) {
        wtime.seconds = parseInt(field) * 60;
        updateDisplays(typeToSeconds(time_type));
    } else {
        alert("Please enter a valid time !")
    }
});
setPauseButton.addEventListener("click", () => {
    const field = setPauseInput.value;
    // check if valid time
    if (/^\d+$/.test(field)) {
        ptime.seconds = parseInt(field) * 60;
        updateDisplays(typeToSeconds(time_type));
    } else {
        alert("Please enter a valid time !")
    }
});

window.addEventListener("load", () => {
    document.getElementById("modeTimer").style.background = "rgba(0, 0, 0, .2)";
    updateDisplays(wtime.seconds);
})


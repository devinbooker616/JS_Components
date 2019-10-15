//Button that counts up every time the use clicks it
function counter() {
    var button = document.getElementById("counter")
    var count = 0;
    button.onclick = function () {
        count += 1
        button.textContent = "click to count: " + count;
    };
}

// Component that shows the current date
function calander() {
    const year = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const week = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"]
    const calander = document.getElementById("calander");
    const today = new Date();
    const date = week[today.getDay()] + "-" + year[today.getMonth()] + "-" + today.getFullYear();
    calander.textContent = date;
};

// Component that displays time in real time
const clock = function clock() {
    const timeTeller = document.getElementById("clock");
    const time = new Date();
    const h = time.getHours().toString().padStart(2, '0');
    const m = time.getMinutes().toString().padStart(2, '0');
    const s = time.getSeconds().toString().padStart(2, '0');
    const clockString = `${h}:${m}:${s}`;

    timeTeller.textContent = clockString;

    change = setTimeout(clock, 1000)
}

function analogClockSeconds() {

    const anClock = document.querySelector(".second-hand")
    const now = new Date();
    const seconds = now.getSeconds();
    let secondDegrees = ((seconds / 60) * 360) + 90;
    if (seconds === 60) {
        anClock.style.transition = 'none'
        anClock.style.transform = `rotate(${1}deg)`;
        anClock.style
    }
    else {
        anClock.style.transform = `rotate(${secondDegrees}deg)`;
    }
    setTimeout(analogClockSeconds, 1000);
}

function analogClockMinutes() {

    const anClock = document.querySelector(".minute-hand")
    const now = new Date();
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    anClock.style.transform = `rotate(${minuteDegrees}deg)`;
    setTimeout(analogClockMinutes, 1000);

}

function analogClockHours() {

    const anClock = document.querySelector(".hour-hand")
    const now = new Date();
    const hours = now.getHours();
    const hourDegrees = ((hours / 60) * 360) + 90;
    anClock.style.transform = `rotate(${hourDegrees}deg)`;
    setTimeout(analogClockHours, 1000);

}
function newButton() {
    const counters = document.querySelectorAll(".counting");
    for (const counter of counters) {
        counter.addEventListener("click", function () {
            const currentNumber = Number(counter.textContent);
            counter.textContent = currentNumber + 1;
            counter.textContent = "click to count: " + counter.textContent
        })

    }
}

function newCounters() {
    const countButtons = document.querySelectorAll(".counter");
    for (const countButton of countButtons) {
        const plusButton = countButton.querySelector(".counter__button");
        const numCount = countButton.querySelector(".counter__count");
        const minusButton = countButton.querySelector(".counter__down");
        const resetButton = countButton.querySelector(".reset");
        plusButton.addEventListener("click", function () {
            const span = Number(numCount.textContent)
            numCount.textContent = span + 1;
        });
        minusButton.addEventListener("click", function () {
            const span = Number(numCount.textContent)
            numCount.textContent = span - 1;
        });
        resetButton.addEventListener("click", function () {
            const span = Number(numCount.textContent)
            numCount.textContent = span - span;
        });
    }
}

counter();
calander();
clock();
analogClockSeconds();
analogClockMinutes();
analogClockHours();
newButton();
newCounters();
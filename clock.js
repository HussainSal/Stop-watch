const startBtn = document.querySelector(".btn__1");
const stopBtn = document.querySelector(".btn__2");
const resetBtn = document.querySelector(".btn__3");
const time = document.querySelector(".timer");

let timer = 0;
let timerInterval = null;
let finalTime = "";

// Start timer fn
const startTimer = () => {
  if (timerInterval) {
    return;
  }

  timerInterval = setInterval(() => {
    // Converting in  sec & mlSec
    const sec = String(Math.trunc(timer / 100)).padStart(2, 0);
    const mlsec = String(Math.trunc(timer % 100)).padStart(2, 0);

    finalTime = `${sec}:${mlsec}`;
    // Updating timer after every 1 sec
    timer++;
    time.textContent = finalTime;
  }, 10);
};

// Stoping timer fn
const stopwatchStop = function () {
  clearInterval(timerInterval);
  timerInterval = false;
};

// Restarting timer fn
const restart = () => {
  timer = 0;
  finalTime = `00:00`;
  time.textContent = finalTime;
  stopwatchStop();
};

// Setting up event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopwatchStop);
resetBtn.addEventListener("click", restart);


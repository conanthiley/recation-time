const redLight = document.querySelector(".red-light");
const gas = document.querySelector(".gas");
const scoreElements = document.querySelectorAll(".score");
const start = document.querySelectorAll(".start");
const yourScore = document.querySelector(".your-score");
const red1 = document.querySelector(".rl1");
const red2 = document.querySelector(".rl2");
const red3 = document.querySelector(".rl3");
const red4 = document.querySelector(".rl4");
const bestS = document.querySelector(".best-score");

const scoreHistory = [];

let msSinceTimeOut = 0;
let waitingForClick = false;

const min_light_time = 500;
const max_light_time = 3000;

function play() {
  const msTillChange =
    Math.floor(Math.random() * (max_light_time - min_light_time)) +
    min_light_time;

  setTimeout(() => {
    red1.style.backgroundColor = "#FF0000";
    setTimeout(() => {
      red2.style.backgroundColor = "#FF0000";
      setTimeout(() => {
        red3.style.backgroundColor = "#FF0000";
        setTimeout(() => {
          red4.style.backgroundColor = "#FF0000";
          setTimeout(() => {
            msSinceTimeOut = Date.now();
            redLight.style.backgroundColor = "#FF0000";
            waitingForClick = true;
          }, msTillChange);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
  gas.textContent = "";
  redLight.style.backgroundColor = null;
  red1.style.backgroundColor = null;
  red2.style.backgroundColor = null;
  red3.style.backgroundColor = null;
  red4.style.backgroundColor = null;
}

function addScore(score) {
  scoreHistory.unshift(score);
  yourScore.textContent = `${score} Seconds`;
}

gas.addEventListener("click", () => {
  if (waitingForClick) {
    const score = (Date.now() - msSinceTimeOut) / 1000;
    waitingForClick = false;
    gas.textContent = "Go Baby Go!";

    addScore(score);
    let bestScore = scoreHistory.sort(function (a, b) {
      return a - b;
    });
    bestS.textContent = `${bestScore[0]} Seconds`;
  } else {
    play();
  }
});

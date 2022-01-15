"use strict";

const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score = document.getElementById("score");
const input = document.getElementById("input");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const reset = document.getElementById("reset");

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let maxScore = 0;

score.textContent = maxScore;
score1.textContent = scorePlayer1;
score2.textContent = scorePlayer2;

input.addEventListener("change", function (event) {
  maxScore = event.target.value;
  score.textContent = maxScore;
  console.log(maxScore);
});

input.addEventListener("blur", function (event) {
  if (event.target.value < 0) {
    input.value = 0;
  }
});

reset.addEventListener("click", function () {
  input.value = null;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  score1.textContent = scorePlayer1;
  score1.style = "color: white";
  score2.textContent = scorePlayer2;
  score2.style = "color: white";
});

player1.addEventListener("click", function () {
  if (scorePlayer2 == maxScore) {
    return;
  }
  if (scorePlayer1 <= maxScore - 1) {
    scorePlayer1++;
    score1.textContent = scorePlayer1;
  }
  if (scorePlayer1 == maxScore) {
    score1.style = "color: crimson";
  }
});

player2.addEventListener("click", function () {
  if (scorePlayer1 == maxScore) {
    return;
  }
  if (scorePlayer2 <= maxScore - 1) {
    scorePlayer2++;
    score2.textContent = scorePlayer2;
  }
  if (scorePlayer2 == maxScore) {
    score2.style = "color: crimson";
  }
});

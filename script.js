"use strict";

const score0El = document.querySelector(".player-num0");
const score1El = document.querySelector(".player-num1");
const current0 = document.querySelector(".current-num0");
const current1 = document.querySelector(".current-num1");
const diceImg = document.querySelector(".img");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold ");
const btnNew = document.querySelector(".btn-again   ");

score0El.textContent = 0;
score1El.textContent = 0;
let activeplayer = 0;
let score = 0;
let play = true;
const bigscore = [0, 0];

function swichplayer() {
  score = 0;
  document.querySelector(`.current-num${activeplayer}`).textContent = score;
  activeplayer = activeplayer === 0 ? 1 : 0;

  document.querySelector(".player0").classList.toggle("player-bk");
  document.querySelector(".player1").classList.toggle("player-bk");
}

btnRoll.addEventListener("click", function () {
  if (play) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `./dice image/dice-${dice}.png`;
    if (dice != 1) {
      score += dice;
      document.querySelector(`.current-num${activeplayer}`).textContent = score;
    } else {
      swichplayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (play) {
    bigscore[activeplayer] += score;
    document.querySelector(`.player-num${activeplayer}`).textContent =
      bigscore[activeplayer];
    if (bigscore[activeplayer] >= 100) {
      play = false;
      document
        .querySelector(`.player${activeplayer}`)
        .classList.add("player-win");
      if (activeplayer)
        document.querySelector(
          ".tt2"
        ).textContent = `بردی بازیکن دوم مشتی هستی  `;
      else {
        document.querySelector(
          ".tt1"
        ).textContent = `بردی بازیکن اول مشتی هستی  `;
      }
    } else {
      swichplayer();
    }
  }
});

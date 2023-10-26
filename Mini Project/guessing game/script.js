//initializing some value
let totalAttempts = 5;
let attempts = 0;
let totalWon = 0;
let totalLost = 0;

//finding element
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#Gussing-number");
const checkButton = form.querySelector(".btn");
const resultText = cardBody.querySelector(".result-text");
const lostWin = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remaining-attempts");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  attempts++;
  if (attempts == 6) {
    guessingNumber.disabled = ture;
    checkButton.disabled = true;
  }
  if (attempts < 6) {
    let guessNumber = Number(guessingNumber.value);
    checkResult(guessNumber);
    remainingAttempts.innerHTML = `Remaining attempts: ${
      totalAttempts - attempts
    }`;
  }
  guessingNumber.value = "";
});
function checkResult(guessingNumber) {
  const randomNumber = getRandomNumber(5);
  if (guessingNumber == randomNumber) {
    resultText.innerHTML = `you have won `;
    totalWon++;
  } else {
    resultText.innerHTML = `you have lost , random number was ${randomNumber}`;
    totalLost++;
  }
  lostWin.innerHTML = `Won: ${totalWon} , lost: ${totalLost}`;
  lostWin.classList.add("large-text");
  cardBody.appendChild(lostWin);
}
function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

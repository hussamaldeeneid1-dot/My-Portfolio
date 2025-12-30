let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

checkBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);

function checkGuess() {
  const userGuess = Number(guessInput.value);

  if (!userGuess) return;

  if (userGuess === randomNumber) {
    message.textContent = "Correct!";
  } else if (userGuess > randomNumber) {
    message.textContent = "Too high!";
  } else {
    message.textContent = "Too low!";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.value = "";
  message.textContent = "";
}

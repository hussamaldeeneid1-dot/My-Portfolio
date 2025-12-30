const gameBoard = document.getElementById("gameBoard");
const movesCounter = document.getElementById("moves");
const matchesCounter = document.getElementById("matches");
const restartBtn = document.getElementById("restartBtn");

const symbols = ["🍎","🍌","🍇","🍉","🍒","🥝","🍍","🍑"];
let cardsArray = [...symbols, ...symbols]; // duplicate symbols
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matches = 0;

// Shuffle function
function shuffle(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Create board
function createBoard() {
  gameBoard.innerHTML = "";
  shuffle(cardsArray);
  cardsArray.forEach(symbol => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.textContent = symbol;

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.textContent = ""; // optional: symbol or design for back

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
  moves = 0;
  matches = 0;
  movesCounter.textContent = moves;
  matchesCounter.textContent = matches;
}

// Flip card
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;
  moves++;
  movesCounter.textContent = moves;

  checkMatch();
}

function checkMatch() {
  const firstSymbol = firstCard.querySelector(".card-front").textContent;
  const secondSymbol = secondCard.querySelector(".card-front").textContent;

  if (firstSymbol === secondSymbol) {
    matches++;
    matchesCounter.textContent = matches;
    resetFlip();
    if (matches === symbols.length) {
      setTimeout(() => alert(`Congratulations! You won in ${moves} moves.`), 300);
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetFlip();
    }, 800);
  }
}

function resetFlip() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

restartBtn.addEventListener("click", createBoard);

createBoard();

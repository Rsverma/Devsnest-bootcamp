const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let areCardsLocked = false;
let fisrtCard, secCard;

function flipCard() {
  if (areCardsLocked || this === fisrtCard) return;

  this.classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    fisrtCard = this;
  } else {
    hasFlippedCard = false;
    secCard = this;
    checkIfCardsMatch();
  }
}

function checkIfCardsMatch() {
  let isSame = fisrtCard.dataset.framework == secCard.dataset.framework;
  isSame ? removeCards() : unflipCards();
}

function removeCards() {
  fisrtCard.removeEventListener("click", flipCard);
  secCard.removeEventListener("click", flipCard);
  resetCards();
}
function unflipCards() {
  areCardsLocked = true;
  setTimeout(() => {
    fisrtCard.classList.remove("flip");
    secCard.classList.remove("flip");
    resetCards();
  }, 1250);
}

function resetCards() {
  hasFlippedCard = false;
  areCardsLocked = false;
  fisrtCard = null;
  secCard = null;
}

function shuffle() {
  cards.forEach((card) => {
    card.style.order = Math.floor(Math.random() * 12);
  });
}
shuffle();
cards.forEach((card) => card.addEventListener("click", flipCard));

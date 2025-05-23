import "bootstrap";
import "./style.css";

const suits = ['♥', '♦', '♠', '♣'];
  const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const card = document.getElementById('card');
  const topSuit = document.getElementById('top-suit');
  const bottomSuit = document.getElementById('bottom-suit');
  const cardNumber = document.getElementById('card-number');

  card.addEventListener('click', () => {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    const isRed = randomSuit === '♥' || randomSuit === '♦';
    const color = isRed ? 'red' : 'black';

    topSuit.textContent = randomSuit;
    bottomSuit.textContent = randomSuit;
    topSuit.style.color = color;
    bottomSuit.style.color = color;
    cardNumber.textContent = randomNumber;
    cardNumber.style.color = color;
  });
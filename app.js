let playground = document.getElementById("playground");

const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
const values = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

let houseOfCards = [];
let card = [];

for (let x = 0; x < suits.length; x++) {
  for (let y = 0; y < values.length; y++) {
    card = { suit: suits[x], value: values[y] };
    houseOfCards.push(card);
  }
}

const shuffleCards = () => {
  let countOfCards = houseOfCards.length;

  while (countOfCards) {
    let randomIndex = Math.floor(Math.random() * countOfCards);
    let cardToShuffle = houseOfCards[countOfCards];

    houseOfCards[countOfCards] = houseOfCards[randomIndex];
    houseOfCards[randomIndex] = cardToShuffle;

    --countOfCards;
  }

  return houseOfCards;
};

const dealCards = () => {
  shuffleCards();
  houseOfCards.forEach((card) => {
    if (card) {
      const cardValue = `${card.value} ${card.suit}`;
      playground.innerHTML += `<span style="margin: 5px; border: 1px solid #333; border-radius: 5px; width: 50px; height: 75px; display: flex; justify-content: center; align-items: center">${cardValue}</span>`;
    }
  });
};

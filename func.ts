// interface Card {
//   suit: string;
//   card: number;
// }

// interface Deck {
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card;
// }

// let deck: Deck = {
//   suits: ['a','b','c', 'd'],
//   cards: Array(52),
//   createCardPicker: function(this: Deck) {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard/ 13);
//       return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);

// interface Event {
//   message: string;
// }

// interface UIElement {
//   addClickListener(onclick: (this: void, e: Event) => void): void;
// }

// class Handler {
//   info: string;
//   onClickBad(this: Handler, e: Event) {
//     this.info = e.message;
//   }
// }

// let h = new Handler();

// class uiElement implements UIElement{
//   addClickListener(onclick: (this: void, e: Event) => void) {
//     onclick(e);
//   }
// }

// uiElement.addClickListener(h.onClickBad);
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickedCard(x): any {
  if (typeof x == 'object') {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13);
    return {
      suit: suits[pickedSuit],
      card: x % 13
    };
  }
}

let myDeck = [{suit: 'diamonds', card: 2}, {suit: 'spades', card: 10}, {suit: 'hearts', card: 4}];
let pickedCard1 = myDeck[pickedCard(myDeck)];

let pickedCard2 = pickedCard(15);
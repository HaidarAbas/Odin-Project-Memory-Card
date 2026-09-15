export default class GameController {

  #serializedClone;

  shuffle(deck) {
    const copy = JSON.parse(JSON.stringify(deck));

    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]]
    }

    return copy;
  }

  pick(deck, cardId) {
    this.#verifyDeckState(deck);
    const myCard = deck.find(card => card.name === cardId);

    if (!myCard.selected) {
      myCard.selected = true;
      return true;  //return true to indicate a valid pick that continues the game
    }

    return false;   //return false to indicate an invalid pick that halts the game
  }

  #verifyDeckState(deck) {
    if (!deck.some(card => card.selected === false)) {    //check if all cards have been selected
      deck.forEach(card => { card.selected = false });    //if true, then reset the selected state to false for each
    }
  }

  createClone(deck) {
    this.#serializedClone = JSON.stringify(deck);
  }

  get clone() {
    return this.#serializedClone ? JSON.parse(this.#serializedClone) : null;
  }
}
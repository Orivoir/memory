import {Container as StaticContentsManager} from './../exports-static/index';

const CARDS_LENGTH = 50;

function generateRangeCards({cardsNumber}) {

  const fromIndex = Math.floor(Math.random() * (CARDS_LENGTH-cardsNumber));

  return {
    from: fromIndex,
    to: (fromIndex + cardsNumber)
  };

}

export default function getCards({cardsNumber, cardsTheme}) {

  let cardsManagerName = null;

  switch(cardsTheme.name) {
    case "cats":
      cardsManagerName = "cardsCats";
      break;
    case "fruits":
      cardsManagerName = "cardsFruits";
      break;
    default:
      cardsManagerName = "cardsFruits"
  }

  const allCards = StaticContentsManager.get(cardsManagerName);
  const range = generateRangeCards({cardsNumber});

  const cardCore = allCards.slice(range.from, range.to).map((svg, index) => ({
    uri: svg.uri,
    key: svg.hash,
    id: index
  }));

  return Array.from(Array(cardCore.length * 2).keys())
  .map(index => ({
    ...cardCore[index % (cardCore.length)],
    id: index
  }));

}

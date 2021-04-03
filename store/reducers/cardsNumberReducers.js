const INITIAL_STATE = 10;

const MIN_VALUE = 2;
const MAX_VALUE = 50;

export default function cardsNumberReducer(state=INITIAL_STATE, action) {

  switch (action.type) {
    case "RESET_CARDS_NUMBER":
      if(state !== INITIAL_STATE) {
        return INITIAL_STATE;
      }
      return state;

    case "SET_CARDS_NUMBER":
      if(
        typeof action.value === "number" &&
        !isNaN(action.value) &&
        action.value >= MIN_VALUE &&
        action.value <= MAX_VALUE
      ) {
        return Math.round(action.value);
      }
      return state;

    default:
      return state;
  }
}

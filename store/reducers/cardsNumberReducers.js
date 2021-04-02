const INITIAL_STATE = 10;

const MIN_VALUE = 4;
const MAX_VALUE = 100;

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
        return action.value;
      }
      return state;

    default:
      return state;
  }
}

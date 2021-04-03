import {
  INITIAL_STATE_CARDS_NUMBER,
  MIN_VALUE_CARDS_NUMBER,
  MAX_VALUE_CARDS_NUMBER
} from './../../constant';

export default function cardsNumberReducer(state=INITIAL_STATE_CARDS_NUMBER, action) {

  switch (action.type) {
    case "RESET_CARDS_NUMBER":
      if(state !== INITIAL_STATE_CARDS_NUMBER) {
        return INITIAL_STATE_CARDS_NUMBER;
      }
      return state;

    case "SET_CARDS_NUMBER":
      if(
        typeof action.value === "number" &&
        !isNaN(action.value) &&
        action.value >= MIN_VALUE_CARDS_NUMBER &&
        action.value <= MAX_VALUE_CARDS_NUMBER
      ) {
        return Math.round(action.value);
      }
      return state;

    default:
      return state;
  }
}

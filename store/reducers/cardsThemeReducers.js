import {
  ALLOWS_CARDS_THEME_VALUES,
  INITIAL_STATE_CARDS_THEME
} from './../../constant';

export default function cardsThemeReducers(state=INITIAL_STATE_CARDS_THEME, action) {
  switch (action.type) {
    case 'SET_CARDS_THEME':
      if (typeof action.name !== 'string') {
        return state;
      }

      const name = action.name.trim().toUpperCase();

      if (ALLOWS_CARDS_THEME_VALUES[name] && state.name !== name) {
        return ALLOWS_CARDS_THEME_VALUES[name];
      }

      return state;
    default:
      return state;
  }
}

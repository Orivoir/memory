const ALLOWS_CARDS_THEME_VALUES = {
  CATS: {
    path: '/cats/svg/',
    name: 'cats',
  },
  FRUITS: {
    path: '/fruits/svg',
    name: 'fruits',
  },
};

const INITIAL_STATE = ALLOWS_CARDS_THEME_VALUES.FRUITS;

export default function cardsThemeReducers(state = INITIAL_STATE, action) {
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

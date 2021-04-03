export const PATH_ASSETS = './assets';
export const PATH_IMAGES = PATH_ASSETS + '/images';
export const PATH_SOUNDS = PATH_ASSETS + '/sounds';
export const PATH_LOGO = PATH_IMAGES + '/logo.svg';

export const PATH_CARDS_THEME = PATH_IMAGES + '/cards_themes';
export const PATH_BADGES = PATH_IMAGES + '/badges';

export const INITIAL_STATE_UI_THEME = {
  type: 'light',
  theme: ThemeLight,
};

export const ALLOWS_CARDS_THEME_VALUES = {
  CATS: {
    path: '/cats/svg/',
    name: 'cats',
  },
  FRUITS: {
    path: '/fruits/svg',
    name: 'fruits',
  },
};

export const INITIAL_STATE_CARDS_THEME = ALLOWS_CARDS_THEME_VALUES.FRUITS;

export const INITIAL_STATE_CARDS_NUMBER = 10;

export const MIN_VALUE_CARDS_NUMBER = 2;
export const MAX_VALUE_CARDS_NUMBER = 50;

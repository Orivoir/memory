export const PATH_ASSETS = './assets';
export const PATH_IMAGES = PATH_ASSETS + '/images';
export const PATH_SOUNDS = PATH_ASSETS + '/sounds';
export const PATH_LOGO = PATH_IMAGES + '/logo.svg';

export const PATH_CARDS_THEME = PATH_IMAGES + '/cards_themes';
export const PATH_BADGES = PATH_IMAGES + '/badges';

// reducers init state and boundaries
import ThemeLight from './themes/light';
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

// components helpers values
export const SLIDERS_TYPE = {
  get TUTORIALS () {
    return "tutorials";
  },
  get CARDS_THEME() {
    return "cards theme";
  }
};

export const TIME_SHOW_CARD_MISTAKE = 750; // ms

export const CLOCK_ICON_TARGET_NAME = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
];


export const GAME_INITIAL_COUNT_SCORE = {mistakes: 0, success: 0};

import ThemeLight from './../../themes/light';
import ThemeDark from './../../themes/dark';

import {
  INITIAL_STATE_UI_THEME
} from './../../constant';

export default function UIthemeReducers(state=INITIAL_STATE_UI_THEME, action) {
  switch (action.type) {
    case 'THEME_TOGGLE':
      return state.type === 'light'
        ? {type: 'dark', theme: ThemeDark}
        : {type: 'light', theme: ThemeLight};

    case 'THEME_LIGHT':
      if (state.type !== 'light') {
        return {type: 'light', theme: ThemeLight};
      }
      return state;

    case 'THEME_DARK':
      if (state.type !== 'dark') {
        return {type: 'dark', theme: ThemeDark};
      }
      return state;

    default:
      return state;
  }
}

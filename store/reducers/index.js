import {combineReducers} from 'redux';

import cardsThemeReducers from './cardsThemeReducers';
import UIthemeReducers from './UIthemeReducers';
import badgesReducers from './badgesReducers';
import cardsNumberReducers from './cardsNumberReducers';

const rootReducers = combineReducers({
  cardsTheme: cardsThemeReducers,
  UItheme: UIthemeReducers,
  badges: badgesReducers,
  cardsNumber: cardsNumberReducers
});

export default rootReducers;

import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import store from './store/index';
import {Provider as ReduxProvider} from 'react-redux';

const Main = () => (
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

export default Main;

AppRegistry.registerComponent(appName, () => Main);

// <https://github.com/callstack/react-native-paper/blob/main/src/styles/DarkTheme.tsx>

import {DarkTheme} from 'react-native-paper';

const overrideProperties = {

  colors: {
    ...DarkTheme,
    background: "#2c3e50",
    text: "#fff",
    accent: "#1abc9c",
    primary: "#81C784"
  }
};

export default {
  ...DarkTheme,
  ...overrideProperties,
};

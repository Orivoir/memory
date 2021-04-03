// <https://github.com/callstack/react-native-paper/blob/main/src/styles/DarkTheme.tsx>

import {DarkTheme} from 'react-native-paper';

const overrideProperties = {

  colors: {
    ...DarkTheme.colors,
    background: "#2c3e50",
    text: "#fff",
    accent: "#9b59b6",
    primary: "#81C784",


    secondary: "#1abc9c",
  }
};

export default {
  ...DarkTheme,
  ...overrideProperties,
};

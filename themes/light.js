// <https://github.com/callstack/react-native-paper/blob/main/src/styles/DefaultTheme.tsx>

import {DefaultTheme} from 'react-native-paper';

const overrideProperties = {
  colors: {
    ...DefaultTheme.colors,
    onSurface: "#fff",
    primary: "#81C784",
    secondary: "#795548",
  }
};

export default {
  ...DefaultTheme,
  ...overrideProperties,
};

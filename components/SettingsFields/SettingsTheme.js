import React from 'react';

import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {Switch} from 'react-native-paper';

import {connect, useDispatch} from 'react-redux';
import useIsLand from '../../hooks/useIsLand';

const SettingsTheme = ({theme}) => {

	const [isLightTheme, setIsLightTheme] = React.useState(true);

  const dispatch = useDispatch();

  const isLand = useIsLand();

  const onToggleTheme = () => {
		setIsLightTheme(currentIsLightTheme => !currentIsLightTheme);
		dispatch({
			type: "THEME_TOGGLE"
    });
	};

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        flex: .5
      }}
    >
      <Text
        style={{
          fontSize: 18
        }}
      >
        Theme {theme.type}
      </Text>
      <Switch
        onValueChange={onToggleTheme}
        value={isLightTheme}
      />
	  </View>
  );
}

export default connect(state => ({
  theme: state.UItheme
}))(SettingsTheme);

import React from 'react';

import {View,Text} from 'react-native';
import {Switch} from 'react-native-paper';

import {connect, useDispatch} from 'react-redux';

const SettingsTheme = ({theme}) => {

	const [isLightTheme, setIsLightTheme] = React.useState(true);

  const dispatch = useDispatch();

  const onToggleTheme = () => {
		setIsLightTheme(currentIsLightTheme => !currentIsLightTheme);
		dispatch({
			type: "THEME_TOGGLE"
    });
	};

  return (
    <View>
      <Text>Theme {theme.type}</Text>
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

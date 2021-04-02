import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import Wrapper from '../Wrapper';
import SettingsNumberCards from '../SettingsFields/SettingsNumberCards';
import SettingsTheme from '../SettingsFields/SettingsTheme';

const Settings = ({navigation}) => {

	return (
		<Wrapper>

			<View>
				<SettingsTheme />
				<SettingsNumberCards />
			</View>

			<View>
				<View
					style={{
						borderWidth: 2,
						borderColor: "red"
					}}
				>
					<Text>await later slide show here...</Text>
				</View>
			</View>

		</Wrapper>
	);
};

export default Settings;

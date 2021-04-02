import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import useIsLand from './../../hooks/useIsLand';
import Wrapper from '../Wrapper';
import SettingsNumberCards from '../SettingsFields/SettingsNumberCards';
import SettingsTheme from '../SettingsFields/SettingsTheme';

const Settings = ({navigation}) => {

	const isLand = useIsLand();

	return (
		<Wrapper
			style={{
				padding: 8
			}}
		>

			<View
				style={{
					flex: !isLand ? .25: .18,
					justifyContent: "space-around",
					flexDirection: isLand ? "row": "column",
					marginBottom: !isLand ? 0: 4
				}}
			>
				<SettingsTheme />
				<SettingsNumberCards />
			</View>

			<View
				style={{
					flex: !isLand ? .75: .82
				}}
			>
				<View
					style={{
						borderWidth: 2,
						borderColor: "red",
						flex: 1
					}}
				>
					<Text>await later slide show here...</Text>
				</View>
			</View>

		</Wrapper>
	);
};

export default Settings;

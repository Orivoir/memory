import React from 'react';
import {Button, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import PlayButton from './../PlayButton';
import {connect} from 'react-redux';

import useIsLand from '../../hooks/useIsLand';
import Wrapper from '../Wrapper';

const Home = ({
	navigation,
	theme
}) => {

	const isLand = useIsLand();

	const onPlay = () => {
		navigation.navigate("Game");
	};

	return (
		<Wrapper style={{
			padding: 8,
			flexDirection: isLand ? "row": "column"
		}}>

			<View
				style={{
					flex: !isLand ? .75: .6,
					borderWidth: 2,
					borderColor: "red"
				}}
			>
				<Text>await later slide show here...</Text>
			</View>

			<View
				style={{
					flex: !isLand ? .25: .4,
					justifyContent: "space-around",
					alignItems: "center"
				}}
			>
				<PlayButton onPress={onPlay} theme={theme} />

				<Button
					mode="contained"
					style={styles.buttonCustom}
					icon="tune"
				>
					custom
				</Button>
			</View>
		</Wrapper>
	);
};

export default connect(state => ({
	theme: state.UItheme.theme
}))(Home);

const styles = StyleSheet.create({
	buttonCustom: {
		paddingHorizontal: 15,
    paddingVertical: 7
	}
});

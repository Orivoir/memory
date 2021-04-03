import React from 'react';
import Wrapper from './../Wrapper';
import {View} from 'react-native';

import GameAth from './../GameCore/Ath';
import GameBoard from './../GameCore/Board';
import useIsLand from '../../hooks/useIsLand';

const Game = ({navigation}) => {

	const [count, setCount] = React.useState({mistakes: 0, success: 0});
	const [isPauseTime, setIsPauseTime] = React.useState(false);

	const createOnSetCount = type => () => (
		setCount(currentCount => ({
			...currentCount,
			[type]: currentCount[type] + 1
		}))
	);

	const onFinish = () => {
		console.log("has find all cards ^.^");
		setIsPauseTime(true);
	};

	const isLand = useIsLand();

	return (
		<Wrapper
			style={{padding: 8}}
		>
			<View style={{
				flex: !isLand ? .2: .12,
				justifyContent: "center"
			}}>
				<GameAth count={count} isPauseTime={isPauseTime} />
			</View>

			<View
				style={{
					flex: !isLand ? .8: .88,
					justifyContent: "center"
				}}
			>
				<GameBoard
					onMistake={createOnSetCount("mistakes")}
					onSuccess={createOnSetCount("success")}
					onFinish={onFinish}
				/>
			</View>
		</Wrapper>
	);
};

export default Game;

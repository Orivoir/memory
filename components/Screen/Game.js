import React from 'react';
import Wrapper from './../Wrapper';
import {View} from 'react-native';

import GameAth from './../GameCore/Ath';
import GameBoard from './../GameCore/Board';

const Game = ({navigation}) => {

	const [count, setCount] = React.useState({mistakes: 0, success: 0});

	const createOnSetCount = type => () => (
		setCount(currentCount => ({
			...currentCount,
			[type]: currentCount[type] + 1
		}))
	);

	const onFinish = () => {};

	return (
		<Wrapper
			style={{padding: 8}}
		>
			<View>
				<GameAth count={count} />
			</View>

			<View>
				{/*
					<GameBoard
						onMistake={createOnSetCount("mistakes")}
						onSuccess={createOnSetCount("success")}
						onFinish={onFinish}
					/>
				*/}
			</View>
		</Wrapper>
	);
};

export default Game;

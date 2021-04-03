import React from 'react';
import Wrapper from './../Wrapper';
import {View} from 'react-native';

import GameAth from './../GameCore/Ath';
import GameBoard from './../GameCore/Board';
import useIsLand from '../../hooks/useIsLand';
import ModalFinishGame from './../ModalFinishGame';

export {
	GAME_GAME_INITIAL_COUNT_SCORE_SCORE
} from './../../constant';

const Game = ({navigation}) => {

	const [count, setCount] = React.useState(GAME_INITIAL_COUNT_SCORE);
	const [isPauseTime, setIsPauseTime] = React.useState(false);
	const [isVisibleModal, setIsVisibleModal] = React.useState(false);

	const createOnSetCount = type => () => (
		setCount(currentCount => ({
			...currentCount,
			[type]: currentCount[type] + 1
		}))
	);

	const onFinish = () => {
		console.log("has find all cards ^.^");
		setCount(GAME_INITIAL_COUNT_SCORE);
		setIsPauseTime(true);
		setIsVisibleModal(true);
	};

	const isLand = useIsLand();

	return (
		<>
		<ModalFinishGame
			isVisible={isVisibleModal}
			onClose={() => {
				setIsVisibleModal(false);
				navigation.navigate("Home");
			}}
			onPlay={() => {
				setIsVisibleModal(false);
			}}
			onGoHome={() => {
				setIsVisibleModal(false);
				navigation.navigate("Home");
			}}
		/>

		{!isVisibleModal && (
			<Wrapper
				style={{padding: 8}}
			>
				<View style={{
					flex: !isLand ? .2: .12,
					justifyContent: "center"
				}}>
					<GameAth
						count={count}
						isPauseTime={isPauseTime} />
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
						onFinish={onFinish} />
				</View>
			</Wrapper>
		)}
		</>
	);
};

export default Game;

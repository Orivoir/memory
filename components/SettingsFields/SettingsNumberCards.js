import React from 'react';
import {View,Text} from 'react-native';
import InputRange from 'react-input-range';
import {connect, useDispatch} from 'react-redux';

const SettingsNumberCards = ({cardsNumber}) => {

  const [currentCardsNumber, setCurrentCardsNumber] = React.useState(cardsNumber);

  const dispatch = useDispatch();

  const onSetCardNumber = newCardsNumber => {

    dispatch({
      type: "SET_CARDS_NUMBER",
      value: newCardsNumber
    });

    setCurrentCardsNumber(newCardsNumber);
  };

  return (
    <View>
      <Text>Number cards</Text>
	
	{/* currently trigger error:
		string should be render with Text component
	*/}
	{/* <InputRange
        name="Number cards"
        minValue={4}
        maxValue={100}
        value={currentCardsNumber}
        onChange={onSetCardNumber}
      /> */}
	  

	</View>
  );
}

export default connect(state => ({
  cardsNumber: state.cardsNumber
}))(SettingsNumberCards);
import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Slider from '@react-native-community/slider';
import {connect, useDispatch} from 'react-redux';

import {
  MIN_VALUE_CARDS_NUMBER,
  MAX_VALUE_CARDS_NUMBER
} from './../../constant';

const SettingsNumberCards = ({cardsNumber}) => {

  const [currentCardsNumber, setCurrentCardsNumber] = React.useState(cardsNumber);
  const [liveCardsNumber, setLiveCardsNumber] = React.useState(cardsNumber);

  const dispatch = useDispatch();

  const onSetCardNumber = newCardsNumber => {

    dispatch({
      type: "SET_CARDS_NUMBER",
      value: newCardsNumber
    });

    setCurrentCardsNumber(newCardsNumber);
  };

  const onLiveChange = newLiveCardsNumber => {
    setLiveCardsNumber(newLiveCardsNumber);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: .5
      }}
    >
      <Text
        style={{
          fontSize: 16
        }}
      >
        Number cards ({liveCardsNumber})
      </Text>

      <Slider
        style={{flex: 1}}
        step={1}
        minimumValue={MIN_VALUE_CARDS_NUMBER}
        maximumValue={MAX_VALUE_CARDS_NUMBER}
        value={currentCardsNumber}

        onSlidingComplete={onSetCardNumber}
        onValueChange={onLiveChange}
      />

	</View>
  );
}

export default connect(state => ({
  cardsNumber: state.cardsNumber
}))(SettingsNumberCards);
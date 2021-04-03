import React from 'react';
import {ScrollView, View} from 'react-native';
import Card from './Card';
import { connect } from 'react-redux';
import getCards from './cardsGenerator';
import { useIsFocused } from '@react-navigation/core';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const TIME_SHOW_CARD_MISTAKE = 750; // ms

const Board = ({
  onMistake,
  onSuccess,
  onFinish,

  cardsNumber,
  cardsTheme
}) => {


  const isMounted = useIsFocused();

  const [cardOpens, setCardOpens] = React.useState([]);
  const [isAwait, setIsAwait] = React.useState(false);

  const cardHideUri = React.useRef(resolveAssetSource(require('./../../assets/images/cards_themes/hide/hide-card-box.svg'))).current.uri;
  const cards = React.useRef(null);
  const cardsFind = React.useRef([]);

  const getCardById = id => (
    cards.current.find(card => card.id === id)
  );

  const isOpenCard = card => {
    const keyFind = cardOpens.find(cardOpen => cardOpen.id === card.id);
    return (!!keyFind || keyFind === 0);
  };

  const isFindCard = card => {
    const keyFind = cardsFind.current.find(keyCardFind => card.key === keyCardFind);
    return (!!keyFind || keyFind === 0);
  };

  const isVisibleCard = card => (
    isOpenCard(card) || isFindCard(card)
  );

  if(isMounted && !cards.current) {
    cards.current = getCards({cardsNumber, cardsTheme});
    cardsFind.current = [];
  } else if(!isMounted) {
    cards.current = null;
    cardsFind.current = [];
    // component is hide
    // return empty fragement
    // for not evaluate: `cards.current` as array
    return <></>;
  }

  const onPressCard = id => {
    const card = getCardById(id);

    setCardOpens(currentCardOpens => ([
      ...currentCardOpens,
      card
    ]));

    if(cardOpens.length === 1) {

      if(cardOpens[0].key === card.key) {
        cardsFind.current.push(card.key);
        onSuccess();
        setCardOpens([]);
        if(cardsFind.current.length / (cards.current.length/2) === 1) {
          onFinish();
        }
      } else {
        onMistake();
        setIsAwait(true);
        setTimeout(() => {
          setIsAwait(false);
          setCardOpens([]);
        }, TIME_SHOW_CARD_MISTAKE);
      }

    }

  };

  return (
    <View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {cards.current.map(card => (
            <Card
              key={card.id}
              uri={isVisibleCard(card) ? card.uri: cardHideUri}
              onPress={onPressCard}
              id={card.id}
              state={(isAwait && isVisibleCard(card) && !isFindCard(card) ) ? "mistake": isOpenCard(card) ? "open": isFindCard(card) ? "success": "hide"}
              enabled={!isVisibleCard(card) && !isAwait}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default connect(state => ({
  cardsNumber: state.cardsNumber,
  cardsTheme: state.cardsTheme
}))(Board);

import { useIsFocused } from '@react-navigation/core';
import React from 'react';
import { Pressable, View } from 'react-native';
import {SvgCssUri} from 'react-native-svg';
import {connect} from 'react-redux';

const CARD_STATE = {
  SUCCESS: "success",
  MISTAKE: "mistake",
  HIDE: "hide",
  OPEN: "open"
};

const Card = ({
  uri,
  enabled, // should listen press
  onPress,
  id=null,
  state,
  theme
}) => {

  if(
    typeof state !== "string" ||
    !CARD_STATE[(state.toUpperCase().trim())]
  ) {
    state = CARD_STATE.OPEN;
  }

  const isMounted = useIsFocused();

  const {colors} = theme;
  const borderColor = state === CARD_STATE.HIDE ? colors.secondary: state === CARD_STATE.OPEN ? colors.primary: state === CARD_STATE.MISTAKE ? colors.error: colors.accent;
  const additionalsPressableProps = enabled ? {onPress: () => onPress(id)}: {};

  if(!isMounted) {
    // return empty fragment during
    // hide component for not try load ressource image
    return <></>;
  }

  return (
    <View
      style={{
        marginHorizontal: 3,
        marginVertical: 3,
        paddingHorizontal: 3,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor
      }}
    >
      <Pressable
        {...additionalsPressableProps}
        // android_ripple={}
      >
        {isMounted ? <SvgCssUri
          uri={uri}
          width={50}
          height={75}
        />: <></>}
      </Pressable>
    </View>
  );
}

export default connect(state => ({
  theme: state.UItheme.theme
}))(Card);

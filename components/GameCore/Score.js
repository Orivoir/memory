import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { connect } from 'react-redux';
import useIsLand from './../../hooks/useIsLand';

const Score = ({
  theme,
  count: {mistakes, success}
}) => {

  const {colors} = theme;
  const isLand = useIsLand();

  const styleContainerScoreMargin = {marginHorizontal: !isLand ? 0: 3};

  return (
    <View
      style={{
        flexDirection: !isLand ? "column-reverse": "row-reverse",
      }}
    >
      <View
        style={[
          styles.containerScore,
          styleContainerScoreMargin
        ]}
      >
        <Text>{mistakes}</Text>
        <Avatar.Icon size={32} icon="alert-box" color={colors.error} backgroundColor="transparent" />
      </View>

      <View
        style={[
          styles.containerScore,
          styleContainerScoreMargin
        ]}
      >
        <Text>{success}</Text>
        <Avatar.Icon size={32} icon="check-bold" color={colors.primary} backgroundColor="transparent" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerScore: {
    flexDirection: "row",
    alignItems: "center"
  }
})

export default connect(state => ({
  theme: state.UItheme.theme
}))(Score);

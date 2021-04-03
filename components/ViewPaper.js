import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

// ViewPaper is generic same View component of react-native
// but auto inherit backgroundColor of react-native-paper theme
// because react-native-paper not implements generic container
const ViewPaper = ({
  theme,
  style={},
  children
}) => {

  const {colors} = theme;

  return (
    <View
      style={{
        backgroundColor: colors.primary,
        ...(style || {})
      }}
    >
      {children}
    </View>
  );
}

export default connect(state => ({
  theme: state.UItheme.theme
}))(ViewPaper);

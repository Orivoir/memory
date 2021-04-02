import React from 'react';
import {View} from 'react-native';

import {connect} from 'react-redux';

const Wrapper = ({theme, children, style}) => {
  return (
    <View
      style={{
        ...style,
        flex: 1,
        backgroundColor: theme.colors.background
      }}
    >
      {children}
    </View>
  );
}

export default connect(state => ({
  theme: state.UItheme.theme
}))(Wrapper);
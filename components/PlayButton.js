import React from 'react';
import {Button} from 'react-native-paper';

const PlayButton = ({
  theme,
  onPress
}) => {
  return (
    <Button
      mode="contained"
      style={{
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: theme.colors.accent
      }}
      icon="controller-classic"
      onPress={onPress}
    >
      play
    </Button>
  );
}

export default PlayButton;

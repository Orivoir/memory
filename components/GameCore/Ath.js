import React from 'react';
import { View } from 'react-native';

import GameChrono from './Chrono';
import GameScore from './Score';

const Ath = ({count}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <View>
        <GameChrono />
      </View>

      <View>
        <GameScore count={count} />
      </View>
    </View>
  );
}

export default Ath;

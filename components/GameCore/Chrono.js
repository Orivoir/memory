import React from 'react';
import {View} from 'react-native'
import { Avatar, Text} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import useIsLand from '../../hooks/useIsLand';
import { connect } from 'react-redux';

import {
  CLOCK_ICON_TARGET_NAME
} from './../../constant';

const Chrono = ({theme, isPause=false}) => {

  // synthetic state of components
  // because react native navigation use a mask view renderer
  // and unmount native lifecycle of components is not trigger
  // see: <https://reactnavigation.org/docs/use-is-focused/> and <https://reactnavigation.org/docs/navigation-lifecycle/>
  const isMounted = useIsFocused();

  const [time, setTime] = React.useState(0);
  const timeId = React.useRef(null);

  const timeTargetIconIndex = time % 12;
  const iconName = `clock-time-${CLOCK_ICON_TARGET_NAME[timeTargetIconIndex]}`;

  const freeMemory = () => {
    clearInterval(timeId.current);
    timeId.current = null;
  };

  React.useEffect(() => {
    return () => {
      freeMemory();
    };
  });

  const onUpdateTime = () => {
    setTime(currentTime => currentTime + 1)
  };

  const isLand = useIsLand();

  const iconSize = !isLand ? 48: 32;
  // const fontSize = !isLand ? 20: 16;


  if(!isMounted) {
    freeMemory();
    // component is hide
    return <></>;
  } else if(isMounted && !timeId.current && !isPause) {
    setTime(0);
    timeId.current = setInterval(onUpdateTime, 1e3);
  }

  if(isPause) {
    freeMemory();
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {/* <Text style={{fontSize, marginEnd: 4}}>{time}</Text> */}
      <Avatar.Icon size={iconSize} icon={iconName} backgroundColor={theme.colors.accent} />
    </View>
  );
}

export default connect(state => ({
  theme: state.UItheme.theme
}))(Chrono);

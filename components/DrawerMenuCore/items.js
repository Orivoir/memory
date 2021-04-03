import React from 'react';
import {List} from 'react-native-paper';

export default function createItems({
  onPressBadges,
  onPressSettings
}) {

  return [
    {
      title: "badges",
      description: "see event badges you have unlocks",
      icon: props => <List.Icon {...props} name="trophy" />,
      onPress: onPressBadges,
    },
    {
      title: "settings",
      description: "customize you application",
      icon: props => <List.Icon {...props} name="cog" />,
      onPress: onPressSettings,
    },
    {
      title: "exit",
      description: "close application",
      icon: props => <List.Icon {...props} name="location-exit" />,
      onPress: () => {
        console.log("exit application has been pressed")
      },
    },
  ];

}

import React from 'react';
import {List} from 'react-native-paper';
import {ScrollView} from 'react-native';

import createItems from './items';

const ListItems = ({
  onPressBadges,
  onPressSettings
}) => {


  const items = React.useRef(createItems({
    onPressBadges,
    onPressSettings
  })).current;

  return (
    <ScrollView>
      {items.map(item => (
        <List.Item
          left={item.icon}
          title="settings"
          description="customize you application"
          onPress={onPressSettings}
        />
      ))}
    </ScrollView>
  );
}

export default ListItems;

import React from 'react';

import Wrapper from './Wrapper';
import DrawerMenuHeader from './DrawerMenuCore/Header';
import DrawerMenuItems from './DrawerMenuCore/ListItems';


const DrawerMenuRenderer = ({
  navigation,
  isLand // is landscape orientation mode
}) => {

  const logoSize = !isLand ? 200: 75;

  return (
    <Wrapper>
      <DrawerMenuHeader logoSize={logoSize} />
      <DrawerMenuItems
        onPressBadges={() => navigation.navigate("Badges")}
        onPressSettings={() => navigation.navigate("Settings")}
      />
    </Wrapper>
  );
}

export default DrawerMenuRenderer;

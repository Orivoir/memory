import React from 'react';
import {View} from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import {SvgCssUri} from 'react-native-svg';



const DrawerMenuHeader = ({logoSize}) => {

  const svg = resolveAssetSource(require('./../../assets/images/logo.svg'));

  return (
    <View
      style={{
        marginVertical: 8,
        alignItems: "center"
      }}
    >
      <SvgCssUri
        width={logoSize}
        height={logoSize}
        uri={svg.uri}
      />
    </View>
  );
}

export default DrawerMenuHeader;

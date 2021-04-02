import React from 'react';
import {ScrollView, View } from 'react-native';

import {List} from 'react-native-paper';

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import {SvgCssUri} from 'react-native-svg';
import Wrapper from './Wrapper';

const DrawerMenuRenderer = ({state, navigation, isLand}) => {

  const svg = resolveAssetSource(require('./../assets/images/logo.svg'));
  const logoSize = !isLand ? 200: 75;

  return (
    <Wrapper>
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

      <ScrollView>
          <List.Item
            left={props => (
              <List.Icon {...props} icon="trophy" />
            )}
            title="badges"
            description="see event badges you have unlocks"
            onPress={() => {
              console.log("press item");
            }}
          />

          <List.Item
            left={props => (
              <List.Icon {...props} icon="cog" />
            )}
            title="settings"
            description="customize you application"
            onPress={() => navigation.navigate("Settings")}
          />

          <List.Item
            left={props => (
              <List.Icon {...props} icon="location-exit" />
            )}
            title="exit"
            description="close application"
          />
      </ScrollView>
    </Wrapper>
  );
}

export default DrawerMenuRenderer;

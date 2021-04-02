import React from 'react';
import {View} from 'react-native';

import {connect} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './components/Screen/Home';
import Settings from './components/Screen/Settings';
import Badges from './components/Screen/Badges';
import Game from './components/Screen/Game';
import DrawerMenuRenderer from './components/DrawerMenuRenderer';
import Appbar from './components/Appbar';
import useIsLand from './hooks/useIsLand';

const Drawer = createDrawerNavigator();

const App = ({theme}) => {

  const isLand = useIsLand();

  return (
    <PaperProvider theme={theme}>
        <NavigationContainer
          initialRouteName="Home"
        >
          <Drawer.Navigator
            drawerType="front"
            drawerContent={props => <DrawerMenuRenderer {...props} isLand={isLand} />}
            screenOptions={{
              headerShown: true,
              header: Appbar
            }}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Game" component={Game} />
            <Drawer.Screen name="Badges" component={Badges} />
            <Drawer.Screen name="Settings" component={Settings} />

          </Drawer.Navigator>
        </NavigationContainer>

    </PaperProvider>
  );
};

export default connect(state => ({
  theme: state.UItheme.theme,
}))(App);

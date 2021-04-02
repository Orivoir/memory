import React from 'react';
import {Appbar as PaperAppbar} from 'react-native-paper';

// <https://callstack.github.io/react-native-paper/appbar.html>
// <https://callstack.github.io/react-native-paper/integrate-app-bar-with-react-navigation.html>

const Appbar = ({scene: {descriptor: {navigation}}}) => {

  return (
    <PaperAppbar.Header>
      <PaperAppbar.Content title="Memory" />

      <PaperAppbar.Action
        icon="menu"
        onPress={() => navigation.openDrawer()} />

      <PaperAppbar.Action
        icon="home"
        onPress={() => navigation.navigate("Home")} />

    </PaperAppbar.Header>
  );
};

export default Appbar;

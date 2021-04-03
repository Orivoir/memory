import React from 'react';
import {Pressable} from 'react-native';
import { Modal, Portal, Headline, Button, Avatar} from 'react-native-paper';
import { connect } from 'react-redux';
import PlayButton from './PlayButton';
import ViewPaper from './ViewPaper';

const ModalFinishGame = ({
  isVisible,
  onClose,
  onPlay,
  onGoHome,
  theme
}) => {

  const {colors} = theme;

  return (
    <Portal>
      <Modal
        visible={isVisible}
        onDismiss={onClose}
      >
        <ViewPaper
          style={{
            padding: 8,
            marginHorizontal: 8,
          }}
        >

          <Pressable
            onPress={onClose}
            // android_ripple={}
            style={{
              position: "absolute",
              right: 3,
              top: -15,
              zIndex: 99999
            }}
          >
            <Avatar.Icon
              style={{
                backgroundColor: colors.error
              }}
              icon="close-thick"
              size={32}
            />
          </Pressable>

          <Headline style={{margin: 4, marginBottom: 16}}>
            Victory !
          </Headline>

          <PlayButton onPress={onPlay} />

          <Button
            icon="home"
            mode="contained"
            style={{marginVertical: 16}}
          >
            Home
          </Button>

        </ViewPaper>
      </Modal>
    </Portal>
  );
}

export default connect(state => ({
  theme: state.UItheme.theme
}))(ModalFinishGame);
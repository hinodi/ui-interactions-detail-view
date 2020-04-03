import React, { PureComponent } from 'react';
import { Text, View, TouchableHighlight, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { ScaleAndOpacity } from 'react-native-motion';
import Swipeable from 'react-native-swipeable';
import { MaterialIcons } from '@expo/vector-icons';

import Header from './Header';
import Content from './Content';
import { getPlatformElevation } from '../../utils';

class ListItem extends PureComponent {
  onPressed = event => {
    const { onPress, item } = this.props;
    onPress(item, event.nativeEvent);
  };
  render() {
    const { item, isSelected, style, isHidden, animateOnDidMount, toggleScrollable, inDetail } = this.props;
    const { name, isReceived, title, topic, ...rest } = item;

    const rightButtons = [
      <TouchableOpacity style={{ backgroundColor: '#008dff', flex: 1, marginVertical: 8, flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <MaterialIcons name="edit" size={40} color="#fff" />
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Sửa</Text>
        </View>
        <View style={{ flex: 3 }} />
      </TouchableOpacity>,
      <TouchableOpacity style={{ backgroundColor: '#ff2d4c', flex: 1, marginVertical: 8, flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <MaterialIcons name="delete" size={40} color="#fff" />
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Xoá</Text>
        </View>
        <View style={{ flex: 3 }} />
      </TouchableOpacity>,
    ];

    return (
      <ScaleAndOpacity
        isHidden={isHidden}
        animateOnDidMount={animateOnDidMount}
      >
        {
          !inDetail ?
            <Swipeable
              rightButtons={rightButtons}
              rightButtonWidth={100}
              rightActionActivationDistance={250}
              onRightActionRelease={() => alert('hello')}
              onSwipeStart={() => toggleScrollable(false)}
              onSwipeRelease={() => toggleScrollable(true)}
            >
              <TouchableWithoutFeedback onPress={this.onPressed}>
                <View style={[styles.container, style]} pointerEvents="box-only">
                  <Header item={item} />
                  <Content {...rest} />
                </View>
              </TouchableWithoutFeedback>
            </Swipeable>
            :
            <View style={[styles.container, style]} pointerEvents="box-only">
              <Header item={item} />
              <Content {...rest} />
            </View>
        }
      </ScaleAndOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    ...getPlatformElevation(2),
  },
});

export default ListItem;

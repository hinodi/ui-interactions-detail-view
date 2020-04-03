import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import Avatar from './Avatar';
import Row from '../Row';
import assets from '../../assets';

class Header extends PureComponent {
  render() {
    const { name, isReceived, title, topic, done } = this.props.item;

    let icon = null;

    if (done) {
      icon = <Ionicons name="md-checkbox" size={24} color="#008dff" />;
    } else {
      icon = <MaterialIcons name="check-box-outline-blank" size={24} color="#ff2d4c" />;
    }

    return (
      <Row style={styles.container}>
        <Avatar src={assets[topic]} />
        <View style={styles.nameContainer}>
          <Text style={{ fontWeight: '900', fontSize: 18 }}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>{icon}</View>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //height: 56,
    alignItems: 'center',
  },
  nameContainer: {
    flex: 1,
    marginLeft: 16,
  },
  rightContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;

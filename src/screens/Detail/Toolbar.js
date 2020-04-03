import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';

import { Row } from '../../components';
import translateAndOpacity from '../../animations/translateAndOpacity';

class Toolbar extends PureComponent {
  render() {
    const { onBackPress } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View>
          <Row style={styles.toolbarContainer}>
            <TouchableOpacity onPress={onBackPress} style={styles.backContainer}>
              {/* <Row style={styles.backContainer}> */}
                <Ionicons name="ios-arrow-back" size={24} color="white" />
                <Text style={styles.titleBackText}>Back</Text>
              {/* </Row> */}
            </TouchableOpacity>
            <View style={styles.menuIconContainer}>
              <Feather name="share" size={24} color="white" />
            </View>
          </Row>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  toolbarContainer: {
    height: 56,
    alignItems: 'center',
    paddingRight: 16,
    justifyContent: 'space-between',
  },
  statusBar: {
    height: 24,
    backgroundColor: '#008dff',
  },
  titleBackText: {
    color: 'white',
    marginLeft: 8,
  },
  backContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default translateAndOpacity(Toolbar);

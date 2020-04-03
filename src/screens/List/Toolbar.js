import React, { PureComponent } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

import { Row } from '../../components';
import translateAndOpacity from '../../animations/translateAndOpacity';
import {ROUTE_KEY} from '../../config/Constants';

class Toolbar extends PureComponent {
  renderDetail() {
    const { opacityValue, translateY } = this.state;
    const { onBackPress } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        {/* <TouchableNativeFeedback onPress={onBackPress}> */}
        <Animated.View style={animationStyle}>
          <Row style={styles.toolbarContainer}>
            <Row style={styles.backContainer}>
              <Ionicons name="ios-arrow-back" size={24} color="white" />
              <Text style={styles.titleBackText}>Back</Text>
            </Row>
            <View style={styles.menuIconContainer}>
              <Feather name="share" size={24} color="white" />
            </View>
          </Row>
        </Animated.View>
        {/* </TouchableNativeFeedback> */}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View>
          <Row style={styles.toolbarContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Hinodi</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate(ROUTE_KEY.ADD_TODO)}
            >
              <View style={styles.menuIconContainer}>
                <MaterialIcons name="playlist-add" size={30} color="#008dff" />
              </View>
            </TouchableOpacity>
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
    paddingHorizontal: 16,
  },
  titleContainer: {
    flex: 1,
  },
  toolbarBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: '#008dff',
  },
  statusBar: {
    height: 24,
    backgroundColor: 'white',
  },
  titleBackText: {
    color: 'white',
    marginLeft: 8,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '900',
  },
  backContainer: {
    flex: 1,
    alignItems: 'center',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default translateAndOpacity(Toolbar);

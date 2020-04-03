import React, { PureComponent } from 'react';
import { Text, View, FlatList, StyleSheet, Easing } from 'react-native';
import { connect } from 'react-redux';

import { SharedElement } from 'react-native-motion';

import Toolbar from './Toolbar';
import BottomBar from './BottomBar';
import { ListItem } from '../../components';
import data from '../../data/data';

class List extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { 
      opacityOfSelectedItem: 1, 
      selectedItem: null,
      enabled: true
    };
    this.sharedElementRefs = {};
  }
  onListItemPressed = item => {
    const { onItemPress } = this.props;
    this.setState({ selectedItem: item });

    onItemPress(item);

    this.sharedElementRefs[item.id].moveToDestination();
  };
  onMoveToDestinationWillStart = () => {
    this.setState({ opacityOfSelectedItem: 0 });
  };
  onMoveToSourceDidFinish = () => {
    this.setState({ opacityOfSelectedItem: 1 });
  };
  getSharedNode = props => {
    const { item } = props;

    return (
      <View style={{ backgroundColor: 'transparent' }}>
        <ListItem item={item} animateOnDidMount={false} isHidden={false} />
      </View>
    );
  };
  renderItem = ({ item }) => {
    const { opacityOfSelectedItem } = this.state;
    const { selectedItem } = this.props;

    const isHidden = selectedItem && selectedItem.id !== item.id;
    const isSelected = selectedItem && selectedItem.id === item.id;
    const id = item.id;

    return (
      <SharedElement
        easing={Easing.in(Easing.back())}
        ref={node => (this.sharedElementRefs[id] = node)}
        id={id}
        onMoveToDestinationWillStart={this.onMoveToDestinationWillStart}
        onMoveToSourceDidFinish={this.onMoveToSourceDidFinish}
        getNode={this.getSharedNode}
        item={item}
      >
        <View
          style={{
            opacity: opacityOfSelectedItem,
            backgroundColor: 'transparent',
          }}
        >
          <ListItem
            item={item}
            onPress={this.onListItemPressed}
            isHidden={isHidden}
            toggleScrollable={value => this.setState({ enabled: value })}
          />
        </View>
      </SharedElement>
    );
  };
  render() {
    const { opacityOfSelectedItem, enabled } = this.state;
    const { selectedItem, phase, listItem } = this.props;

    return (
      <View style={styles.container}>
        <Toolbar
          isHidden={phase !== 'phase-0'}
          onBackPress={this.onBackPressed}
          navigation={this.props.navigation}
        />
        <FlatList
          scrollEnabled={enabled}
          data={listItem}
          dataExtra={{ phase, opacityOfSelectedItem }}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />
        {/* <BottomBar isHidden={phase !== 'phase-0'} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

const mapStateToProps = state =>
  ({
    listItem: state.data.listItem,
  });

const mapActionCreators = {
};

export default connect(mapStateToProps, mapActionCreators)(List);



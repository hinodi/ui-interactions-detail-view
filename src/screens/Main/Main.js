import React from 'react';
import { InteractionManager, StyleSheet, Text, View } from 'react-native';
import { SharedElementRenderer } from 'react-native-motion';

import List from '../List/List';
import Detail from '../Detail/Detail';
import ToolbarBackground from '../Detail/ToolbarBackground';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: null,
            // phase of animation
            // phase-0:
            // default
            //
            // phase-1:
            // hide list toolbar, hide list bottom bar, show toolbar background and move item
            //
            // phase-2:
            // show detail toolbar, show detail bottom bar, show details of item
            //
            // phase-3
            // hide details of item
            //
            // phase-4
            // hide detail toolbar, hide detail bootom bar, move item back to scrool view
            phase: 'phase-0',
        };
    }
    onItemPressed = item => {
        this.setState({
            phase: 'phase-1',
            selectedItem: item,
        });
    };
    onBackPressed = () => {
        this.setState({
            phase: 'phase-3',
        });
    };
    onSharedElementMovedToDestination = () => {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                phase: 'phase-2',
            });
        });
    };
    onSharedElementMovedToSource = () => {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                selectedItem: null,
                phase: 'phase-0',
            });
        });
    };
    renderPage() {
        const { selectedItem, position, detailItem, phase } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <List
                    selectedItem={selectedItem}
                    onItemPress={this.onItemPressed}
                    phase={phase}
                    navigation={this.props.navigation}
                />
                <Detail
                    phase={phase}
                    selectedItem={selectedItem}
                    onBackPress={this.onBackPressed}
                    onSharedElementMovedToDestination={
                        this.onSharedElementMovedToDestination
                    }
                    onSharedElementMovedToSource={this.onSharedElementMovedToSource}
                />
            </View>
        );
    }
    render() {
        const {
            phase,
        } = this.state;

        return (
            <SharedElementRenderer>
                <View style={styles.container}>
                    <ToolbarBackground
                        isHidden={phase !== 'phase-1' && phase !== 'phase-2'}
                    />
                    {this.renderPage()}
                </View>
            </SharedElementRenderer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

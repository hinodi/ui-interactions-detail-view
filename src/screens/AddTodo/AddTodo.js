import React, { Component } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import moment from 'moment';
import uuidv1 from 'uuid/v1';
import { addTodo } from './AddTodoActions';

class AddTodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: 'LEARN',
            title: '',
            detail: '',
        };
    }

    render() {
        const {
            topic,
            title,
            detail,
        } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.bodyContainer}>
                    <View style={styles.rowContainer}>
                        <MaterialIcons
                            name="title"
                            size={30}
                            color="#555667"
                            style={{ marginBottom: 10 }}
                        />
                        <View style={styles.bodyContent}>
                            <TextInput
                                autoCorrect={false}
                                autoCapitalize="none"
                                placeholder={'Tiêu đề'}
                                underlineColorAndroid="transparent"
                                style={styles.bodyElement}
                                onChangeText={title => this.setState({ title })}
                                value={title}
                            />
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <MaterialIcons
                            name="details"
                            size={30}
                            color="#555667"
                            style={{ marginBottom: 10 }}
                        />
                        <View style={styles.bodyContent}>
                            <TextInput
                                autoCorrect={false}
                                autoCapitalize="none"
                                placeholder={'Mô tả'}
                                underlineColorAndroid="transparent"
                                style={styles.bodyElement}
                                onChangeText={detail => this.setState({ detail })}
                                value={detail}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => this.props.addTodo(
                        {
                            id: uuidv1(),
                            topic,
                            title,
                            detail,
                            done: false,
                            date: moment(),
                        }, 
                        () => this.props.navigation.goBack()
                    )}
                >
                    <View style={styles.buttonEdit}>
                        <Text style={styles.textButtonEdit}>
                            Thêm
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

const mapActionCreators = {
    addTodo
};

export default connect(null, mapActionCreators)(AddTodoComponent);

const styles = StyleSheet.create({
    bodyContainer: {
        margin: 20,
        marginTop: 40,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    bodyContent: {
        marginLeft: 15,
        flex: 1,
        borderBottomWidth: 0.3,
        paddingBottom: 8.8,
        borderColor: '#d1d5db'
    },
    bodyElement: {
        fontSize: 20,
        color: '#707070'
    },
    buttonEdit: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 11,
        borderRadius: 20,
        backgroundColor: '#008dff',
        shadowColor: '#1b407e',
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 2,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        margin: 20
    },
    textButtonEdit: {
        fontSize: 20,
        color: '#ffffff'
    }
});

import { StackNavigator } from 'react-navigation';
import { ROUTE_KEY } from './Constants';

import MainComponent from '../screens/Main/Main';
import AddTodoComponent from '../screens/AddTodo/AddTodo';

const routeAppConfiguration = {
    [ROUTE_KEY.MAIN]: {
        screen: MainComponent,
        navigationOptions: { header: null }
    },
    [ROUTE_KEY.ADD_TODO]: {
        screen: AddTodoComponent,
        navigationOptions: { 
            title: 'Add new todo item',
            titleStyle: {
                textAlign: 'center',
                fontSize: 24,
                fontWeight: '900',
            },
        }
    },
};

const stackAppConfiguration = {
    initialRouteName: ROUTE_KEY.MAIN,
    navigationOptions: {
        gesturesEnabled: true
    },
};

const AppNavigator = StackNavigator(
    routeAppConfiguration,
    stackAppConfiguration
);

export default AppNavigator; 
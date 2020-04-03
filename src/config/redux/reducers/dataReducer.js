import update from 'react-addons-update';
import moment from 'moment';
import uuidv1 from 'uuid/v1';
import { LOAD_DATA_FROM_LOCAL, ADD_NEW_TODO_ITEM } from '../constants';

const initialState = {
    listItem: [
        {
            id: uuidv1(),
            topic: 'LEARN',
            title: 'Học flutter',
            detail: 'Học flutter cơ bản thông qua Youtube và khoá học miễn phí trên Udemy',
            done: false,
            date: moment(),
        },
    ],
};

const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_FROM_LOCAL: 
            return update(state, {
                listItem: {
                    $set: action.payload
                }
            });
        case ADD_NEW_TODO_ITEM: 
            return update(state, {
                listItem: {
                    $set: [action.payload, ...state.listItem]
                }
            });
        default:
            return state;
    }
};

export default DataReducer;
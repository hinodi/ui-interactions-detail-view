import { combineReducers } from 'redux';
import DataReducer from './reducers/dataReducer';

const reducer = combineReducers({
    data: DataReducer,
});

export default reducer;
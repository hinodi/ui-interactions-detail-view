import { ADD_NEW_TODO_ITEM } from '../../config/redux/constants';

export function addTodo(newTodo, onDoneFunc) {
    return (dispatch, store) => {
        dispatch({
            type: ADD_NEW_TODO_ITEM,
            payload: newTodo,
        });
        onDoneFunc();
    };
}

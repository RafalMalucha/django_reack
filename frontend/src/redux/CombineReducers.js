import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import TestReducer from './TestReducer';

const RootReducer = combineReducers({
    test: TestReducer,
});

export default RootReducer;
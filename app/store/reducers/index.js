import { combineReducers } from 'redux';

import { RootNavigator } from '../../AppNavigator';
import * as userReducer from './userReducer';
import * as authReducer from './authReducer';
import * as versReducer from './vers';

const navReducer = (state, action) => {
    return RootNavigator.router.getStateForAction(action, state) || state;
}

export default combineReducers({
    nav: navReducer,
    ...versReducer,
    ...userReducer,
    ...authReducer,
});

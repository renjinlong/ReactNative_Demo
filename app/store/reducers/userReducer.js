import { FETCH_USER_INFO } from '../actions/actionTypes';

const user = {
    userName: '史xx',
    mobile: '1861423xxxx'
};

export const userInfo = (state = {}, action) => {
    switch(action.type) {
        case FETCH_USER_INFO:
            return user
        default:
            return state
    }
};

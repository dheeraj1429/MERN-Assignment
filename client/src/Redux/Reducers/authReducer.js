import { ACTION_TYPE } from "../ActionType/ActionType";

const INITAL_STATE = {
    user: null,
};

const authReducer = function (state = INITAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPE.SIGN_IN_USER:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default authReducer;

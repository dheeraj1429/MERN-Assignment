import { ACTION_TYPE } from "../ActionType/ActionType";
const INITAL_STATE = {
    uploadProduct: null,
};

const IndexReducer = function (state = INITAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPE.UPLOAD_PRODUCT:
            return {
                ...state,
                uploadProduct: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default IndexReducer;

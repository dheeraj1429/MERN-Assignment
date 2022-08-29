import { ACTION_TYPE } from "../ActionType/ActionType";
const INITAL_STATE = {
    uploadProduct: null,
    allProducts: [],
};

const IndexReducer = function (state = INITAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPE.UPLOAD_PRODUCT:
            return {
                ...state,
                uploadProduct: action.payload,
            };

        case ACTION_TYPE.REMOVE_UPLOAD_NOTIFICATION:
            return {
                ...state,
                uploadProduct: action.payload,
            };

        case ACTION_TYPE.FETCH_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default IndexReducer;

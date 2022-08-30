import { ACTION_TYPE } from "../ActionType/ActionType";
const INITAL_STATE = {
    uploadProduct: null,
    allProducts: [],
    selectedProduct: null,
    udpateProductInfo: null,
    deleteProductInfo: null,
    cart: [],
    showSidebar: false,
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

        case ACTION_TYPE.FETCH_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload,
            };

        case ACTION_TYPE.UDPATE_PRODUCT:
            return {
                ...state,
                udpateProductInfo: action.payload,
            };

        case ACTION_TYPE.RESET_UPDATE_INFO:
            return {
                ...state,
                udpateProductInfo: action.payload,
            };

        case ACTION_TYPE.DELETE_SELECTED_PRODUCT:
            return {
                ...state,
                deleteProductInfo: action.payload,
            };

        case ACTION_TYPE.SHOW_SIDEBAR_COMPONENT:
            return {
                ...state,
                showSidebar: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default IndexReducer;

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

const groupProduct = function (cart, product) {
    const exists = cart.find((el) => el.productId._id === product._id);

    if (exists) {
        return cart.map((el) =>
            el.productId._id === product._id ? { ...el, qty: el.qty + 1 } : el
        );
    }

    return [...cart, { productId: { ...product }, qty: 1 }];
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

        case ACTION_TYPE.GET_ALL_CART_PRODUCTS:
            return {
                ...state,
                cart: action.payload,
            };

        case ACTION_TYPE.ADD_TO_CARD:
            return {
                ...state,
                cart: groupProduct(state.cart, action.payload),
            };

        default:
            return {
                ...state,
            };
    }
};

export default IndexReducer;

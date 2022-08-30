import { ACTION_TYPE } from "../ActionType/ActionType";
import axios from "axios";
import headers from "./headers";

export const uploadSingleProduct = function (data) {
    return async function (dispatch) {
        try {
            const product = await axios.post("/upload", data, headers);
            if (product && product?.data) {
                dispatch({
                    type: ACTION_TYPE.UPLOAD_PRODUCT,
                    payload: product && product?.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const fetchAllProducts = function () {
    return async function (dispatch) {
        try {
            const fetchAllProducts = await axios.get("/all-products", headers);
            if (fetchAllProducts && fetchAllProducts?.data) {
                dispatch({
                    type: ACTION_TYPE.FETCH_ALL_PRODUCTS,
                    payload: fetchAllProducts && fetchAllProducts?.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const fetchSelectedProduct = function (id) {
    return async function (dispatch) {
        try {
            const selectedProduct = await axios.get(`/get-selected-product/${id}`, headers);
            if (selectedProduct && selectedProduct?.data) {
                dispatch({
                    type: ACTION_TYPE.FETCH_SELECTED_PRODUCT,
                    payload: selectedProduct && selectedProduct?.data?.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const updateProductInfo = function (data) {
    return async function (dispatch) {
        try {
            const update = await axios.patch("/update-product-data", data, headers);
            if (update && update?.data) {
                dispatch({
                    type: ACTION_TYPE.UDPATE_PRODUCT,
                    payload: update.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const deleteSingleProduct = function (data) {
    return async function (dispatch) {
        try {
            const productDelete = await axios.delete(`/delete-selected-product/${data}`, headers);

            if (productDelete && productDelete?.data) {
                dispatch({
                    type: ACTION_TYPE.DELETE_SELECTED_PRODUCT,
                    payload: productDelete && productDelete?.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const addToCardItems = function (data) {
    return async function (dispatch) {
        try {
            const addProductIntoCart = await axios.post(`/add-product-into-cart/${data}`, headers);

            console.log(addProductIntoCart);
        } catch (err) {
            console.log(err);
        }
    };
};

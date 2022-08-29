import { ACTION_TYPE } from "../ActionType/ActionType";
import axios from "axios";
import headers from "./headers";

export const uploadSingleProduct = function (data) {
    return async function (dispatch) {
        try {
            const product = await axios.post("/upload", data, headers);

            if (product && product.data) {
                dispatch({
                    type: ACTION_TYPE.UPLOAD_PRODUCT,
                    payload: product && product.data,
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
            console.log(fetchAllProducts);
            if (fetchAllProducts && fetchAllProducts.data) {
                dispatch({
                    type: ACTION_TYPE.FETCH_ALL_PRODUCTS,
                    payload: fetchAllProducts && fetchAllProducts.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

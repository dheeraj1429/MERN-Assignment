import { ACTION_TYPE } from "../ActionType/ActionType";
import axios from "axios";

const headers = {
    "Content-type": "application/json",
};

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

import { ACTION_TYPE } from "../ActionType/ActionType";
import headers from "./headers";
import axios from "axios";

export const signInUser = function (data) {
    return async function (dispatch) {
        try {
            const userSignIn = await axios.post("/auth/sign-in-user", data, headers);

            if (userSignIn && userSignIn?.data) {
                dispatch({
                    type: ACTION_TYPE.SIGN_IN_USER,
                    payload: userSignIn && userSignIn?.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

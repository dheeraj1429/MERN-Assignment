import { ACTION_TYPE } from "../ActionType/ActionType";

export const resetProductNotification = function (data) {
    return {
        type: ACTION_TYPE.REMOVE_UPLOAD_NOTIFICATION,
        payload: data,
    };
};

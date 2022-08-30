import { ACTION_TYPE } from "../ActionType/ActionType";

export const resetProductNotification = function (data) {
    return {
        type: ACTION_TYPE.REMOVE_UPLOAD_NOTIFICATION,
        payload: data,
    };
};

export const resetUpdateNotification = function (data) {
    return {
        type: ACTION_TYPE.RESET_UPDATE_INFO,
        payload: data,
    };
};

export const resetDeletInfo = function (data) {
    return {
        type: ACTION_TYPE.DELETE_SELECTED_PRODUCT,
        payload: data,
    };
};

export const showSidebarComponet = function (data) {
    return {
        type: ACTION_TYPE.SHOW_SIDEBAR_COMPONENT,
        payload: data,
    };
};

export const userSignInExists = function (data) {
    return {
        type: ACTION_TYPE.SIGN_IN_USER,
        payload: data,
    };
};

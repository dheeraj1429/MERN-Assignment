import { combineReducers } from "redux";
import IndexReducer from "./IndexReducers";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    index: IndexReducer,
    auth: authReducer,
});

export default rootReducer;

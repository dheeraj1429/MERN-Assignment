import { combineReducers } from "redux";
import IndexReducer from "./IndexReducers";

const rootReducer = combineReducers({
    index: IndexReducer,
});

export default rootReducer;

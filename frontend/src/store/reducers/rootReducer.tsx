import { combineReducers } from "redux";
import { modalConfirmReducer } from "./modalConfirmReducer";


export const rootReducer = combineReducers({
    modalConfirm: modalConfirmReducer,
});
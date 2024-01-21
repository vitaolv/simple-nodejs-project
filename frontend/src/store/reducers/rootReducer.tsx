import { combineReducers } from "redux";
import { modalConfirmReducer } from "./modalConfirmReducer";
import { isLoadingReducer } from "./isLoadingReducer";


export const rootReducer = combineReducers({
    modalConfirm: modalConfirmReducer,
    loading: isLoadingReducer,
});
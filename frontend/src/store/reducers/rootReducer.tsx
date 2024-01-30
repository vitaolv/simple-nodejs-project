import { combineReducers } from "redux";
import { modalConfirmReducer } from "./modalConfirmReducer";
import { isLoadingReducer } from "./isLoadingReducer";
import { burgerIsOpenReducer } from "./burgerIsOpenReducer";

import productToDeleteReducer from "./productToDeleteReducer";

export const rootReducer = combineReducers({
    modalConfirm: modalConfirmReducer,
    loading: isLoadingReducer,
    productToDelete: productToDeleteReducer,
    menuBurger: burgerIsOpenReducer

});
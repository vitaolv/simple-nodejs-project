import * as types from "../Types"

const initialState = {
    modalIsOpen: false,
}

export function modalConfirmReducer(state = initialState, action: { type: string }) {
    switch (action.type) {
        case types.MODAL_CONFIRM_IS_OPEN: {
            return {
                ...state,
                modalIsOpen: true,
            }
        }

        case types.MODAL_CONFIRM_IS_CLOSE: {
            return {
                ...state,
                modalIsOpen: false,
            }
        }

        default: {
            return state;
        }
    }
}
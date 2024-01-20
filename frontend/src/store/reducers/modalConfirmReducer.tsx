import * as types from "../Types"

interface TypesModalConfirmState {
    modalIsOpen: boolean;
    confirmationResult: boolean | null;
}

const initialState: TypesModalConfirmState = {
    modalIsOpen: false,
    confirmationResult: null,
}

export function modalConfirmReducer(state: TypesModalConfirmState = initialState,
    action: { type: string; payload?: boolean }
) {
    switch (action.type) {
        case types.MODAL_CONFIRM_IS_OPEN: {
            return {
                ...state,
                modalIsOpen: true,
                confirmationResult: null,
            }
        }

        case types.MODAL_CONFIRM_IS_CLOSE: {
            return {
                ...state,
                modalIsOpen: false,
                confirmationResult: null,
            }
        }

        case types.CONFIRM_ACTION_RESULT: {
            return {
                ...state,
                confirmationResult: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}
import * as types from "../Types"

interface TypesModalConfirmState {
    modalIsOpen: boolean;
    confirmationResult: boolean | undefined;
}

const initialState: TypesModalConfirmState = {
    modalIsOpen: false,
    confirmationResult: undefined,
}

export function modalConfirmReducer(state: TypesModalConfirmState = initialState,
    action: { type: string; payload?: boolean }
) {
    switch (action.type) {
        case types.MODAL_CONFIRM_IS_OPEN: {
            return {
                ...state,
                modalIsOpen: action.payload
            }
        }

        case types.MODAL_CONFIRM_IS_CLOSE: {
            return {
                ...state,
                modalIsOpen: false,
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
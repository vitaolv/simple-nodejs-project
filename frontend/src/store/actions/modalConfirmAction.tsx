import * as types from "../Types"

export function modalConfirmIsOpen() {
    return {
        type: types.MODAL_CONFIRM_IS_OPEN
    }
}

export function modalConfirmIsClose() {
    return {
        type: types.MODAL_CONFIRM_IS_CLOSE
    }

}

export function confirmResult() {
    return {
        type: types.CONFIRM_ACTION_RESULT
    }
}
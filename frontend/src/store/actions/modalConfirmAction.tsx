import * as types from "../Types"

export function modalConfirmIsOpenAction() {
    return {
        type: types.MODAL_CONFIRM_IS_OPEN,
        payload: true
    }
}

export function modalConfirmIsCloseAction() {
    return {
        type: types.MODAL_CONFIRM_IS_CLOSE
    }

}

export function confirmResultAction(result: boolean) {
    return {
        type: types.CONFIRM_ACTION_RESULT,
        payload: result
    }
}
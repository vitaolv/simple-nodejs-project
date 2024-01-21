import * as types from "../Types"

export function modalConfirmIsOpenAction() {
    console.log('MODAL_CONFIRM_IS_OPEN action dispatched')
    return {
        type: types.MODAL_CONFIRM_IS_OPEN,
        payload: true
    }
}

export function modalConfirmIsCloseAction() {
    console.log('MODAL_CONFIRM_IS_OPEN action dispatched');

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
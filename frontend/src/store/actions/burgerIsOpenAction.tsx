import * as types from '../Types'

export function burgerIsOpenAction(isOpen: boolean) {
    return {
        type: types.IS_BURGER_OPEN,
        payload: isOpen
    }

}
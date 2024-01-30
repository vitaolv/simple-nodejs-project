import * as types from "../Types"


interface TypesBurgerIsOpen {
    burgerIsOpen: boolean
}

const initialBurgerIsOpen: TypesBurgerIsOpen = {
    burgerIsOpen: false
}

export function burgerIsOpenReducer(state: TypesBurgerIsOpen = initialBurgerIsOpen, action: { type: string; payload: boolean }) {
    switch (action.type) {

        case types.IS_BURGER_OPEN: {
            return {
                ...state,
                burgerIsOpen: action.payload
            }
        }

        default: {
            return state;
        }
    }

}
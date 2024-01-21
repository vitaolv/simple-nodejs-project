import * as types from "../Types"

interface TypesIsLoading {
    isLoading: boolean
}

const initialLoadingState: TypesIsLoading = {
    isLoading: false
}

export function isLoadingReducer(state: TypesIsLoading = initialLoadingState, action: { type: string; payload: boolean }) {
    switch (action.type) {

        case types.IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }

        default: {
            return state;
        }
    }
}
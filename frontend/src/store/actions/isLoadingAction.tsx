import * as types from "../Types"

export function isLoadingAction(isLoading: boolean) {

    return {
        type: types.IS_LOADING,
        payload: isLoading,
    }
}
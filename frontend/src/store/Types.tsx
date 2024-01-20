//Define o tipo para o estado global
export interface modalState {
    modalIsOpen: boolean;
}

//Modal de confirmação
export const MODAL_CONFIRM_IS_OPEN = "MODAL_CONFIRM_IS_OPEN";
export const MODAL_CONFIRM_IS_CLOSE = "MODAL_CONFIRM_IS_CLOSE";
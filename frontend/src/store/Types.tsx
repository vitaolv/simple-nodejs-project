//Define o tipo para o estado global
export interface modalState {
    modalIsOpen: boolean;
}

//Modal de confirmação
export const MODAL_CONFIRM_IS_OPEN = "MODAL_CONFIRM_IS_OPEN";
export const MODAL_CONFIRM_IS_CLOSE = "MODAL_CONFIRM_IS_CLOSE";
//Ação de botões do modal de confirmação
export const CONFIRM_ACTION_RESULT = "CONFIRM_ACTION_RESULT";


//Componente loading
export const IS_LOADING = "IS_LOADING";
import { useEffect } from "react";
import Modal, { ModalBody, ModalFooter, ModalHeader } from './util/ModalUtils';

interface TypesModalComponent {
    readonly textAlert: string;
    readonly textHeader: string;
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
    setConfirmationModal: (confirmationModal: boolean) => void;

}

export function ModalComponent({ textAlert, textHeader, showModal, setShowModal, setConfirmationModal }: TypesModalComponent) {


    return (
        <Modal show={showModal} setShow={setShowModal}
        >
            <ModalHeader>
                <h2>{textHeader}</h2>
            </ModalHeader>
            <ModalBody>
                <p style={{ textAlign: 'justify' }}>
                    {textAlert}
                </p>
            </ModalBody>
            <ModalFooter>
                <button onClick={() => {
                    setShowModal(false);
                    setConfirmationModal(true);
                }}>
                    Confirmar
                </button>
            </ModalFooter>
        </Modal >
    );
}



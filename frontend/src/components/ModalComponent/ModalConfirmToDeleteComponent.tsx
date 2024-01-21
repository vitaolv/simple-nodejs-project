import { RootState } from '../../store';
import Modal, { ModalBody, ModalFooter, ModalHeader } from './util/ModalUtils';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { confirmResultAction, modalConfirmIsCloseAction } from '../../store/actions/modalConfirmAction';
interface TypesModalConfirmToDeleteComponent {
    readonly textAlert: string;
    readonly textHeader: string;
    readonly productId: string;
}

export function ModalConfirmToDeleteComponent({ textAlert, textHeader, productId }: TypesModalConfirmToDeleteComponent) {
    const showModal = useSelector((state: RootState) => state.modalConfirm.modalIsOpen);
    const dispatch = useDispatch();

    const handleConfirmClick = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/products/${productId}`, {
                method: 'DELETE'
            });

            if (response.status === 204) {
                window.location.reload();
            }
        } catch (err: unknown) {
            alert(err);
        } finally {
            dispatch(confirmResultAction(false));
            dispatch(modalConfirmIsCloseAction());
        }
    };

    const handleCancelClick = () => {
        console.log('Cancelling modal')
        dispatch(confirmResultAction(false));
        dispatch(modalConfirmIsCloseAction());
    }

    return (
        <Modal show={!!showModal} setShow={() => { }} >
            <ModalHeader>
                <h2>{textHeader}</h2>
            </ModalHeader>
            <ModalBody>
                <p style={{ textAlign: 'justify' }}>
                    {textAlert}
                </p>
            </ModalBody>
            <ModalFooter>
                <div>
                    <button onClick={handleCancelClick}>
                        Cancelar
                    </button>
                    <button onClick={handleConfirmClick}>
                        Confirmar
                    </button>
                </div>
            </ModalFooter>
        </Modal >
    );
}



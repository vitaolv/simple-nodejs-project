import { RootState } from '../../store';
import Modal, { ModalBody, ModalFooter, ModalHeader } from './util/ModalUtils';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { confirmResultAction, modalConfirmIsCloseAction } from '../../store/actions/modalConfirmAction';

interface TypesModalConfirmToUpdateComponent {
    readonly textAlert: string;
    readonly textHeader: string;
    readonly productId: string;
}

export function ModalConfirmToUpdateComponent({ textAlert, textHeader, productId }: TypesModalConfirmToUpdateComponent) {
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
        dispatch(confirmResultAction(false));
        dispatch(modalConfirmIsCloseAction());
    }

    return (
        <Modal show={!!showModal} setShow={() => { }} >
            <ModalHeader>
                <h2>{textHeader}</h2>
            </ModalHeader>
            <ModalBody>
                <p>
                    {textAlert}
                </p>
            </ModalBody>
            <ModalFooter>

                <div className='buttonsModalConfirm'>
                    <button className='secondaryButton' onClick={handleCancelClick}>
                        Cancelar
                    </button>
                    <button className='buttonPrimary' onClick={handleConfirmClick}>
                        Confirmar
                    </button>

                </div>
            </ModalFooter>
        </Modal >
    );
}



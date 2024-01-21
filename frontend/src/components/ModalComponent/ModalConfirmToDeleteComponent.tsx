import { RootState } from '../../store';
import Modal, { ModalBody, ModalFooter, ModalHeader } from './util/ModalUtils';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { confirmResultAction, modalConfirmIsCloseAction } from '../../store/actions/modalConfirmAction';
interface TypesModalConfirmToDeleteComponent {
    readonly textAlert: string;
    readonly textHeader: string;
    readonly productId: string;
}

export function ModalConfirmToDeleteComponent({ textAlert, textHeader, productId }: TypesModalConfirmToDeleteComponent) {
    const showModal = useSelector((state: RootState) => state.modalConfirm.modalIsOpen);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleConfirmClick = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/products/${productId}`, {
                method: 'DELETE'
            });

            if (response.status === 204) {
                if (window.location.pathname === '/home') {
                    window.location.reload();
                } else {
                    navigate('/home');
                }
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



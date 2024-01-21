import { useEffect, useRef, ReactNode, FC } from 'react';
import '../styles/modal.sass';

interface ModalProps {
    show: boolean;
    setShow: (show: boolean) => void;
    hideCloseButton?: boolean;
    children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ show, setShow, hideCloseButton, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const clickOutsideContent = (e: MouseEvent) => {
            if (modalRef.current && e.target === modalRef.current) {
                setShow(false);
            }
        };

        window.addEventListener('click', clickOutsideContent);

        return () => {
            window.removeEventListener('click', clickOutsideContent);
        };
    }, [setShow]);

    return (
        <div ref={modalRef} className={`modal ${show ? 'active' : ''}`}>
            <div className="modal__content">
                {!hideCloseButton && (
                    <span onClick={() => setShow(false)} className="modal__close">
                        &times;
                    </span>
                )}
                {children}
            </div>
        </div>
    );
};

interface ModalHeaderProps {
    children?: ReactNode;
}

export const ModalHeader: FC<ModalHeaderProps> = ({ children }) => {
    return <div className="modal__header">{children}</div>;
};

interface ModalBodyProps {
    children?: ReactNode;
}

export const ModalBody: FC<ModalBodyProps> = ({ children }) => {
    return <div className="modal__body">{children}</div>;
};

interface ModalFooterProps {
    children?: ReactNode;
}

export const ModalFooter: FC<ModalFooterProps> = ({ children }) => {
    return <div className="modal__footer">{children}</div>;
};

export default Modal;

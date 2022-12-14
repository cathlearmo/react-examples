import ReactModal from 'react-modal';

import { useModal } from '../context/modalContext';

export const ModalContainer = () => {
    const { modalOpen, modalContent } = useModal();

    return (
        <ReactModal isOpen={modalOpen} ariaHideApp={false}>
        {modalContent}
        </ReactModal>
    );
};

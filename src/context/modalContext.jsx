import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const ModalContext = createContext({});

const ModalProvider = props => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState();

    const openModal = useCallback(content => {
        setModalContent(content);
        setModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    const value = useMemo(
        () => ({
        modalOpen,
        setModalOpen,
        modalContent,
        setModalContent,
        openModal,
        closeModal,
        }),
        [modalOpen, modalContent, closeModal, openModal],
    );

    return <ModalContext.Provider value={value} {...props} />;
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
import React, {
    Component, Children,
} from 'react';
import LightboxTrigger from './lightbox-trigger';
import LightboxOverlay from './lightbox-overlay';

const Modal = ({
    defaultState,
    children,
}) => {
    const [isOpen, setIsOpen] = React.useState(defaultState);
    // TODO: close on outside click
    return (
        <ModalTrigger
            onClick={() => setIsOpen(!isOpen)}
        />
        <ModalOverlay
            state={isOpen}
        >
            {children}
            <Button
                onClick={() => setIsOpen(false)}
            >
                Close
            </Button>
        </ModalOverlay>
    );
}
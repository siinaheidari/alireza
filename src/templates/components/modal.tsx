'use client'

import React, { FC, useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            // Disable scrolling on the body when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scrolling when modal is closed
            document.body.style.overflow = 'auto';
        }

        // Clean up when the component unmounts or isOpen changes
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleClose = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-all duration-1000 z-[9999]"
            onClick={handleClose}
        >
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-md:w-[95%] max-h-[90vh] overflow-x-hidden overflow-y-auto transition-all duration-1000">
                <div className="relative h-full">
                    <button
                        className="absolute top-[-20px] right-[-10px] text-gray-500 text-[30px]"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;

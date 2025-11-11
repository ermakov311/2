'use client';

import { useEffect, useState } from 'react';

interface BottomModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function BottomModal({ isOpen, onClose, children }: BottomModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            setIsVisible(false);
            const timer = setTimeout(() => {
                document.body.style.overflow = 'unset';
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    if (!isOpen && !isVisible) return null;

    return (
        <div className="fixed inset-0 z-50">
            <div
                className="fixed inset-0 bg-black transition-opacity duration-300"
                style={{
                    opacity: isVisible ? 0.5 : 0,
                    transition: 'opacity 300ms ease-in-out'
                }}
                onClick={handleOverlayClick}
            />

            <div
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg max-h-[65vh] overflow-hidden"
                style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 300ms ease-in-out'
                }}
            >
                <div className="flex justify-center pt-3 pb-2 cursor-pointer" onClick={onClose}>
                    <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                </div>

                <div className="overflow-y-auto max-h-[calc(65vh-50px)] flex flex-col items-center">
                    {children}
                </div>
            </div>
        </div>
    );
}
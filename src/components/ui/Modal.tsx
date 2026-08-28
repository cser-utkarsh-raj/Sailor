'use client';

import { motion, AnimatePresence } from 'motion/react';
import { ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-navy-900/40 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`
              fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              ${sizeStyles[size]} w-[calc(100%-2rem)]
              bg-white rounded-3xl shadow-xl
              z-50 overflow-hidden
            `}
          >
            {title && (
              <div className="flex items-center justify-between px-6 pt-6 pb-2">
                <h3 className="text-lg font-heading font-bold text-navy-900">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-ocean-50 transition-colors text-navy-500 hover:text-navy-700 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
            )}
            <div className={title ? 'px-6 pb-6 pt-2' : 'p-6'}>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

'use client';

import { useState } from 'react';
import { UserX } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';

interface BlockConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  sailorName: string;
}

export default function BlockConfirmation({
  isOpen,
  onClose,
  onConfirm,
  sailorName,
}: BlockConfirmationProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirm = async () => {
    setIsProcessing(true);
    try {
      await onConfirm();
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Block Sailor" size="sm">
      <div className="space-y-4">
        {/* Warning Icon & Prompt */}
        <div className="flex items-start gap-3 p-3 rounded-2xl bg-danger-50 border border-danger-100">
          <div className="p-2 rounded-xl bg-danger-100 text-danger-600 shrink-0">
            <UserX size={20} />
          </div>
          <div className="space-y-1 text-left">
            <p className="text-sm font-semibold text-navy-900">
              Are you sure you want to block {sailorName}?
            </p>
            <p className="text-xs text-navy-600 leading-relaxed">
              You won&apos;t be matched with them again and they won&apos;t be able to send you bottles.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2 pt-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClose}
            disabled={isProcessing}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="danger"
            size="sm"
            onClick={handleConfirm}
            disabled={isProcessing}
            className="w-full sm:w-auto"
          >
            {isProcessing ? 'Blocking...' : 'Block'}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

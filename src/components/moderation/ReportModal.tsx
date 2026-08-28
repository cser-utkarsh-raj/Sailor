'use client';

import { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Input';
import { reportService } from '@/lib/services/reports';
import { ReportReason } from '@/types';
import { useSailor } from '@/lib/store/sailor-context';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportedSailorName: string;
  reportedUserId: string;
  voyageId: string | null;
}

interface ReasonOption {
  value: ReportReason;
  label: string;
}

const REPORT_REASONS: ReasonOption[] = [
  { value: 'harassment', label: 'Harassment' },
  { value: 'spam', label: 'Spam' },
  { value: 'inappropriate_content', label: 'Inappropriate Content' },
  { value: 'threatening_behavior', label: 'Threatening Behavior' },
  { value: 'hate_speech', label: 'Hate Speech' },
  { value: 'other', label: 'Other' },
];

export default function ReportModal({
  isOpen,
  onClose,
  reportedSailorName,
  reportedUserId,
  voyageId,
}: ReportModalProps) {
  let currentUser: { id: string } | null = null;
  try {
    const sailor = useSailor();
    currentUser = sailor.currentUser;
  } catch {
    currentUser = null;
  }

  const [selectedReason, setSelectedReason] = useState<ReportReason>('harassment');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedReason('harassment');
      setDescription('');
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;

    setIsSubmitting(true);
    try {
      const reporterId = currentUser?.id ?? 'current-user';
      await reportService.submitReport(
        reporterId,
        reportedUserId,
        selectedReason,
        description.trim(),
        voyageId
      );

      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Failed to submit report:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Report Sailor" size="md">
      {isSubmitted ? (
        <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-seafoam-50 flex items-center justify-center text-seafoam-500">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="text-lg font-heading font-bold text-navy-900">
            Report Submitted
          </h4>
          <p className="text-sm text-navy-600 max-w-xs">
            Report submitted. Thank you for keeping Sailor safe.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Warning text */}
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-ocean-50 border border-ocean-100">
            <ShieldAlert size={18} className="text-coral-500 shrink-0 mt-0.5" />
            <div className="text-sm text-navy-600">
              <p>
                Reports help keep Sailor safe for everyone.{' '}
                {reportedSailorName && (
                  <span>
                    Reporting <span className="font-semibold text-navy-800">{reportedSailorName}</span>.
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Reason Selection */}
          <div>
            <label className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2">
              Reason for report
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {REPORT_REASONS.map((reason) => {
                const isSelected = selectedReason === reason.value;
                return (
                  <div
                    key={reason.value}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedReason(reason.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedReason(reason.value);
                      }
                    }}
                    className={`
                      flex items-center justify-between p-3 rounded-xl text-left
                      border-2 transition-all duration-200 cursor-pointer select-none
                      ${
                        isSelected
                          ? 'border-ocean-500 bg-ocean-50 text-ocean-900 shadow-xs'
                          : 'border-ocean-100 bg-white text-navy-700 hover:border-ocean-200 hover:bg-ocean-50/40'
                      }
                    `}
                  >
                    <span className="text-sm font-medium">{reason.label}</span>
                    <span
                      className={`
                        w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ml-2
                        ${
                          isSelected
                            ? 'border-ocean-500 bg-ocean-500'
                            : 'border-navy-300 bg-white'
                        }
                      `}
                    >
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description textarea */}
          <div>
            <Textarea
              label="Tell us more (optional)"
              placeholder="Describe what happened..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          {/* Note */}
          <p className="text-xs text-navy-400 italic">
            Duplicate and false reports are reviewed by our team.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onClose}
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Report'}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}

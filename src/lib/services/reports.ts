import { Report, ReportReason } from '@/types';

export const reportService = {
  async submitReport(
    reporterId: string,
    reportedUserId: string,
    reason: ReportReason,
    description: string,
    voyageId: string | null
  ): Promise<Report> {
    const report: Report = {
      id: `report-${Date.now()}`,
      reporterId,
      reportedUserId,
      voyageId,
      reason,
      description,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };
    return report;
  },

  async blockUser(userId: string, blockedUserId: string): Promise<void> {
    // Would add to blocked users list in Firebase
    console.log(`User ${userId} blocked ${blockedUserId}`);
  },
};

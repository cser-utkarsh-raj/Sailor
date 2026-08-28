import { Bottle } from '@/types';
import { mockBottles } from '@/lib/mock-data/bottles';

export const bottleService = {
  async getBottles(userId: string): Promise<Bottle[]> {
    return mockBottles.filter((b) => b.recipientId === userId);
  },

  async sendBottle(senderId: string, senderFlag: string, recipientId: string, message: string): Promise<Bottle> {
    const bottle: Bottle = {
      id: `bottle-${Date.now()}`,
      senderId,
      senderCountryFlag: senderFlag,
      recipientId,
      message,
      status: 'unread',
      sentAt: new Date().toISOString(),
      readAt: null,
      repliedAt: null,
    };
    return bottle;
  },

  async markAsRead(bottleId: string): Promise<void> {
    const bottle = mockBottles.find((b) => b.id === bottleId);
    if (bottle) {
      bottle.status = 'read';
      bottle.readAt = new Date().toISOString();
    }
  },

  async replyToBottle(bottleId: string): Promise<void> {
    const bottle = mockBottles.find((b) => b.id === bottleId);
    if (bottle) {
      bottle.status = 'replied';
      bottle.repliedAt = new Date().toISOString();
    }
  },

  async ignoreBottle(bottleId: string): Promise<void> {
    const bottle = mockBottles.find((b) => b.id === bottleId);
    if (bottle) {
      bottle.status = 'ignored';
    }
  },
};

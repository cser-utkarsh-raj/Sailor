import { Message } from '@/types';
import { getNextMockResponse } from '@/lib/mock-data/messages';

let messageCounter = 0;

export const messageService = {
  async sendMessage(conversationId: string, senderId: string, content: string): Promise<Message> {
    messageCounter++;
    return {
      id: `msg-${Date.now()}-${messageCounter}`,
      conversationId,
      senderId,
      content,
      type: 'text',
      sentAt: new Date().toISOString(),
    };
  },

  async getMockReply(conversationId: string, sailorId: string, replyIndex: number): Promise<Message> {
    messageCounter++;
    const content = getNextMockResponse(sailorId, replyIndex);
    return {
      id: `msg-${Date.now()}-${messageCounter}`,
      conversationId,
      senderId: sailorId,
      content,
      type: 'text',
      sentAt: new Date().toISOString(),
    };
  },

  async getMessages(conversationId: string): Promise<Message[]> {
    return [];
  },
};

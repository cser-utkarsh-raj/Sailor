import { Voyage, VoyageParticipant, SailorProfile } from '@/types';
import { mockSailors } from '@/lib/mock-data/sailors';
import { conversationStarters } from '@/lib/mock-data/messages';

export const voyageService = {
  async startRandomVoyage(userId: string): Promise<Voyage> {
    const randomSailor = mockSailors[Math.floor(Math.random() * mockSailors.length)];
    const voyage: Voyage = {
      id: `voyage-${Date.now()}`,
      type: 'random',
      status: 'searching',
      islandId: null,
      participants: [
        {
          userId,
          sailorProfile: {} as SailorProfile,
          joinedAt: new Date().toISOString(),
          leftAt: null,
        },
      ],
      conversationId: null,
      startedAt: new Date().toISOString(),
      endedAt: null,
    };
    return voyage;
  },

  async startIslandVoyage(userId: string, islandId: string): Promise<Voyage> {
    const voyage: Voyage = {
      id: `voyage-${Date.now()}`,
      type: 'island',
      status: 'searching',
      islandId,
      participants: [
        {
          userId,
          sailorProfile: {} as SailorProfile,
          joinedAt: new Date().toISOString(),
          leftAt: null,
        },
      ],
      conversationId: null,
      startedAt: new Date().toISOString(),
      endedAt: null,
    };
    return voyage;
  },

  async findMatch(voyageId: string): Promise<SailorProfile> {
    // Simulate finding a random match
    const randomIndex = Math.floor(Math.random() * mockSailors.length);
    return mockSailors[randomIndex];
  },

  async endVoyage(voyageId: string): Promise<void> {
    // Would update voyage status in Firebase
  },

  getRandomStarter(): string {
    const index = Math.floor(Math.random() * conversationStarters.length);
    return conversationStarters[index].prompt;
  },
};

import { Island } from '@/types';
import { mockIslands } from '@/lib/mock-data/islands';

export const islandService = {
  async getIslands(): Promise<Island[]> {
    return mockIslands;
  },

  async getIsland(islandId: string): Promise<Island | null> {
    return mockIslands.find((i) => i.id === islandId) || null;
  },

  async getActiveSailorCount(islandId: string): Promise<number> {
    const island = mockIslands.find((i) => i.id === islandId);
    return island?.activeSailors || 0;
  },

  async joinIsland(islandId: string, userId: string): Promise<void> {
    // Would create IslandMember in Firebase
  },

  async leaveIsland(islandId: string, userId: string): Promise<void> {
    // Would remove IslandMember in Firebase
  },
};

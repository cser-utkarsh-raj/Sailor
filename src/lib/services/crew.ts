import { CrewMember, SailorProfile } from '@/types';
import { mockSailors } from '@/lib/mock-data/sailors';

const mockCrew: CrewMember[] = [
  {
    id: 'crew-001',
    sailorProfile: mockSailors[0], // Luna
    addedAt: '2026-08-27T12:30:00Z',
    metOn: 'Random Waters',
    voyageId: 'v-001',
  },
  {
    id: 'crew-002',
    sailorProfile: mockSailors[1], // Mika
    addedAt: '2026-08-26T18:30:00Z',
    metOn: 'Music Island',
    voyageId: 'v-002',
  },
  {
    id: 'crew-003',
    sailorProfile: mockSailors[2], // Alex
    addedAt: '2026-08-25T15:30:00Z',
    metOn: 'Random Waters',
    voyageId: 'v-003',
  },
];

export const crewService = {
  async getCrew(userId: string): Promise<CrewMember[]> {
    return mockCrew;
  },

  async addCrewMember(userId: string, sailorProfile: SailorProfile, metOn: string, voyageId: string): Promise<CrewMember> {
    const member: CrewMember = {
      id: `crew-${Date.now()}`,
      sailorProfile,
      addedAt: new Date().toISOString(),
      metOn,
      voyageId,
    };
    mockCrew.push(member);
    return member;
  },

  async removeCrewMember(crewMemberId: string): Promise<void> {
    const index = mockCrew.findIndex((m) => m.id === crewMemberId);
    if (index !== -1) {
      mockCrew.splice(index, 1);
    }
  },
};

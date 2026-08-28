import { User, SailorProfile } from '@/types';
import { currentUserProfile } from '@/lib/mock-data/sailors';

// Mock auth service — will be replaced with Firebase Auth

let currentUser: User | null = null;

export const authService = {
  async signUp(email: string, password: string): Promise<User> {
    const user: User = {
      id: 'current-user',
      email,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
      moderationStatus: 'normal',
    };
    currentUser = user;
    return user;
  },

  async signIn(email: string, password: string): Promise<User> {
    const user: User = {
      id: 'current-user',
      email,
      createdAt: '2026-08-01T10:00:00Z',
      lastLoginAt: new Date().toISOString(),
      moderationStatus: 'normal',
    };
    currentUser = user;
    return user;
  },

  async signOut(): Promise<void> {
    currentUser = null;
  },

  getCurrentUser(): User | null {
    return currentUser;
  },

  async createAnonymousUser(): Promise<User> {
    const user: User = {
      id: `sailor-${Date.now()}`,
      email: null,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
      moderationStatus: 'normal',
    };
    currentUser = user;
    return user;
  },
};

export const profileService = {
  async createProfile(profile: Omit<SailorProfile, 'createdAt'>): Promise<SailorProfile> {
    return {
      ...profile,
      createdAt: new Date().toISOString(),
    };
  },

  async getProfile(userId: string): Promise<SailorProfile | null> {
    if (userId === 'current-user') {
      return currentUserProfile;
    }
    return null;
  },

  async updateProfile(userId: string, updates: Partial<SailorProfile>): Promise<SailorProfile> {
    return {
      ...currentUserProfile,
      ...updates,
    };
  },
};

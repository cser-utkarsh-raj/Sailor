'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import {
  User,
  SailorProfile,
  CrewMember,
  VoyageHistoryEntry,
  Bottle,
  Voyage,
  Achievement,
} from '@/types';
import { currentUserProfile, mockSailors } from '@/lib/mock-data/sailors';
import { mockBottles } from '@/lib/mock-data/bottles';
import { achievementDefinitions, mockVoyageHistory } from '@/lib/mock-data/achievements';

interface SailorContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  currentProfile: SailorProfile | null;
  setCurrentProfile: (profile: SailorProfile | null) => void;
  crew: CrewMember[];
  setCrew: React.Dispatch<React.SetStateAction<CrewMember[]>>;
  addCrewMember: (sailor: SailorProfile, metOn: string) => void;
  voyageHistory: VoyageHistoryEntry[];
  setVoyageHistory: React.Dispatch<React.SetStateAction<VoyageHistoryEntry[]>>;
  bottles: Bottle[];
  setBottles: React.Dispatch<React.SetStateAction<Bottle[]>>;
  currentVoyage: Voyage | null;
  setCurrentVoyage: (voyage: Voyage | null) => void;
  achievements: Achievement[];
  setAchievements: React.Dispatch<React.SetStateAction<Achievement[]>>;
  isOnboarded: boolean;
  setIsOnboarded: (onboarded: boolean) => void;
  activeSailorsCount: number;
}

const SailorContext = createContext<SailorContextType | null>(null);

export function SailorProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>({
    id: 'current-user',
    email: null,
    createdAt: '2026-08-27T10:00:00Z',
    lastLoginAt: new Date().toISOString(),
    moderationStatus: 'normal',
  });
  const [currentProfile, setCurrentProfile] = useState<SailorProfile | null>(currentUserProfile);
  const [crew, setCrew] = useState<CrewMember[]>([
    {
      id: 'crew-001',
      sailorProfile: mockSailors[0],
      addedAt: '2026-08-27T12:30:00Z',
      metOn: 'Random Waters',
      voyageId: 'v-001',
    },
    {
      id: 'crew-002',
      sailorProfile: mockSailors[1],
      addedAt: '2026-08-26T18:30:00Z',
      metOn: 'Music Island',
      voyageId: 'v-002',
    },
    {
      id: 'crew-003',
      sailorProfile: mockSailors[2],
      addedAt: '2026-08-25T15:30:00Z',
      metOn: 'Random Waters',
      voyageId: 'v-003',
    },
  ]);
  const [voyageHistory, setVoyageHistory] = useState<VoyageHistoryEntry[]>(mockVoyageHistory);
  const [bottles, setBottles] = useState<Bottle[]>(mockBottles);
  const [currentVoyage, setCurrentVoyage] = useState<Voyage | null>(null);
  const [achievements, setAchievements] = useState<Achievement[]>(achievementDefinitions);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedOnboarded = localStorage.getItem('sailor_isOnboarded');
      if (storedOnboarded === 'true') {
        setIsOnboarded(true);
      }
      const storedProfile = localStorage.getItem('sailor_currentProfile');
      if (storedProfile) {
        try { setCurrentProfile(JSON.parse(storedProfile)); } catch(e) {}
      }
      const storedUser = localStorage.getItem('sailor_currentUser');
      if (storedUser) {
        try { setCurrentUser(JSON.parse(storedUser)); } catch(e) {}
      }
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (isOnboarded) {
        localStorage.setItem('sailor_isOnboarded', 'true');
      } else {
        localStorage.removeItem('sailor_isOnboarded');
      }
    }
  }, [isOnboarded, isLoaded]);

  useEffect(() => {
    if (isLoaded && currentProfile) {
      localStorage.setItem('sailor_currentProfile', JSON.stringify(currentProfile));
    }
  }, [currentProfile, isLoaded]);

  useEffect(() => {
    if (isLoaded && currentUser) {
      localStorage.setItem('sailor_currentUser', JSON.stringify(currentUser));
    }
  }, [currentUser, isLoaded]);

  const addCrewMember = useCallback((sailor: SailorProfile, metOn: string) => {
    const newMember: CrewMember = {
      id: `crew-${Date.now()}`,
      sailorProfile: sailor,
      addedAt: new Date().toISOString(),
      metOn,
      voyageId: `v-${Date.now()}`,
    };
    setCrew((prev) => [...prev, newMember]);
  }, []);

  const activeSailorsCount = 184 + Math.floor(Math.random() * 50);

  return (
    <SailorContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentProfile,
        setCurrentProfile,
        crew,
        setCrew,
        addCrewMember,
        voyageHistory,
        setVoyageHistory,
        bottles,
        setBottles,
        currentVoyage,
        setCurrentVoyage,
        achievements,
        setAchievements,
        isOnboarded,
        setIsOnboarded,
        activeSailorsCount,
      }}
    >
      {children}
    </SailorContext.Provider>
  );
}

export function useSailor(): SailorContextType {
  const context = useContext(SailorContext);
  if (!context) {
    throw new Error('useSailor must be used within a SailorProvider');
  }
  return context;
}

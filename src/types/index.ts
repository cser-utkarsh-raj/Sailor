// ============================================================
// SAILOR — Core TypeScript Types
// ============================================================

// --- User & Profile ---

export interface User {
  id: string;
  email: string | null;
  createdAt: string;
  lastLoginAt: string;
  moderationStatus: ModerationStatus;
}

export interface SailorProfile {
  userId: string;
  sailorName: string;
  country: string;
  countryFlag: string;
  gender?: string;
  title?: string;
  titleFlag?: string;
  languages: string[];
  interests: string[];
  bio: string;
  conversationPreferences: ConversationPreference[];
  isAnonymous: boolean;
  avatarColor: string;
  createdAt: string;
}

export type ConversationPreference =
  | 'casual'
  | 'deep'
  | 'funny'
  | 'philosophical'
  | 'creative'
  | 'supportive';

// --- Voyage ---

export interface Voyage {
  id: string;
  type: VoyageType;
  status: VoyageStatus;
  islandId: string | null;
  participants: VoyageParticipant[];
  conversationId: string | null;
  startedAt: string;
  endedAt: string | null;
}

export type VoyageType = 'random' | 'island';

export type VoyageStatus =
  | 'searching'
  | 'matched'
  | 'active'
  | 'completed'
  | 'abandoned';

export interface VoyageParticipant {
  userId: string;
  sailorProfile: SailorProfile;
  joinedAt: string;
  leftAt: string | null;
}

// --- Conversation & Messages ---

export interface Conversation {
  id: string;
  voyageId: string;
  participants: string[];
  starterPrompt: string;
  messages: Message[];
  startedAt: string;
  endedAt: string | null;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  type: MessageType;
  sentAt: string;
}

export type MessageType = 'text' | 'prompt' | 'system';

// --- Island ---

export interface Island {
  id: string;
  name: string;
  emoji: string;
  theme: string;
  description: string;
  longDescription: string;
  activeSailors: number;
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface IslandMember {
  islandId: string;
  userId: string;
  joinedAt: string;
}

// --- Crew ---

export interface CrewMember {
  id: string;
  sailorProfile: SailorProfile;
  addedAt: string;
  metOn: string; // island name or "Random Waters"
  voyageId: string;
}

// --- Bottle ---

export interface Bottle {
  id: string;
  senderId: string;
  senderCountryFlag: string;
  recipientId: string;
  message: string;
  status: BottleStatus;
  sentAt: string;
  readAt: string | null;
  repliedAt: string | null;
}

export type BottleStatus = 'unread' | 'read' | 'replied' | 'ignored' | 'blocked';

// --- Report & Moderation ---

export interface Report {
  id: string;
  reporterId: string;
  reportedUserId: string;
  voyageId: string | null;
  reason: ReportReason;
  description: string;
  createdAt: string;
  status: ReportStatus;
}

export type ReportReason =
  | 'harassment'
  | 'spam'
  | 'inappropriate_content'
  | 'threatening_behavior'
  | 'hate_speech'
  | 'other';

export type ReportStatus = 'pending' | 'reviewed' | 'actioned' | 'dismissed';

export interface ModerationEvent {
  id: string;
  userId: string;
  action: ModerationAction;
  reason: string;
  createdAt: string;
  expiresAt: string | null;
}

export type ModerationAction =
  | 'warning'
  | 'restriction'
  | 'pirate_mark'
  | 'suspension'
  | 'ban';

export type ModerationStatus =
  | 'normal'
  | 'warned'
  | 'restricted'
  | 'pirate'
  | 'suspended'
  | 'banned';

// --- Voyage History & Achievement ---

export interface VoyageHistoryEntry {
  id: string;
  voyageId: string;
  type: VoyageType;
  islandName: string | null;
  metSailorName: string;
  metSailorCountry: string;
  metSailorFlag: string;
  broughtAboard: boolean;
  date: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  emoji: string;
  category: AchievementCategory;
  requirement: string;
  unlockedAt: string | null;
}

export type AchievementCategory =
  | 'voyage'
  | 'crew'
  | 'island'
  | 'bottle'
  | 'world'
  | 'special';

// --- App State ---

export interface SailorAppState {
  currentUser: User | null;
  currentProfile: SailorProfile | null;
  crew: CrewMember[];
  voyageHistory: VoyageHistoryEntry[];
  bottles: Bottle[];
  currentVoyage: Voyage | null;
  achievements: Achievement[];
  isOnboarded: boolean;
}

// --- Conversation Starters ---

export interface ConversationStarter {
  id: string;
  prompt: string;
  category: string;
}

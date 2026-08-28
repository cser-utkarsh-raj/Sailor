import { ConversationStarter, Message } from '@/types';

export const conversationStarters: ConversationStarter[] = [
  {
    id: 'starter-1',
    prompt: 'What\'s something you\'ve been thinking about lately?',
    category: 'reflective',
  },
  {
    id: 'starter-2',
    prompt: 'What\'s something you\'re excited about?',
    category: 'positive',
  },
  {
    id: 'starter-3',
    prompt: 'What\'s the last song you loved?',
    category: 'music',
  },
  {
    id: 'starter-4',
    prompt: 'If you could travel anywhere tomorrow, where would you go?',
    category: 'travel',
  },
  {
    id: 'starter-5',
    prompt: 'What\'s something people often misunderstand about you?',
    category: 'deep',
  },
  {
    id: 'starter-6',
    prompt: 'What is a tiny thing that made you happy recently?',
    category: 'positive',
  },
  {
    id: 'starter-7',
    prompt: 'What\'s a skill you wish you had?',
    category: 'aspirational',
  },
  {
    id: 'starter-8',
    prompt: 'What\'s the most interesting thing you\'ve learned this week?',
    category: 'curiosity',
  },
];

export const mockChatResponses: Record<string, string[]> = {
  'sailor-001': [
    'Oh, that\'s interesting! I\'ve been thinking about something similar lately.',
    'In Japan, we have this concept called "mono no aware" — the beauty of impermanence. It reminds me of conversations like these.',
    'I actually got into that because of a random postcard I found in a secondhand bookshop in Tokyo.',
    'What about you? Is there something you keep coming back to?',
    'That\'s really cool. I think the best connections happen when people are genuinely curious about each other.',
    'I love nights like these where you can just talk freely.',
    'Have you ever felt like a conversation changed the way you see something?',
  ],
  'sailor-002': [
    'Haha, nice! That sounds amazing.',
    'Here in Finland we have this thing called sisu — it\'s like grit, but more stubborn.',
    'I was just playing this indie game called Celeste. It\'s about climbing a mountain but also about anxiety? Really good.',
    'Coffee number four today. ☕ Don\'t judge.',
    'What games are you into? I\'m always looking for recommendations.',
    'The northern lights were out last night. I never get tired of them.',
    'That reminds me of something funny that happened last week...',
  ],
  'sailor-003': [
    'Hey, that\'s awesome!',
    'I was just thinking about that the other day actually.',
    'Here in Brazil, we say "saudade" for that feeling of missing something you\'ve never had. Beautiful word.',
    'You know what, I think we\'d get along well in real life too.',
    'Tell me more about that!',
    'I\'ve been trying to learn how to make the perfect brigadeiro. It\'s harder than it sounds.',
    'Music is universal, isn\'t it? What are you listening to right now?',
  ],
};

export function getMockMessages(sailorId: string, starterPrompt: string): Message[] {
  const responses = mockChatResponses[sailorId] || mockChatResponses['sailor-001'] || [];
  const baseTime = new Date();

  return [
    {
      id: 'msg-system-1',
      conversationId: 'conv-1',
      senderId: 'system',
      content: starterPrompt,
      type: 'prompt',
      sentAt: new Date(baseTime.getTime() - 300000).toISOString(),
    },
    {
      id: 'msg-other-1',
      conversationId: 'conv-1',
      senderId: sailorId,
      content: responses[0] || 'Hey there! 👋',
      type: 'text',
      sentAt: new Date(baseTime.getTime() - 240000).toISOString(),
    },
  ];
}

export function getNextMockResponse(sailorId: string, messageIndex: number): string {
  const responses = mockChatResponses[sailorId] || mockChatResponses['sailor-001'] || [];
  return responses[messageIndex % responses.length] || 'That\'s really interesting, tell me more!';
}

# 🌊 SAILOR — Product Vision & Development Phases

> **Core principle:** Shore → Sea → People → Conversation → Crew
> **There is no "finish." You don't complete Sailor. You don't beat Sailor.**

---

## Product Vocabulary

| Symbol | Name | Meaning |
|--------|------|---------|
| 🏖️ | **Shore** | "I'm new / I'm home." |
| 🌊 | **Sea** | "What's happening?" |
| 🧭 | **Voyage** | "I want to meet someone." |
| 🏝️ | **Island** | "I want to find people who like this." |
| 📨 | **Bottle** | "I want to reach someone asynchronously." |
| 👀 | **Peek** | "I'm curious about who's around." |
| 💬 | **Conversation** | "I met someone." |
| ⚓ | **Crew** | "I want to keep them." |
| 🗺️ | **Map / Log** | "This is what I've experienced." |

---

## Release Plan

### Sailor 0.1 — Shore → First Conversation
Shore, onboarding, identity, Sea, Random Voyage, Match, Chat, Leave, Block/report mock, basic Crew.
> *Can a stranger join Sailor and have a good conversation?*

### Sailor 0.2 — The Social Ocean
Firebase, real accounts, real-time chat, real matching, real Crew, Islands, Bottles, Peek-a-boo, presence, basic safety.
> *Can real people use this together?*

### Sailor 0.3 — The World
Map, Captain's Log, richer Islands, voyage history, better discovery, events, improved moderation, Pirate system, notifications, polished animation.
> *Does Sailor feel like a place rather than an app?*

### Sailor 1.0 — The Network
Advanced matching, community ecosystem, sophisticated anti-bot, moderation infrastructure, retention, mobile/PWA, monetization, scalability.
> *Can this become the flagship product of .dot?*

---

## Product Journey Flow

```
🏖️ SHORE
   │ "I'm new here."
   ▼
👤 CREATE SAILOR
   │ "Let's see what's out there."
   ▼
🌊 SEA
   ├──────────────┬──────────────┐
   ▼              ▼              ▼
🌊 VOYAGE     🏝️ ISLAND      📨 BOTTLE
   │              │              │
   └──────────────┼──────────────┘
                  ▼
               💬 TALK
                  │
           ┌──────┴──────┐
           ▼              ▼
         LEAVE         ⚓ ABOARD
                         │
                         ▼
                       🫂 CREW
                         │
                         ▼
                    🗺️ JOURNEY
                         │
                         ▼
                     🌊 SEA → SAIL AGAIN
```

---

## Anti-patterns (DO NOT BUILD)

- Daily streak pressure / XP grinding
- "Come back or lose your streak"
- Follower counts / popularity rankings
- Pay to talk to humans
- Giant tutorials / lore dumps
- Complicated server hierarchies (Islands ≠ Discord)
- Automatic ban counters (report severity matters)
- Game completion mechanics

## Retention comes from:
> **people + curiosity + community** — not addiction mechanics.

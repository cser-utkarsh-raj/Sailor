# 🏗️ SAILOR — Backend Architecture & Data Model

Since Supabase is out, we are using **Firebase** for our backend. Firebase is battle-tested, handles real-time data seamlessly (crucial for chat), and integrates perfectly with Next.js hosted on Vercel.

## 1. The Tech Stack
*   **Frontend:** Next.js (React), Tailwind CSS, Framer Motion
*   **Hosting:** Vercel (Edge network)
*   **Database:** Firebase Firestore (NoSQL Document DB)
*   **Real-time / Presence:** Firebase Realtime Database (for "User is typing..." and online/offline status)
*   **Backend Logic:** Firebase Cloud Functions (for the matching algorithm and moderation)

---

## 2. Core Data Models (Firestore Collections)

### `sailors` (Users)
Stores the user's identity and preferences.
```json
{
  "id": "user_123",
  "name": "Luna",
  "country": "Japan",
  "flag": "🇯🇵",
  "languages": ["English", "Japanese"],
  "interests": ["Music", "Night Owl"],
  "isAnonymous": false,
  "createdAt": "timestamp"
}
```

### `matching_queue` (Ephemeral)
When a user hits "Set Sail", they are temporarily added here. A Cloud Function watches this collection, pairs two users based on language/interests, creates a `voyage`, and deletes them from the queue.
```json
{
  "userId": "user_123",
  "joinedAt": "timestamp",
  "languages": ["English"],
  "status": "searching"
}
```

### `voyages` (Active Conversations)
Represents a chat session between two or more sailors.
```json
{
  "id": "voyage_abc",
  "participants": ["user_123", "user_456"],
  "type": "random", // or "island"
  "status": "active", // active, ended
  "startedAt": "timestamp"
}
```

### `messages` (Sub-collection under `voyages`)
The actual chat messages. **Crucial Privacy Feature:** When a voyage ends, a Cloud Function automatically deletes this sub-collection unless both users choose to "Bring Aboard".
```json
{
  "senderId": "user_123",
  "text": "Ahoy there!",
  "timestamp": "timestamp"
}
```

### `crew` (Connections)
When two users mutually agree to save their connection.
```json
{
  "id": "crew_xyz",
  "sailors": ["user_123", "user_456"],
  "metAt": "timestamp",
  "origin": "Music Island" // Where they met
}
```

---

## 3. The Core Loops

### A. The Matching Loop
1. User clicks "Set Sail" -> UI shows Bobbing Boat.
2. App writes user ID to `matching_queue`.
3. Firebase Cloud Function detects new entry -> finds a match -> creates a `voyage` document.
4. App listens to changes on the user's queue document. Once it sees a `voyageId`, it redirects the user to `/voyage/[voyageId]`.

### B. The Real-time Chat Loop
1. User types a message.
2. Message is written to `voyages/[voyageId]/messages`.
3. The UI uses Firebase `onSnapshot` to instantly render incoming messages to the other user without refreshing.
4. Typing indicators are handled via Firebase Realtime Database (which is faster and cheaper for high-frequency small updates than Firestore).

### C. The Ephemeral Cleanup Loop
1. User clicks "Leave Voyage".
2. Status of `voyage` is set to `ended`.
3. A scheduled Cloud Function sweeps the database daily, permanently deleting any `messages` inside `ended` voyages. No permanent chat history.

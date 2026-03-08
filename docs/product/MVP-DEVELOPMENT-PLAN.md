# Bloom MVP Development Plan

## Vision
Bloom is an AI-powered pregnancy companion app for couples in Sweden.
Target: 25-35 year old Swedish couples expecting their first child.

## MVP Scope (Phase 1 - 8 Weeks)

### Core Features

#### 1. Authentication & Onboarding
- Email + password signup/login via Supabase Auth
- Google and Apple social login
- Onboarding flow: due date, first/second parent role, partner invite
- Language: Swedish (primary), English (secondary)

#### 2. Pregnancy Week Tracker (Home Screen)
- Current week display with progress visualization
- Days remaining countdown
- Baby size comparison (fruit/vegetable metaphor)
- Week-by-week baby development summary
- Week-by-week body changes for the pregnant parent

#### 3. Partner Sync
- Invite partner via link or email
- Both partners see same pregnancy data
- Partner-specific content (tips for the supporting partner)
- Shared timeline and milestones

#### 4. Weekly Content
- Health tips per week (curated, medically reviewed)
- Nutrition advice per trimester
- Exercise recommendations per trimester
- Checklist items per week (doctor visits, preparations)

#### 5. Profile & Settings
- User profile (name, photo, due date)
- Notification preferences
- Language toggle (SV/EN)
- Data export (GDPR requirement)
- Account deletion (GDPR requirement)

### NOT in MVP (Phase 2+)
- Community/social features
- AI chat assistant
- Photo journal/bump tracker
- Premium subscription
- Push notifications (basic only in MVP)
- Doctor appointment integration

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React Native + Expo | Cross-platform mobile app |
| Backend | Supabase | Auth, Database, Storage, Realtime |
| Database | PostgreSQL (via Supabase) | All app data |
| AI | Anthropic Claude API | Content generation |
| Automation | n8n | Department workflows |
| Hosting | Hostinger VPS | n8n + automation |
| Repo | GitHub | Code + docs |

## Database Schema (Supabase)

### Table: profiles
- id (uuid, FK to auth.users)
- full_name (text)
- avatar_url (text, nullable)
- role (text: 'pregnant_parent' or 'partner')
- language (text: 'sv' or 'en', default 'sv')
- created_at (timestamptz)
- updated_at (timestamptz)

### Table: pregnancies
- id (uuid, PK)
- due_date (date)
- created_by (uuid, FK to profiles)
- partner_id (uuid, FK to profiles, nullable)
- invite_code (text, unique)
- status (text: 'active', 'completed', 'archived')
- created_at (timestamptz)

### Table: weekly_content
- id (uuid, PK)
- week_number (int, 1-42)
- content_type (text: 'baby_development', 'body_changes', 'health_tip', 'nutrition', 'exercise', 'checklist')
- title_sv (text)
- title_en (text)
- body_sv (text)
- body_en (text)
- target_role (text: 'all', 'pregnant_parent', 'partner')
- sort_order (int)

### Table: user_checklists
- id (uuid, PK)
- pregnancy_id (uuid, FK to pregnancies)
- user_id (uuid, FK to profiles)
- week_number (int)
- item_title (text)
- is_completed (boolean, default false)
- completed_at (timestamptz, nullable)

### Table: milestones
- id (uuid, PK)
- pregnancy_id (uuid, FK to pregnancies)
- week_number (int)
- title (text)
- description (text, nullable)
- milestone_date (date, nullable)
- created_at (timestamptz)

## Row Level Security (RLS) Rules
- Users can only read/write their own profile
- Users can only access pregnancies they are part of
- Weekly content is readable by all authenticated users
- Checklists are private to each user within a pregnancy
- Milestones are shared within a pregnancy

## API Endpoints (Supabase auto-generates REST)
All via Supabase client SDK - no custom API needed for MVP.

## Screen List (Frontend)

1. **Welcome Screen** - App intro, login/signup buttons
2. **Login Screen** - Email + social login
3. **Signup Screen** - Email + password + name
4. **Onboarding Step 1** - Due date picker
5. **Onboarding Step 2** - Your role (pregnant/partner)
6. **Onboarding Step 3** - Invite partner (skip option)
7. **Home Screen** - Week tracker, baby size, quick stats
8. **Weekly Detail Screen** - Full content for current week
9. **Content Tab** - Browse all weeks, tips, checklists
10. **Checklist Screen** - Weekly to-do items
11. **Partner Screen** - Partner status, shared milestones
12. **Profile Screen** - Settings, language, data, logout
13. **About Screen** - App info, legal links

## Timeline

### Week 1-2: Foundation
- Set up Supabase project and database schema
- Initialize Expo project with navigation
- Implement auth flow (signup, login, logout)
- Create basic UI components and theme

### Week 3-4: Core Features
- Build home screen with week tracker
- Create weekly content display
- Implement partner invite system
- Build profile and settings screens

### Week 5-6: Content & Polish
- Load all 42 weeks of content (Swedish + English)
- Build checklist functionality
- Implement language switching
- UI polish, animations, loading states

### Week 7-8: Testing & Launch Prep
- End-to-end testing
- GDPR compliance verification
- App Store / Google Play preparation
- Beta testing with 5-10 couples
- Marketing landing page live

## Success Metrics
- App loads in under 3 seconds
- Auth flow completes in under 30 seconds
- Partner invite success rate above 70%
- Zero GDPR compliance issues
- Crash-free rate above 99%

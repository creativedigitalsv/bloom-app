# Department Task Assignments - Bloom MVP

## Communication Protocol
- Departments communicate via GitHub (commit messages, issues, PRs)
- Each department pushes work to their designated folder
- No department needs CEO approval for tasks in this document
- If blocked, create a GitHub Issue and tag the blocking department
- Daily: Each department commits their progress to GitHub

## PRODUCT DEPARTMENT
Owner: Product AI Agent | Folder: docs/product/

### Tasks (in order):
1. Review and finalize MVP-DEVELOPMENT-PLAN.md (already created)
2. Write detailed user stories for each screen (docs/product/prd/)
3. Define acceptance criteria for each feature
4. Create user flow diagrams (text-based in markdown)
5. Prioritize backlog if timeline is tight (MoSCoW method)
6. Review frontend screens match the spec

### Delivers to: Design (user flows), Engineering (user stories)
### Depends on: Nothing - can start immediately

---

## DESIGN DEPARTMENT
Owner: Design AI Agent | Folder: design/

### Tasks (in order):
1. Define color palette and typography for Bloom brand
   - Primary: Soft, warm colors (pregnancy/nature theme)
   - Font: Clean, modern, readable (Nunito or similar)
   - Save to design/ui-kit/
2. Create wireframes for all 13 screens (text/markdown descriptions)
3. Define component library (buttons, cards, inputs, navigation)
4. Create icon set requirements list
5. Design onboarding flow illustrations description
6. Review implemented screens match design intent

### Delivers to: Engineering (design specs, component library)
### Depends on: Product (screen list, user flows)

---

## ENGINEERING (handled by n8n + external development)
Folder: src/

### Backend Tasks (Supabase):
1. Create Supabase project (CEO does this - one time setup)
2. Create database tables per schema in MVP plan
3. Set up Row Level Security (RLS) policies
4. Create database functions for:
   - generate_invite_code()
   - get_current_week(due_date)
   - join_pregnancy(invite_code, user_id)
5. Seed weekly_content table with 42 weeks of data (SV + EN)
6. Set up Supabase Auth (email + Google + Apple)
7. Test all database operations

### Frontend Tasks (React Native + Expo):
1. Initialize Expo project: npx create-expo-app bloom-app
2. Set up navigation (React Navigation)
   - Auth stack (Welcome, Login, Signup)
   - Onboarding stack (DueDate, Role, InvitePartner)
   - Main tabs (Home, Content, Checklist, Profile)
3. Install and configure Supabase client
4. Build auth screens (login, signup, logout)
5. Build onboarding flow screens
6. Build home screen with week tracker
7. Build weekly content display
8. Build checklist screen
9. Build partner invite/status screen
10. Build profile and settings screen
11. Implement Swedish/English language switching (i18n)
12. Add loading states and error handling

### Depends on: Product (spec), Design (UI specs)

---

## MARKETING DEPARTMENT
Owner: Marketing AI Agent | Folder: docs/marketing/

### Tasks (in order):
1. Define brand voice and messaging (docs/marketing/brand/)
   - Tone: Warm, supportive, modern, inclusive
   - Key messages: "Together through pregnancy"
   - Swedish language focus
2. Create pre-launch landing page content
   - Headline, subheadline, features list, CTA
   - Email signup for waitlist
3. Write App Store description (Swedish + English)
4. Write Google Play description (Swedish + English)
5. Plan social media strategy (docs/marketing/campaigns/)
   - Instagram (primary channel for target audience)
   - Facebook groups for Swedish parents
6. Create content calendar for first month post-launch
7. Identify 10 Swedish pregnancy/parenting influencers
8. Write press release for launch

### Delivers to: Design (brand guidelines), CX (messaging tone)
### Depends on: Product (feature list for marketing copy)

---

## LEGAL/GDPR DEPARTMENT
Owner: Legal AI Agent | Folder: docs/legal/

### Tasks (in order):
1. Draft Privacy Policy - Swedish (docs/legal/privacy-policy/)
   - GDPR Article 13/14 compliant
   - List all data collected and purposes
   - Data retention periods
   - User rights (access, delete, export, rectify)
   - Swedish DPA (IMY) as supervisory authority
2. Draft Terms of Service - Swedish (docs/legal/terms-of-service/)
3. Draft Cookie Policy (docs/legal/cookie-policy/)
4. Create GDPR compliance checklist
   - Data Processing Agreement with Supabase
   - Data flow documentation
   - Legal basis for each data processing activity
5. Create data subject request procedures
   - How users request data export
   - How users request data deletion
   - Response time requirements (30 days)
6. Review health data handling requirements
   - Pregnancy data is sensitive under GDPR Article 9
   - Explicit consent required
   - Extra security measures needed

### Delivers to: Engineering (privacy requirements), Product (consent flows)
### Depends on: Product (what data is collected)

---

## FINANCE DEPARTMENT
Owner: Finance AI Agent | Folder: docs/finance/

### Tasks (in order):
1. Create MVP budget estimate (docs/finance/budgets/)
   - Supabase: Free tier (then Pro at ~$25/month)
   - Expo/React Native: Free
   - Apple Developer: $99/year
   - Google Play: $25 one-time
   - Domain: ~$15/year
   - Claude API: ~$50/month estimated
   - VPS (Hostinger): Current plan
2. Draft Vinnova application outline (docs/finance/funding/)
   - Innovativa Startups program
   - Max 500K SEK
   - Requires Swedish AB company
3. Research ALMI loan options
4. Create financial projections (12 months)
   - Free model with future premium tier
   - Revenue projection from premium subscriptions
5. Track development costs and hours

### Delivers to: Strategy (funding timeline)
### Depends on: Product (feature scope for cost estimation)

---

## ANALYTICS DEPARTMENT
Owner: Analytics AI Agent | Folder: docs/analytics/

### Tasks (in order):
1. Define KPI framework (docs/analytics/dashboards/)
   - DAU/MAU ratio
   - Onboarding completion rate
   - Partner invite acceptance rate
   - Weekly content engagement
   - Checklist completion rate
   - Retention (Day 1, Day 7, Day 30)
2. Create event tracking plan
   - Screen views
   - Button clicks
   - Feature usage
   - Error events
3. Design analytics dashboard requirements
4. Plan A/B testing framework for post-launch
5. Create user survey template for beta testers

### Delivers to: Engineering (tracking events to implement), Product (metrics)
### Depends on: Product (screen list, features)

---

## CX (CUSTOMER EXPERIENCE) DEPARTMENT
Owner: CX AI Agent | Folder: docs/cx/

### Tasks (in order):
1. Create FAQ document (docs/cx/faq/)
   - Account setup questions
   - Partner invite questions
   - Data privacy questions
   - Technical support questions
2. Write onboarding email templates (docs/cx/templates/)
   - Welcome email
   - Partner invited email
   - Weekly pregnancy update email
3. Define support channels
   - In-app feedback form
   - Email support (support@bloomapp.se)
4. Create knowledge base articles (docs/cx/knowledge-base/)
5. Design user feedback collection process

### Delivers to: Marketing (FAQ for website), Engineering (support features)
### Depends on: Product (features), Legal (privacy FAQ answers)

---

## STRATEGY DEPARTMENT (CEO OFFICE)
Owner: Strategy AI Agent | Folder: docs/strategy/

### Tasks (in order):
1. Define OKRs for MVP launch (docs/strategy/okrs/)
   - Objective: Launch Bloom MVP in Sweden
   - KR1: 100 beta users in first month
   - KR2: 50% partner invite acceptance rate
   - KR3: 4.0+ App Store rating
2. Create partnership target list (docs/strategy/partnerships/)
   - Swedish healthcare providers (MVC - modravardscentralen)
   - Pregnancy product brands
   - Parenting media (Vi Foraldrar, Mama)
3. Research Swedish AB company formation
   - Bolagsverket registration process
   - Required for Vinnova application
   - Estimated cost and timeline
4. Create launch timeline with milestones
5. Plan post-MVP roadmap priorities

### Delivers to: Finance (company formation costs), Marketing (partnership leads)
### Depends on: Product (MVP scope)

---

## CROSS-DEPARTMENT RULES

1. **No blocking on CEO**: If a task is unclear, make a reasonable decision and document it. CEO reviews weekly.
2. **GitHub is the source of truth**: All work goes into the repo.
3. **Dependencies**: If your work depends on another department, check their folder first. If not ready, create a GitHub Issue.
4. **Quality over speed**: Better to deliver one well-done feature than three half-done ones.
5. **Swedish first**: All user-facing content in Swedish first, English second.
6. **GDPR always**: Every feature must consider data privacy from the start.

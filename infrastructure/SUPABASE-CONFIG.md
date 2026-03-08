# Supabase Configuration - Bloom App

## Project Details
- **Project Name:** bloom-app
- **Project ID:** chuxanvddvrdrdosvnmb
- **URL:** https://chuxanvddvrdrdosvnmb.supabase.co
- **Region:** West EU (Ireland) eu-west-1
- **Plan:** Free (Nano)
- **RLS:** Enabled (automatic on all new tables)

## API Keys
- **Anon Key:** (get from Supabase Dashboard > Settings > API)
- **Service Role Key:** NEVER commit this - use .env only

## Environment Variables (.env)
```
SUPABASE_URL=https://chuxanvddvrdrdosvnmb.supabase.co
SUPABASE_ANON_KEY=<get from dashboard>
SUPABASE_SERVICE_ROLE_KEY=<get from dashboard - NEVER commit>
```

## Dashboard Access
https://supabase.com/dashboard/project/chuxanvddvrdrdosvnmb

## Database Tables to Create
See docs/product/MVP-DEVELOPMENT-PLAN.md for full schema:
1. profiles
2. pregnancies
3. weekly_content
4. user_checklists
5. milestones

## Security Notes
- Row Level Security (RLS) is enabled by default
- NEVER expose service_role key in frontend code
- Anon key is safe for frontend (restricted by RLS)
- All API calls go through RLS policies

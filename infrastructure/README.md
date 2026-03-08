# Infrastructure

## Mevcut Altyapi
- **VPS:** Hostinger Ubuntu 24.04 (srv1466421.hstgr.cloud)
- **n8n:** Docker container (n8n-n8n-1), v2.10.4
- **n8n URL:** https://n8n.srv1466421.hstgr.cloud
- **Domain:** (TBD - bloom.se / bloomapp.se)

## Klasor Yapisi
- `n8n/workflows/` - n8n workflow JSON exportlari
- `n8n/credentials/` - Credential referanslari (NOT: gercek keyler DEGIL)
- `supabase/migrations/` - DB migration dosyalari
- `supabase/functions/` - Edge Functionlar
- `docker/` - Docker Compose dosyalari

## Aktif n8n Workflowlari
1. Bloom CEO Bot v3 (ct8ZyM8h46C5rzsk) - Ana gateway
2. Legal & Compliance Agent (po2HE8R724PkAvcG)
3. Finance Agent (prpHHK0hqPtAC7Lw)
4. Marketing Agent (t6iIiatdQVjnapHF)
5. Engineering Agent (qCgfEKpix4uKIeyn)
6. Content Agent (0DEii4Pp0KPwDJH)
7. Analytics Agent (1T1GMOhBUhYwfqFT)
8. CX Support Agent (G68dmoyDEKM5iSmM)

## Planlanan Servisler
- Supabase Cloud (backend)
- Expo EAS (mobile build)
- Cloudflare (CDN + DNS)
- Sentry (error tracking)

# Bloom App - Source Code

## Tech Stack
- **Frontend:** React Native + Expo (iOS & Android)
- **Backend:** Supabase (PostgreSQL + Auth + Storage + Edge Functions)
- **AI:** Anthropic Claude API (hamilelik bilgi asistani)
- **Automation:** n8n (is akislari, departman koordinasyonu)
- **Language:** TypeScript

## Klasor Yapisi
```
src/
 app/              # React Native / Expo app
    components/   # Yeniden kullanilabilir UI bilesenler
    screens/      # Ekranlar (Home, Calendar, Partner, Profile)
    hooks/        # Custom React hooks
    utils/        # Yardimci fonksiyonlar
    assets/       # Gorseller, fontlar
    navigation/   # React Navigation yapilandirmasi
    services/     # API istemcileri, Supabase client
    i18n/         # Coklu dil (sv, en, tr)
 api/              # Backend (Supabase Edge Functions)
    functions/    # Serverless fonksiyonlar
    migrations/   # Veritabani migrasyon dosyalari
    types/        # TypeScript tip tanimlamalari
 shared/           # Frontend-Backend ortak kodlar
     constants/    # Sabitler
     types/        # Paylasilmis tipler
```

## Gelistirme Ortami Kurulumu
```bash
# Prerequisites
node >= 18, npm >= 9, expo-cli

# Install
npm install

# Run dev
npx expo start

# Supabase local
supabase init
supabase start
```

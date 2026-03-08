# BLOOM - Workspace & Development Architecture

> Son guncelleme: 2026-03-08
> Hazirlayan: CEO Bot v3 + Claude AI

---

## 1. GENEL BAKIS

Bloom, Isvec pazarini hedefleyen bir hamilelik takip uygulamasidir.
Bu dokuman, tum departmanlarin is ciktilarini nereye kaydedecegini
ve uygulamanin hangi ortamda gelistirilecegini tanimlar.

---

## 2. MERKEZI DEPO: GitHub

**Repo:** `https://github.com/creativedigitalsv/bloom-app`

Tum departman ciktilari, kod, dokumanlar ve altyapi dosyalari
tek bir GitHub reposunda toplanir. Bu yaklasim:
- Versiyon kontrolu saglar (kim, ne zaman, ne degistirdi)
- Tum departmanlar arasi tutarlilik saglar
- CI/CD pipelinelari ile otomatik deploy mumkun kilar
- Backup ve disaster recovery kolaylastirir

---

## 3. TECH STACK

| Katman | Teknoloji | Amac |
|--------|-----------|------|
| Frontend | React Native + Expo | iOS & Android uygulama |
| Backend | Supabase | PostgreSQL, Auth, Storage, Edge Functions |
| AI | Anthropic Claude API | Hamilelik asistani, departman AIlari |
| Automation | n8n (Docker) | Is akislari, departman koordinasyonu |
| VPS | Hostinger Ubuntu 24.04 | n8n hosting, CI/CD runner |
| Repo | GitHub | Versiyon kontrol, CI/CD |
| CDN | Cloudflare | DNS, SSL, caching |
| Monitoring | Sentry | Error tracking |
| Analytics | PostHog / Mixpanel | Kullanici davranisi |

---

## 4. DEPARTMAN - KLASOR ESLESMESI

| Departman | n8n Workflow | Cikti Klasoru | Ornek Ciktilar |
|-----------|-------------|---------------|----------------|
| Legal & Compliance | po2HE8R724PkAvcG | docs/legal/ | Privacy Policy, ToS, DPA |
| Finance | prpHHK0hqPtAC7Lw | docs/finance/ | Butce, Vinnova basvuru |
| Marketing | t6iIiatdQVjnapHF | docs/marketing/ | Kampanya plani, brand guide |
| Engineering | qCgfEKpix4uKIeyn | src/ | App kodu, API |
| Content | 0DEii4Pp0KPwDJH | docs/marketing/content/ | Blog, sosyal medya |
| Analytics | 1T1GMOhBUhYwfqFT | docs/analytics/ | KPI raporu, dashboard |
| CX Support | G68dmoyDEKM5iSmM | docs/cx/ | FAQ, destek sablonlari |
| CEO Bot v3 | ct8ZyM8h46C5rzsk | docs/strategy/ | Toplanti kararlari, OKR |

---

## 5. GELISTIRME ORTAMI

### Yerel Gelistirme
```bash
# 1. Repo klonla
git clone https://github.com/creativedigitalsv/bloom-app.git
cd bloom-app

# 2. Bagimliliklari yukle
npm install

# 3. Expo dev server baslat
npx expo start

# 4. Supabase local (opsiyonel)
supabase init && supabase start
```

### VPS Ortami (n8n + CI/CD)
- **Sunucu:** srv1466421.hstgr.cloud
- **n8n:** https://n8n.srv1466421.hstgr.cloud
- **Docker:** n8n-n8n-1 container
- **Repo klon:** /root/bloom-app

### CI/CD Pipeline (Planlanan)
1. git push - GitHub Actions trigger
2. Lint + Test (Jest)
3. Build (Expo EAS)
4. Deploy to TestFlight / Play Console (beta)

---

## 6. IS AKISI: DEPARTMAN CIKTISI NASIL KAYDEDILIR

### Adim 1: Telegramdan Talimat
CEO Telegramdan departmana gorev verir:
"Legal departman: Privacy Policy taslagi hazirla"

### Adim 2: AI Departman Calisir
n8n workflowu calisir, Claude AI icerik uretir.

### Adim 3: Ciktiyi Kaydet
Uretilen icerik ilgili klasore kaydedilir:
docs/legal/privacy-policy/privacy-policy-v1.md

### Adim 4: GitHuba Push
```bash
cd /root/bloom-app
git add docs/legal/privacy-policy/privacy-policy-v1.md
git commit -m "Legal: Privacy Policy v1 taslagi"
git push origin main
```

### Adim 5: Review & Iterate
CEO review eder, gerekirse departmana revizyon talimat verir.

---

## 7. GELECEK ADIMLAR

### Kisa Vade (Hafta 1-2)
- [ ] Supabase projesi olustur
- [ ] Expo projesi baslat (npx create-expo-app)
- [ ] Legal: Privacy Policy v1 taslagi
- [ ] Finance: MVP butce dokumani
- [ ] Design: Wireframeler (Figma)

### Orta Vade (Hafta 3-8)
- [ ] MVP gelistirme (core features)
- [ ] n8n workflowlarini GitHub entegrasyonu
- [ ] Beta test grubu olusturma
- [ ] Vinnova basvuru hazirligi

### Uzun Vade (Hafta 9-16)
- [ ] Beta lansman (TestFlight + Play Console)
- [ ] Vinnova basvuru gonderimi
- [ ] Ilk 100 kullanici hedefi
- [ ] Seed round hazirlik
